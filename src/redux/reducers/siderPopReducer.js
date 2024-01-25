import { siderPopConst } from "../constants/siderPopConst";

const initPopState = {
    state: false,
    mode: 'no',
    data: ''
}

const SiderPopReducer = (state = initPopState, { type, payload  }) => {
    switch (type) {
        case siderPopConst.ACTIVATE_SIDER_POP:
            console.log('LORD');
            return {
                ...state,
                state: true,
                mode: payload.mode,
                data: payload.data
            };
        case siderPopConst.DEACTIVATE_SIDER_POPUP:
            return {
                ...state,
                state: false,
            };
        default:
            return state;
    }
}

export default SiderPopReducer;