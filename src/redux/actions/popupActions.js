import { PopupConst } from "../constants/popupConstants";

export const activatePopup = (mode, data) => (
    {
        type: PopupConst.OPEN_POPUP_MENU,
        payload:{
            mode,
            data,
        },
    }
);

export const deactivatePopup = () => (
    {
        type: PopupConst.CLOSE_POPUP_MENU,
        payload: {},
    }
);
