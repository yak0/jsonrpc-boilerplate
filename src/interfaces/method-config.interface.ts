import { ParamsInterface } from './params.interface';
import { MethodInterface } from './method.interface';

export interface MethodConfigInterface {
 name: string;
 method: new () => MethodInterface;
 params: new () => ParamsInterface;
}
