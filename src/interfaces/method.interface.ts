import { ParamsInterface } from './params.interface';

export interface MethodInterface {
  invoke: (params: ParamsInterface) => any;
}
