import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './userProfile.css';
// shared
import { createImageLink } from '../../../shared/sharedFun';
// actions
import { activatePopup } from '../../../redux/actions/popupActions';
import { deleteLogin } from '../../../redux/actions/loginAction';
import { clearfetchedData } from '../../../redux/actions/fetchedAction';
// storaga
import { saveSessionStore } from '../../../shared/storage';
// component
import Loadeffect from '../../Micros/Loadeffect';
import { sendToBackendPost } from '../../../shared/apiCalls';

function UserProfile({
    navFun
}) {
    const dispatch = useDispatch();
    const [ userData, setUserData ] = useState({});
    const [loadState, setLoadState] = useState(false);
    const initData = useSelector((state) => state.fetchedReducer.initialData);
    const insData = () => {
        if (typeof (initData.admin) === 'object') {
            setUserData({
                flname: initData.admin.fname+' '+initData.admin.lname,
                email: initData.admin.email,
                phone: initData.admin.phone,
                admin_id: initData.admin.admin_id,
                dp: initData.admin.dp,
                typex: 'root'
            });
        }
    }

    const logoutFun = async () => {
        setLoadState(true);
        const logAns = await sendToBackendPost('/auth/logout', {});
        setLoadState(false);
        if (typeof (logAns.state) === 'string' && logAns.state !== 'success' && typeof (logAns.adv) === 'string' && logAns.adv === 'logout') {
            navFun('/login');
            saveSessionStore('not-set', 'logKey');
            saveSessionStore('not-set', 'logSess');
            dispatch(deleteLogin());
            dispatch(clearfetchedData());
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Login Error', 
                    text: typeof (logAns.data) === 'string' ? logAns.data : 'Unknown error has occurred while checking login' 
                }
            ));
            return 0;
        } else if (typeof (logAns.state) !== 'string' || logAns.state !== 'success') {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: typeof (logAns.data) === 'string' ? logAns.data : 'Unknown error has occurred while decoding response' 
                }
            ));
            return 0;
        }

        if (typeof (logAns.state) === 'string' || logAns.state === 'success') {
            navFun('/login');
            dispatch(clearfetchedData());
            dispatch(activatePopup(
                'info', 
                { 
                    head: 'Success', 
                    text: typeof (logAns.data) === 'string' ? logAns.data : 'You have successfully logout, with unexpected response' 
                }
            ));
        } else {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: 'Unknown response was given.' 
                }
            ));
        }
        
    }

    useEffect(() => {
        insData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="UserProfilePopMain">
            <div className="UserProfilePopBigRow">
                <div className="UserProfilePopImgHolder">
                    <img src={createImageLink(userData.dp)} className="userProfilePopImg" alt="user dp" />
                </div>
                <div className="userProfileRightTxtInfo">
                    <div className="userProfiletypeUser">
                        {
                            userData.typex
                        }
                    </div>
                    <div className="userProfilePopname">
                        {
                            userData.flname
                        }
                    </div>
                    <div className="userProfileConts">
                        {
                            userData.email+', +'+userData.phone
                        }
                    </div>
                    <div className="userProfleActionHoler">
                        <div className="userProfileLoadHolder" style={loadState ? {} : { display: 'none' }}>
                            <Loadeffect />
                        </div>
                        <button className="userProfilePopAction" style={!loadState ? {} : { display: 'none' }} onClick={() => logoutFun()}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

UserProfile.propTypes = {
    navFun: PropTypes.func.isRequired
}

export default UserProfile;
