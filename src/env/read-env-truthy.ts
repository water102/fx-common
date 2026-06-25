import { readProcessEnvVar } from './read-process-env-var';
import { isEnvTruthy } from './is-env-truthy';

export function readEnvTruthy(name: string): boolean {
  return isEnvTruthy(readProcessEnvVar(name));
}
