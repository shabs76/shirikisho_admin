import { PopupConst } from "../constants/popupConstants";

const initPopState = {
    state: false,
    mode: 'plain',
    data: {},
};

const PopupReducer = (state = initPopState, {type, payload}) => {
    switch (type) {
    case PopupConst.OPEN_POPUP_MENU:
        return {
            ...initPopState,
            state: true,
            mode: payload.mode,
            data: payload.data,
        };
    case PopupConst.CLOSE_POPUP_MENU:
        return {
            ...initPopState,
            state: false,
        };

    default:
        return state;
    }
};

export default PopupReducer;
