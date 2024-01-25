import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './driversMain.css';
// actions
import { activateSiderPop } from '../../redux/actions/siderPopActions';
import { activatePopup, deactivatePopup } from '../../redux/actions/popupActions';
import { deleteLogin } from '../../redux/actions/loginAction';
import { saveSearchedDrivers } from '../../redux/actions/fetchedAction';
// storage
import { saveSessionStore } from '../../shared/storage';
// componets
import DriverTableheader from './subs/driverTable/DriverTableheader';
import DriverTableRow from './subs/driverTable/DriverTableRow';
import _ from 'lodash';
import { sendToBackendPost } from '../../shared/apiCalls';

function DriversMain() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [driverList, setDriversList] = useState([]);

    const initData = useSelector(state => state.fetchedReducer);
    const dispatch = useDispatch();
    const viewDriverInfo = (driverId) => {
        dispatch(activateSiderPop('driver', driverId));
    }
    const driversIniList = () => {
        let drivx = [];
        if (typeof (initData.initialData) === 'object' &&  _.isArray(initData.initialData.drivers)) {
            drivx = initData.initialData.drivers;
        }
        setDriversList(drivx);
    }
    const searchDrives = async (e) => {
        e.preventDefault();
        if (query === '') {
            driversIniList();
            return 0;
        }
        dispatch(activatePopup('loading', { text: 'Loading drivers' }));
        const drvInfo = await sendToBackendPost('/acts/search/drivers', { query, });
        console.log(drvInfo);
        dispatch(deactivatePopup());
        if (typeof (drvInfo.state) === 'string' && drvInfo.state !== 'success' && typeof (drvInfo.adv) === 'string' && drvInfo.adv === 'logout') {
            navigate('/login');
            saveSessionStore('not-set', 'logKey');
            saveSessionStore('not-set', 'logSess');
            dispatch(deleteLogin());
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Login Error', 
                    text: typeof (drvInfo.data) === 'string' ? drvInfo.data : 'Unknown error has occurred while checking login' 
                }
            ));
            return 0;
        } else if (typeof (drvInfo.state) !== 'string' || drvInfo.state !== 'success') {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: typeof (drvInfo.data) === 'string' ? drvInfo.data : 'Unknown error has occurred fetching initial data' 
                }
            ));
            return 0;
        }

        if (_.isArray(drvInfo.data)) {
            setDriversList(drvInfo.data);
            dispatch(saveSearchedDrivers(drvInfo.data));
        } else {
            console.log(drvInfo.data);
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: 'Unexpected response' 
                }
            ));
        }

    }

    useEffect(() => {
        driversIniList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="DriversMainPage">
            <div className="TopSectDashPage">
                <div className="topDashPageTextInfo">
                    <div className="TopSectHeaderPager">
                        Drivers
                    </div>
                    <div className="topSectDescriptionPager">
                        View and manage all driver information and their parking areas
                    </div>
                </div>
            </div>
            <div className="DriversTableHolder">
                <div className="tableHeaderSearch">
                    <div className="tableHeaderTextVals">
                        <div className="tableHeaderTextName">
                            Driver lists
                        </div>
                        <div className="tableHeaderTextDescript">
                            List of all drivers
                        </div>
                    </div>
                    <div className="tableSearchInputDiv">
                        <form onSubmit={(e) => searchDrives(e)}>
                            <div className="iconSearchInput">
                                <span className="material-symbols-rounded">
                                    search
                                </span>
                            </div>
                            <input type="text" onChange={(e) => setQuery(e.target.value)} className="tableSearchInputType" placeholder="search using name, phone, parking area or ward," />
                        </form>
                    </div>
                </div>
                <div className="DriversTableDriverPage">
                    <DriverTableheader />
                    {
                        _.isArray(driverList) && driverList.length > 0 
                        ?  driverList.map((driver, ind) => {
                            return (
                                <DriverTableRow 
                                    key={driver.driver_id}
                                    sn={ind+1}
                                    names={`${driver.fname} ${driver.mname} ${driver.lname}`}
                                    phone={'+'+driver.phone}
                                    park={driver.parkName}
                                    uniNo={driver.uniform}
                                    driverId={driver.driver_id}
                                    resi={driver.residence}
                                    state={driver.status}
                                    openFun={viewDriverInfo}
                                />
                            );
                        })
                        : (<div style={{ textAlign: 'center' }}>No driver information was found</div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default DriversMain;