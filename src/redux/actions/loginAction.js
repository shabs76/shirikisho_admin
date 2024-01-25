import { LogConst } from "../constants/loginConstant";

export const saveLogin = (logKey, logSess) => (
    {
        type: LogConst.SAVE_LOGIN_DETAILS,
        payload: {
            logKey,
            logSess
        }
    }
);


export const deleteLogin = () => (
    {
        type: LogConst.DELETE_LOGIN_DETAILS,
        payload: {

        }
    }
);