import { IsEnum, IsNotEmpty, IsNumber, ValidateNested, IsOptional } from 'class-validator';
import { JsonSubType, Type } from 'class-transformer';
import { MethodConfigInterface } from '../interfaces';
import { RequestParams } from '../params';
import { RpcDto } from './rpc.dto';
import { RpcMethodEnum } from '../enums';
import { config } from '../config';

export class RequestDto extends RpcDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsEnum(RpcMethodEnum)
  method: RpcMethodEnum;

  @IsOptional()
  @ValidateNested()
  @Type(() => RequestParams, {
      discriminator: {
        property: '__type',
        subTypes: config.methods
          .map((m: MethodConfigInterface) => ({ value: m.params, name: m.name} as JsonSubType)),
      },
    })
  params: any;
}
