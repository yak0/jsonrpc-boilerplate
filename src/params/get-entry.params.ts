import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { RequestParams } from './request.params';
import { ParamsInterface } from '../interfaces';

export class GetEntryParams extends RequestParams implements ParamsInterface {
  @IsString()
  @IsNotEmpty()
  id: string;
}
