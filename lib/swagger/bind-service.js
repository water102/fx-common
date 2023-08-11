import { getAllPrototypeMethodNames } from "../utils";
export function bindService(service) {
    if (!service)
        return service;
    const allApis = getAllPrototypeMethodNames(service);
    const serviceObject = service;
    for (const apiName of allApis) {
        serviceObject[apiName] = serviceObject[apiName].bind(service);
    }
    return serviceObject;
}
;
