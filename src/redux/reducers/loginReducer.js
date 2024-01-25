import { LogConst } from "../constants/loginConstant";

const initState = {
    state: 'logout',
    logKey: 'not-set',
    logSess: 'not-set',
}

const loginReducer = (state = initState, { type, payload } ) => {
    switch (type) {
        case LogConst.SAVE_LOGIN_DETAILS:
            return {
                state: 'login',
                logKey: payload.logKey,
                logSess: payload.logSess
            }
        case LogConst.DELETE_LOGIN_DETAILS:
            return {
                ...initState
            }
    
        default:
            return state;
    }
}

export default loginReducer;
