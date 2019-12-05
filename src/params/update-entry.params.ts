import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { RequestParams } from './request.params';
import { ParamsInterface } from '../interfaces';

export class UpdateEntryParams extends RequestParams implements ParamsInterface {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  content: string;
}
