import { version as uuidVersion, validate as uuidValidate } from 'uuid';

export const isUuidV4 = (uuid: string) => {
  return uuidValidate(uuid) && uuidVersion(uuid) === 4;
};
