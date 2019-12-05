import { IsString, IsNotEmpty } from 'class-validator';
import { RequestParams } from './request.params';
import { ParamsInterface } from '../interfaces';

export class CreateEntryParams extends RequestParams implements ParamsInterface {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
