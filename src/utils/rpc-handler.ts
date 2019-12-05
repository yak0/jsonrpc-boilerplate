import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { RequestDto } from '../dto';
import { validate, ValidationError } from 'class-validator';
import { config } from '../config';
import jsonrpc, { JsonRpcError, ErrorObject, SuccessObject } from 'jsonrpc-lite';
import { RpcMethodEnum } from '../enums';
import { MethodConfigInterface } from '../interfaces';

export class RpcHandler {
  private static instance: RpcHandler;

  public static getInstance(): RpcHandler {
    if (!RpcHandler.instance) {
      RpcHandler.instance = new RpcHandler();
    }
    return RpcHandler.instance;
  }

  public static async handleRequest(req: Request, res: Response, next: () => void) {
    if (!req.body) {
       res.send(jsonrpc.error(
        null,
        JsonRpcError.invalidRequest('Request body must be an array or an object'),
      ));
    } else if (Array.isArray(req.body)) {
      res.send(await RpcHandler.getInstance().handleMany(req.body));
    } else if (typeof req.body === 'object') {
      res.send(await RpcHandler.getInstance().handleOne(req.body));
    }
  }

  public static async handleError(error: any, req: Request, res: Response, next: () => void) {
    res.send(jsonrpc.error(null, JsonRpcError.parseError(error)));
  }

  private async handleMany(body: any[]): Promise<Array<ErrorObject | SuccessObject>> {
    return Promise.all(body.map((b: any) => this.handleOne(b)));
  }

  private async handleOne(body: any): Promise<ErrorObject | SuccessObject> {
    // hacky way to define discriminator to RequestDto
    if ( body.params ) {
      body.params.__type = body.method;
    }
    if (body.method && !(Object.keys(RpcMethodEnum).includes(body.method))) {
      return jsonrpc.error(body.id, JsonRpcError.methodNotFound('Method not found'));
    }
    const request: RequestDto = plainToClass(RequestDto, body);
    const errors: ValidationError[] = await validate(request, config.validatorOptions);
    if (errors.length > 0) {
      return jsonrpc.error(request.id, JsonRpcError.invalidParams(errors));
    }
    const m = config.methods
      .find((mC: MethodConfigInterface) => mC.name === request.method.toString());
    try {
      const result: any = await new m.method().invoke(request.params);
      return jsonrpc.success(request.id, result);
    } catch (error) {
      return jsonrpc.error(request.id, JsonRpcError.internalError(error));
    }
  }
}
