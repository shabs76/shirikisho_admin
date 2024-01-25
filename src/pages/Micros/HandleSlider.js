import React from 'react';
import PropTypes from 'prop-types';

function HandleSlider({ numb }) { // this may not be useful for now
    return (
        <div className="HandleToolTipMain">
            <div className="UpArrowHandleSlider" />
            <div className="contentHandleSlider">
                {
                    numb
                }
            </div>
        </div>
    );
}

HandleSlider.propTypes = {
    numb: PropTypes.number.isRequired,
};
export default HandleSlider;