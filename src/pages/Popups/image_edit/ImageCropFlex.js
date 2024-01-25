import React, { useState, useRef } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './imageCrop.css';

/// redux sthings
import { useSelector, useDispatch } from 'react-redux';
// actions
import { activatePopup } from '../../../redux/actions/popupActions';
import { addCroppedImge } from '../../../redux/actions/cropAction';

function ImageCropFlex() {
    // reduxs
    const dispatch = useDispatch();
    const imageCont = useSelector((state) => state.PopupReducer.data);
    // states
    const [rotateDeg, setRotateDeg] = useState(0);
    const cropperRef = useRef(null);
    // rotate image to certain degree
    const rotateNu = (num) => {
        if ((rotateDeg + num) === 360) {
            cropperRef.current.cropper.rotateTo(0);
            setRotateDeg(0);
        } else {
            const Tempodeg = rotateDeg + num;
            setRotateDeg(Tempodeg);
            cropperRef.current.cropper.rotateTo(Tempodeg);
        }
    };

    // reset canvas to initial values
    const reSetToInit = () => {
        cropperRef.current.cropper.reset();
    };

    /// crop image after click done buttn
    const cropImge = () => {
        cropperRef.current.cropper.getCroppedCanvas().toBlob((blob) => {
            const filex = new File([blob], 'mimiCrop.jpeg', { type: blob.type, lastModified: Date.now() });
            const urldata = window.URL.createObjectURL(filex);
            dispatch(addCroppedImge({ filex: {}, urldata, dispIcon: { display: 'none' } }));
            dispatch(activatePopup('croppImagePreview', imageCont));
        }, 'image/jpeg');
    };
    return (
        <div className="imageCropSecMain">
            <h3 className="cropMainHead" style={{display: 'none'}}>{imageCont.ImageTitle}</h3>
            <div className="canvasHolderImageCrop">
                <Cropper
                    src={imageCont.imageData}
                    style={{ width: '100%', height: '100%' }}
                    initialAspectRatio={16 / 11}
                    guides
                    viewMode={2}
                    ref={cropperRef}
                />
            </div>
            <div className="lowerControlsImageCrop">
                <button className="BtnImageCrop cancelImgeCrop" onClick={() => reSetToInit()} type="button">
                    Reset
                </button>
                <button className="BtnImageCrop rotateImageCrop" onClick={() => rotateNu(90)} type="button">
                    <span className="material-symbols-rounded">
                        refresh
                    </span>
                </button>
                <button className="BtnImageCrop sendImageCrop" onClick={() => cropImge()} type="button">
                    <span className="material-symbols-rounded">
                        done
                    </span>
                </button>
            </div>
        </div>
    );
}

export default ImageCropFlex;
