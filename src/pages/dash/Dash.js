import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './dash.css';
// components
import SideBar from '../navs/Sidebar/SideBar';
import TopNav from '../navs/topnav/TopNav';
// 
import { sendToBackendPost } from '../../shared/apiCalls';
import { saveSessionStore } from '../../shared/storage';
// actions
import { activatePopup } from '../../redux/actions/popupActions';
import { deleteLogin } from '../../redux/actions/loginAction';
import { saveInitialData } from '../../redux/actions/fetchedAction';
import LoadingDash from './micro/LoadingDash';

function Dash() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchDetails = useSelector(state => state.fetchedReducer);
    const getInitVals = async () => {
        const initvals = await sendToBackendPost('/acts/get/init/data', {});
        if (typeof (initvals.state) === 'string' && initvals.state !== 'success' && typeof (initvals.adv) === 'string' && initvals.adv === 'logout') {
            navigate('/login');
            saveSessionStore('not-set', 'logKey');
            saveSessionStore('not-set', 'logSess');
            dispatch(deleteLogin());
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Login Error', 
                    text: typeof (initvals.data) === 'string' ? initvals.data : 'Unknown error has occurred while checking login' 
                }
            ));
            return 0;
        } else if (typeof (initvals.state) !== 'string' || initvals.state !== 'success') {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: typeof (initvals.data) === 'string' ? initvals.data : 'Unknown error has occurred fetching initial data' 
                }
            ));
            return 0;
        }

        // save successs
        if (typeof (initvals.data) === 'object') {
            dispatch(saveInitialData(initvals.data));
        }
    }

    useEffect(() => {
        getInitVals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="MainDashHolder">
            <div className="sideBarHolder">
                <SideBar />
            </div>
            <div className="topNavHolder">
                <TopNav />
            </div>
            <div className="DashContHolder">
                {
                    fetchDetails.loadingAll ? <LoadingDash /> : <Outlet />
                }
            </div>
        </div>
    );
}

export default Dash;
