import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './login.css';
import OTPInput from 'react-otp-input';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
// static objects
import loginIntro from '../../images/shirikishoIntro.png';
import logo from '../../images/logo.png';
import bg from '../../images/shirikishobg.png';
// components
import TextInputBlock from '../Micros/TextInputBlock';
import Loadeffect from '../Micros/Loadeffect';
// api calls
import { sendToBackendPost } from '../../shared/apiCalls';
// storage
import { saveSessionStore } from '../../shared/storage';
// actions
import { saveLogin } from '../../redux/actions/loginAction';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorSubmit, setErrorSubmit] = useState('');
    const [loadingState, setLoadingState] = useState(false);
    const [valuephon, setPhoneNumber] = useState('');
    const [formValues, setFormValues] = useState({ });
    const [currForm, setCurrForm] = useState('pass');
    const [otp, setOtp] = useState('');
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
    const sendPassPhone = async (e) => {
        e.preventDefault();
        // check phone number
        setErrorSubmit('');
        if (valuephon.length !== 13) {
            setErrorSubmit('Invalid Phone number');
            return 0;
        }
        const sendData = formValues;
        sendData.phone = valuephon.slice(1);
        setLoadingState(true);
        const ansBck = await sendToBackendPost('/auth/login', sendData);
        console.log(ansBck);
        setLoadingState(false);
        if (typeof (ansBck.state) !== 'string') {
            setErrorSubmit('Unkown error has occurred. Please try again');
            return 0;
        } else if (typeof (ansBck.state) === 'string' && ansBck.state !== 'success') {
            setErrorSubmit(ansBck.data);
            return 0;
        } else if (typeof (ansBck.state) === 'string' && ansBck.state === 'success' && ansBck.code_st === 'created') {
            setCurrForm('qrCode');
            return 0;
        }
        setCurrForm('code');
    }
    const sendCodeLogin = async (e) => {
        e.preventDefault();
        setLoadingState(true);
        const ansVer = await sendToBackendPost('/auth/login/verification', { code: otp });
        setLoadingState(false);
        console.log(ansVer);
        if (typeof (ansVer.state) !== 'string') {
            setErrorSubmit('Unkown error has occurred. Please try again');
            return 0;
        } else if (typeof (ansVer.state) === 'string' && ansVer.state !== 'success') {
            setErrorSubmit(ansVer.data);
            return 0;
        }
        dispatch(saveLogin(ansVer.logKey, ansVer.logSess));
        saveSessionStore(ansVer.logSess, 'logSess');
        saveSessionStore(ansVer.logKey, 'logKey');
        navigate('/dash');
        // setTimeout(() => {
            
        // }, 500);
        
    }

    let showVal = (<></>);
    if (currForm === 'pass') {
        showVal = (
            <>
                <div className="LogoHolder">
                    <img src={logo} className="logoImgaLogin" alt="company logo" />
                </div>
                <div className="loginPassIniHolder">
                    <form className="loginPassform" onSubmit={(e) => sendPassPhone(e)}>
                        <h2 className="formNameHeader">Login</h2>
                        <div className="AllInputsHolderLogin">
                            <div className="PhoneLableKazi">Phone Number</div>
                            <PhoneInput
                                    placeholder="eg 0744654410"
                                    id="phoneSigninUserIn"
                                    value={valuephon}
                                    countries={['TZ']}
                                    onChange={setPhoneNumber}
                                    defaultCountry="TZ"
                                    international={false}
                            />
                            <TextInputBlock
                                InputName="password"
                                LabelName="Password"
                                placeHolder="strong pass"
                                Type="password"
                                InputStyleClass={false}
                                defaultVal=""
                                ChangeFun={getvaluesForm}
                                is_Required={true}
                            />
                            <div className="formErrorDivLogin">
                                {
                                    errorSubmit
                                }
                            </div>
                            <div className="LoginButtonsHolder">
                                <button type="submit" className="loginButtonMain" style={!loadingState ? {} : { display: 'none' }}>
                                    Continue
                                </button>
                                <div className="LoadingEffectHolderLogin" style={loadingState ? {} : { display: 'none' }}>
                                    <Loadeffect />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    } else if (currForm === 'code') {
        showVal = (
            <>
                <div className="LogoHolder">
                    <img src={logo} className="logoImgaLogin" alt="company logo" />
                </div>
                <div className="loginPassIniHolder">
                    <form className="loginPassform" onSubmit={(e) => sendCodeLogin(e)}>
                        <h2 className="formNameHeader">TOTP Verification</h2>
                        <div className="AllInputsHolderLogin">
                            <div className="otpExplation">
                                Please enter Verification code from your auth App.
                            </div>
                            <div className="otpHolderLogin">
                                <OTPInput
                                    numInputs={6}
                                    value={otp}
                                    onChange={setOtp}
                                    renderSeparator={<div style={{width: '15px'}} />}
                                    renderInput={(props) => <input {...props} />}
                                    inputType="number"
                                    inputStyle={{background: 'rgba(80, 95, 121, 0.10)', width: '40px', height: '50px', textAlign: 'center', fontSize: '18px', fontWeight: '600', color: '#555', borderRadius:'3px', border: '0.20px #24B42E solid'}}
                                />
                            </div>
                            <div className="formErrorDivLogin">
                                {
                                    errorSubmit
                                }
                            </div>
                            <div className="LoginButtonsHolder">
                                <button type="submit" className="loginButtonMain" style={!loadingState ? {} : { display: 'none' }}>
                                    Confirm Code
                                </button>
                                <div className="LoadingEffectHolderLogin" style={loadingState ? {} : { display: 'none' }}>
                                    <Loadeffect />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    } else if (currForm === 'qrCode') {
        showVal = (
            <div className="loginPassIniHolder">
                <form className="loginPassform" onSubmit={(e) => sendCodeLogin(e)}>
                    <div className="AllInputsHolderLogin">
                        <div className="otpExplation" style={{ marginBottom: '10px' }}>
                            Please scan verfication code with your authetication app.
                        </div>
                        <div className="otpHolderLogin" style={{ marginTop: '5px' }}>
                            <img src="http://localhost:5700/qrcode" alt="verfication code qrcode" className="qrCodeimgLogin" />
                        </div>
                        <div className="otpHolderLogin" style={{ marginTop: '5px' }}>
                            <OTPInput
                                numInputs={6}
                                value={otp}
                                onChange={setOtp}
                                renderSeparator={<div style={{width: '15px'}} />}
                                renderInput={(props) => <input {...props} />}
                                inputType="number"
                                inputStyle={{background: 'rgba(80, 95, 121, 0.10)', width: '40px', height: '50px', textAlign: 'center', fontSize: '18px', fontWeight: '600', color: '#555', borderRadius:'3px', border: '0.20px #24B42E solid'}}
                            />
                        </div>
                        <div className="formErrorDivLogin">
                            {
                                errorSubmit
                            }
                        </div>
                        <div className="LoginButtonsHolder">
                            <button type="submit" className="loginButtonMain" style={!loadingState ? {} : { display: 'none' }}>
                                Confirm Code
                            </button>
                            <div className="LoadingEffectHolderLogin" style={loadingState ? {} : { display: 'none' }}>
                                <Loadeffect />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="LoginMain" style={{ backgroundImage: `url('${bg}')` }}>
            <div className="loginPopLogiPage">
                <div className="leftFormsHolder">
                    {
                        showVal
                    }
                </div>
                <div className="rightPicturesHolder">
                    <img src={loginIntro} className="loginMainImage" alt="login intro" />
                </div>
            </div>
        </div>
    );
}

export default Login;