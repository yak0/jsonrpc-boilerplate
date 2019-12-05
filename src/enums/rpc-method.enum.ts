
import { strEnum } from '../utils/str-enum';
import { config } from '../config';
import { MethodConfigInterface } from '../interfaces';

export enum RpcMethodEnum {}

Object.assign(RpcMethodEnum, strEnum(config.methods.map((m: MethodConfigInterface) => m.name)));
