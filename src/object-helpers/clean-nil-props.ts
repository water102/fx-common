import { isNil, reject } from 'ramda';

export const cleanNilProps = reject<any>(isNil);