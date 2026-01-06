import { AnyFunction } from '../type/any-function';
export declare const applyMethodDecorators: (target: any, method: AnyFunction) => (...methodDecorators: MethodDecorator[]) => void;
