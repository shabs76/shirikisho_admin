import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './passConfirm.css';
// static objects
import logo from '../../../images/logo.png';
// components
import TextInputBlock from '../../Micros/TextInputBlock';

function PassConfirm({
    explanation, passFun
}) {
    const [formValues, setFormValues] = useState({});
    const [errSms, setErrSms] = useState('');
    const getvaluesForm = (Inputname, value) => {
        const tempFormVal = formValues;
        // check if it the check value
        if (typeof (value) === 'boolean') {
            if(value) {
                tempFormVal[Inputname] = 'yes';
            } else {
                delete tempFormVal[Inputname];
            }
        } else {
            tempFormVal[Inputname] = value;
        }
        setFormValues({
            ...tempFormVal,
        });
    };
    const getInsertedPassword = (e)=>{
        e.preventDefault();
        setErrSms('');
        if (typeof (formValues.password) === 'undefined' || formValues.password.replace(/\s/g, '').length < 6) {
            setErrSms('Incorrect password');
            return 0;
        }
        passFun(formValues.password);
    }
    return (
        <div className="PassConfirmMain">
            <div className="PassConfirmHeader">
                <img src={logo} className="logooNpopUpPassconfirm" alt="company logo" />
                <h2 className="PassconfirmHeader">Password Confirm</h2>
            </div>
            <div className="midSectPassConfirm">
                {
                    explanation
                }
            </div>
            <div className="passConfirmFormHolder">
                <form className="formConfirm" onSubmit={(e) => getInsertedPassword(e)}>
                    <TextInputBlock
                        InputName="password"
                        LabelName="Password"
                        placeHolder="your password"
                        Type="password"
                        InputStyleClass={false}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="passConfirmError">
                        {
                            errSms
                        }
                    </div>
                    <div className="passConfirmButtonHolder">
                        <button className="passConfirmButton" type="submit">
                            Confirm Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

PassConfirm.propTypes = {
    explanation: PropTypes.string.isRequired,
    passFun: PropTypes.func.isRequired
};

export default PassConfirm;