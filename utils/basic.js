import { ENVIROMENTS } from "../constant/basic.js";

export const getCurrentRunningEnviorment = () => {
  console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
  return process.env.NODE_ENV === ENVIROMENTS.LOCAL
    ? ENVIROMENTS.LOCAL
    : ENVIROMENTS.DEVLOPMENT;
};
