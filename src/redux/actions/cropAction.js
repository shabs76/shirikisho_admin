import { CropConst } from "../constants/cropConstant";

export const addCroppedImge = (data) => (
    {
        type: CropConst.ADD_CROPPED_DATA,
        payload: data,
    }
);

export const clearCroppedImg = () => (
    {
        type: CropConst.CLEAR_CROPPED_IMAGE,
        payload: {},
    }
);

export const sendCroppedImageNCaption = (image, caption) => (
    {
        type: CropConst.SEND_TEXT_CROPED_IMAGE,
        payload: {
            image,
            caption
        }
    }
)