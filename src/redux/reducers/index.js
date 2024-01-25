import { combineReducers } from "@reduxjs/toolkit";
import ActiveSearchRed from './expo';
import PopupReducer from './popupReducer';
import CropReducer from './cropReducer';
import SiderPopReducer from "./siderPopReducer";
import loginReducer from "./loginReducer";
import fetchedReducer from "./fetchedReducer";

const allreducers = combineReducers({
    ActiveSearchRed,
    PopupReducer,
    CropReducer,
    SiderPopReducer,
    loginReducer,
    fetchedReducer
});

export default allreducers;