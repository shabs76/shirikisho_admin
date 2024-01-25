import { siderPopConst } from "../constants/siderPopConst";

export const activateSiderPop = (mode, data) => (
    {
        type: siderPopConst.ACTIVATE_SIDER_POP,
        payload : {
            mode,
            data,
        }
    }
)

export const deactivateSiderPopup = () => (
    {
        type: siderPopConst.DEACTIVATE_SIDER_POPUP,
        payload: {}
    }
)