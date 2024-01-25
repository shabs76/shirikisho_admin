import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './createNewPass.css';
// static objects
import logo from '../../../images/logo.png';
// components
import TextInputBlock from '../../Micros/TextInputBlock';
import Loadeffect from '../../Micros/Loadeffect';

function CreateNewPass({
    passFun
}) {
    const [formValues, setFormValues] = useState({});
    const [errSms, setErrSms] = useState('');
    const [loadingState, setLoadingState] = useState(false);
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
    const changePass = async (e) => {
        e.preventDefault();
        setErrSms('');
        if (typeof (formValues.password) !== 'string' || typeof (formValues.cpassword) !== 'string') {
            setErrSms('Make sure you fill all passwords');
            return 0;
        }

        if (formValues.password.length < 6) {
            setErrSms('Password is too short. New password should have more than six characters');
            return 0;   
        }

        if (formValues.password !== formValues.cpassword) {
            setErrSms('Passwords don\'t match');
            return 0;
        }
        setLoadingState(true);
        passFun(formValues.password);
    }
    return (
        <div className="CreateNewPass">
            <div className="headerCreateNewPass">
                <img src={logo} className="CreateNewPassLogo" alt="company logo" />
                <h2 className="PassNewHeader">Create New Password</h2>
            </div>
            <div className="formHolderNewPass">
                <form className="formNewPass" onSubmit={(e) => changePass(e)}>
                    <TextInputBlock
                        InputName="password"
                        LabelName="New Password"
                        placeHolder="your password"
                        Type="password"
                        InputStyleClass={false}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <TextInputBlock
                        InputName="cpassword"
                        LabelName="Confirm New Password"
                        placeHolder="confirm new password"
                        Type="password"
                        InputStyleClass={false}
                        defaultVal=""
                        ChangeFun={getvaluesForm}
                        is_Required={true}
                    />
                    <div className="NewpassError">
                        {
                            errSms
                        }
                    </div>
                    <div className="NewPassActionsHolder">
                        <button className="NewPassChangeAction" type="submit" style={!loadingState ? {} : { display: 'none' }}>
                            Submit Password
                        </button>
                        <div className="LoadingDiv" style={loadingState ? {} : { display: 'none' }}>
                            <Loadeffect />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

CreateNewPass.propTypes = {
    passFun: PropTypes.func.isRequired,
};

export default CreateNewPass;
