import { getMethodNames } from '../utils';

export function bindService<T>(service: T): T {
  if (!service) return service;

  const allApis = getMethodNames(service);
  const serviceObject = service as any;
  for (const apiName of allApis) {
    serviceObject[apiName] = serviceObject[apiName].bind(service);
  }

  return serviceObject;
}
