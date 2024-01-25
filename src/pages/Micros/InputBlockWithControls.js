import React from 'react';
import PropTypes from 'prop-types';
import './textInputBlock.css';


function InputBlockWithControls({
   min, max, steps, LabelName, Type, ChangeFun, InputStyleClass,  defaultVal, InputName, is_Required, placeHolder,
}) {
    return (
        <div className="TextInputBlockMain">
            <div className="InputnameTextInputBlock">
                {
                    LabelName
                }
            </div>
            <input min={min} max={max} step={steps} placeholder={placeHolder} type={Type} required={is_Required} className={`InputTextInputBlock ${InputStyleClass}`} name={InputName} defaultValue={defaultVal} onChange={(e) => ChangeFun(InputName, e.target.value)} />
        </div>
    );
}

InputBlockWithControls.propTypes = {
    InputName: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    ChangeFun: PropTypes.func.isRequired,
    InputStyleClass: PropTypes.string.isRequired,
    defaultVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    LabelName: PropTypes.string.isRequired,
    is_Required: PropTypes.bool.isRequired,
    placeHolder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    steps: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]).isRequired,
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    min: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
};

export default InputBlockWithControls;
