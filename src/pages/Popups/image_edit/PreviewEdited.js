import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import './previewEdited.css';
// actions
import { sendCroppedImageNCaption } from '../../../redux/actions/cropAction';

function PreviewEdited({
    buttn1Name, buttn2Name, buttn1Fun, buttn2Fun, iconMainName,
}) {
    const dispatch = useDispatch();
    const [cateCaption, setCateCaption] = useState('');
    const imageCont = useSelector((state) => state.PopupReducer.data);
    const croppedImg = useSelector((state) => state.CropReducer.croppedData);

    const addCaptionAndImage = () => {
        dispatch(sendCroppedImageNCaption(croppedImg.urldata, cateCaption));
        buttn2Fun();
    }

    return (
        <div className="editedMainPreviewMain">
            <div className="imageHolder">
                <img src={croppedImg.urldata} className="imageTagPreviewEdited" alt="Edited" />
            </div>
            <div className="titleEditedMainImage">
                {imageCont.ImageTitle}
            </div>
            <div className="PreviewCaptionInputHolder">
                <input type="text" className="PreviewCaptionInput" placeholder="Caption" value={cateCaption} onChange={(e) => setCateCaption(e.target.value)} />
            </div>
            <div className="controlsEdited">
                <button type="button" className="secondClassPreviewEditedMain" onClick={() => buttn1Fun()}>
                    {buttn1Name}
                </button>
                <button type="button" className="firstClassPreviewEditedMain" onClick={() => addCaptionAndImage()}>
                    <span className="buttonTextPreviewEditedImages">{buttn2Name}</span>
                    <div className="iconButtonHolderEditedImages">
                        <span className="material-symbols-rounded">
                            {iconMainName}
                        </span>
                    </div>
                </button>
            </div>
        </div>
    );
}

PreviewEdited.propTypes = {
    buttn1Fun: PropTypes.func,
    buttn2Fun: PropTypes.func,
    buttn1Name: PropTypes.string,
    buttn2Name: PropTypes.string,
    iconMainName: PropTypes.string,
};

PreviewEdited.defaultProps = {
    buttn1Fun: () => {},
    buttn2Fun: () => {},
    buttn1Name: '',
    buttn2Name: '',
    iconMainName: '',
};

export default PreviewEdited;
