import 'reflect-metadata';

import { Equals, IsString } from 'class-validator';

import { JsonRpc } from 'jsonrpc-lite';

export class RpcDto {
  @IsString()
  @Equals(JsonRpc.VERSION)
  readonly jsonrpc: string;
}
