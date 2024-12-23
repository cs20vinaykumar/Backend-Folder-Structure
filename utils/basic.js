import { ENVIROMENTS } from "../constant/basic.js";

export const getCurrentRunningEnviorment = () => {
  console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
  return process.env.NODE_ENV === ENVIROMENTS.LOCAL
    ? ENVIROMENTS.LOCAL
    : ENVIROMENTS.DEVLOPMENT;
};

export const generateFileId = () => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let fileId = "";

  let length = 5;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    fileId += charset.charAt(randomIndex);
  }

  return fileId;
};

export const generateNewOtpCode = () => {
  const randomNumber = crypto.randomInt(0, 10000);
  const otp = String(randomNumber).padStart(4, 5);
  console.log(otp);
  return otp;
};

export const validateRequiredFields = (body, requiredFields) => {
  return new Promise((resolve, reject) => {
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      resolve(
        serverSuccessResponse.successResponse(
          false,
          STATUS_CODE.BAD_REQUEST,
          STATUS_MESSAGES.ERROR,
          ERROR_MESSAGES.EMPTY_REQUIRED_FIELDS,
          { missingFields }
        )
      );
    } else {
      resolve(
        serverSuccessResponse.successResponse(
          true,
          STATUS_CODE.OK,
          STATUS_MESSAGES.SUCCESS,
          SUCCESS_MESSAGES.OPERATION_SUCCESSFULL,
          null
        )
      );
    }
  });
};

// if (
//   !validationResponse.success &&
//   validationResponse.statusCode === STATUS_CODE.BAD_REQUEST
// ) {
//   return res.status(validationResponse.statusCode).json(validationResponse);
// }