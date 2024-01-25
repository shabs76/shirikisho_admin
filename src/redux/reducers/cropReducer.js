import { CropConst } from "../constants/cropConstant";

const initCrop = {
    croppedData: '',
    uploadedImg: '',
    sendTextData: {
        imageUrl: '',
        caption: ''
    }
};

const CropReducer = (state = initCrop, {type, payload}) => {
    switch (type) {
    case CropConst.ADD_CROPPED_DATA:
        return {
            ...state,
            croppedData: payload,
        }

    case CropConst.CLEAR_CROPPED_IMAGE:
        return {
            ...state,
            croppedData: '',
        }
    case CropConst.SEND_TEXT_CROPED_IMAGE:
        return {
            ...state,
            sendTextData: {
                imageUrl: payload.image,
                caption: payload.caption
            }
        }
    default:
        return state;
    }
}

export default CropReducer;
