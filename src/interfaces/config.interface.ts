import { MethodConfigInterface } from './method-config.interface';
import { ValidatorOptions } from 'class-validator';

export interface ConfigInterface {
  port: number;
  mongodb: string;
  rpcEndPoint: string;
  methods: MethodConfigInterface[];
  validatorOptions: ValidatorOptions;
}
