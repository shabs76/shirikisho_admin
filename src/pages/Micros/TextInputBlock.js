import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './textInputBlock.css';

function TextInputBlock({
    LabelName, Type, ChangeFun, InputStyleClass,  defaultVal, InputName, is_Required, placeHolder,
}) {
    const [visib, setVisib] = useState('visibility');
    const [inputType, setInputType] = useState(Type);
    const changePassWordVisility = () => {
        if (visib === 'visibility') {
            setVisib('visibility_off');
            setInputType('text');
        } else {
            setVisib('visibility');
            setInputType('password');
        }
    }
    return (
        <div className="TextInputBlockMain">
            <div className="InputnameTextInputBlock">
                {
                    LabelName
                }
            </div>
            <button type="button" style={Type === 'password' || Type === 'Password' ? {} : { display: 'none' }} className="passShowButton" onClick={() => changePassWordVisility()}>
                <span className="material-symbols-outlined">
                    {
                        visib
                    }
                </span>
            </button>
            <input placeholder={placeHolder} type={inputType} required={is_Required} className={`InputTextInputBlock ${InputStyleClass}`} name={InputName} defaultValue={defaultVal} onChange={(e) => ChangeFun(InputName, e.target.value)} />
        </div>
    );
}

TextInputBlock.propTypes = {
    InputName: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    ChangeFun: PropTypes.func.isRequired,
    InputStyleClass: PropTypes.string.isRequired,
    defaultVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    LabelName: PropTypes.string.isRequired,
    is_Required: PropTypes.bool.isRequired,
    placeHolder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TextInputBlock;