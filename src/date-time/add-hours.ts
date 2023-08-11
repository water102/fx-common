import { addMinutes } from "./add-minutes";

export const addHours = (dt: Date, hours: number) => {
  return addMinutes(dt, hours * 60)
};
