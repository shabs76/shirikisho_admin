import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './popup.css';
// actions
import { deactivatePopup } from '../../redux/actions/popupActions';
// components
import ErrorPop from './InfoNError/ErrorPop';
import LoadingPopUp from './LoadingPop/LoadingPopUp';
import PreviewEdited from './image_edit/PreviewEdited';
import ImageCropFlex from './image_edit/ImageCropFlex';
import ImageCrop from './image_edit/imageCrop';
import PopupDatePicker from './PopUpDatePicker/PopupDatePicker';
import PassConfirm from './PassConfirm/PassConfirm';
import CreateNewPass from './newPass/CreateNewPass';
import AddParkingArea from './AddParkingArea/AddParkingArea';
import UserProfile from './userProfile/UserProfile';

function Popup() { // this componet hold content of different popupTypes and decide which popup mode to display
    const PopupData = useSelector((state) => state.PopupReducer);
    const dispatch = useDispatch();
    let content = (<div>hello</div>);
    let mainStyles = {};
     if (PopupData.mode === 'error') {
        content = (
            <ErrorPop
                errorText={PopupData.data.text}
                infoState={false}
                HeadName={PopupData.data.head}
            />
        );
    } else if (PopupData.mode === 'info') {
        content = (
            <ErrorPop
                errorText={PopupData.data.text}
                infoState={true}
                HeadName={PopupData.data.head}
            />
        );
    } else if (PopupData.mode === 'loading') {
        content = (
            <LoadingPopUp
                text_info={PopupData.data.text}
            />
        );
    } else if (PopupData.mode === 'croppImagePreview') {
        content = (
            <PreviewEdited
                buttn1Fun={PopupData.data.minorFun}
                buttn1Name={PopupData.data.MinorButnName}
                buttn2Fun={PopupData.data.MainFun}
                buttn2Name={PopupData.data.MainButnName}
                iconMainName={PopupData.data.MainIconName}
            />
        );
    } else if (PopupData.mode === 'croppImageFlex') {
        content = (<ImageCropFlex />);
    } else if (PopupData.mode === 'croppImagSquare') {
        content = (<ImageCrop />);
    } else if (PopupData.mode === 'daterange') {
        mainStyles = {
            maxWidth: 'fit-content',
        }
        content = (
            <PopupDatePicker
                head={PopupData.data.head}
                funRun={PopupData.data.funRun}
                exLoad={PopupData.data.sendLoad}
            />
        );
    } else if (PopupData.mode === 'confirmPass') {
        content = (
            <PassConfirm
                explanation={PopupData.data.explanation}
                passFun={PopupData.data.passFun}
            />
        );
    } else if (PopupData.mode === 'newPass') {
        content = (
            <CreateNewPass
                passFun={PopupData.data.passFun}
            />
        );
    } else if (PopupData.mode === 'addPark') {
        content = (
            <AddParkingArea />
        );
    } else if (PopupData.mode === 'profile') {
        content = (
            <UserProfile
                navFun={PopupData.data.navFun}
            />
        );
    }
    return (
        <div className="PopupCompMain" style={mainStyles}>
            <div className="topSectionPopupComp">
                <button className="closePopupButtonPopupComp" onClick={() => dispatch(deactivatePopup())}>
                    <span className="material-symbols-rounded">
                        close
                    </span>
                </button>
            </div>
            <div className="PopupContHolder">
                {
                    content
                }
            </div>
        </div>
    );
}

export default Popup;
