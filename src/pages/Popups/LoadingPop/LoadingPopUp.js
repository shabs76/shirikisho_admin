import React from 'react';
import PropTypes from 'prop-types';
import Loadeffect from '../../Micros/Loadeffect';
import './loadingPopUp.css';


function LoadingPopUp({ text_info }) {
    return (
        <div className="LoadingPopUpMain">
            <div className="LoadingEffectHolder">
                <Loadeffect />
            </div>
            <div className="TextLoadingPopUp">
                {
                    text_info
                }
            </div>
        </div>
    );
}

LoadingPopUp.propTypes = {
    text_info: PropTypes.string.isRequired,
};

export default LoadingPopUp;