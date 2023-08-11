import { addMinutes } from "./add-minutes";
export const addHours = (dt, hours) => {
    return addMinutes(dt, hours * 60);
};
