import { IsNumber, IsOptional, Min } from 'class-validator';
import { RequestParams } from './request.params';
import { ParamsInterface } from '../interfaces';

export class GetEntriesParams extends RequestParams implements ParamsInterface {
  @IsOptional()
  @IsNumber()
  @Min(0)
  take: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  skip: number;
}
