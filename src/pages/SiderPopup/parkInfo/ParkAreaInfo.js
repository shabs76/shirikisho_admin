import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './parkAreaInfo.css';
import ParkMainDetails from './micro/ParkMainDetails';
import ParkAreaLeaderDetails from './micro/ParkAreaLeaderDetails';

import _ from 'lodash';
import { formatDateCool } from '../../../shared/sharedFun';
import LeaderSelector from './micro/leaderSelector/LeaderSelector';
import Loadeffect from '../../Micros/Loadeffect';
// actions
import { activatePopup } from '../../../redux/actions/popupActions';
import { deleteLogin } from '../../../redux/actions/loginAction';
import { saveParkMembers } from '../../../redux/actions/fetchedAction';
// storage
import { saveSessionStore } from '../../../shared/storage';
// api
import { sendToBackendPost } from '../../../shared/apiCalls';

function ParkAreaInfo({
    parkId
}) {
    // 
    const dispatch = useDispatch();
    const initData = useSelector(state => state.fetchedReducer.initialData);
    const [loadingMembers, setLoadingMembers] = useState(false);
    const [disVotLeader, setDisVotLeader] =  useState(false);
    let parksx = ''
    if (_.isArray(initData.parks) && !_.isEmpty(initData.parks)) {
        for (let index = 0; index < initData.parks.length; index++) {
            const park = initData.parks[index];
            if (park.park_id === parkId) {
                parksx = park;
                break;
            }
        }
    } 
    
    if (typeof (parksx) === 'string' || _.isEmpty(parksx)) {
        return (<div style={{ width: '100%', textAlign: 'center' }}>Could not find data for the parking area</div>)
    }

    const getMembers = async () => {
        setLoadingMembers(true);
        const memberInfo = await sendToBackendPost('/acts/get/park/members', { park_id: parkId });
        console.log(memberInfo);
        setLoadingMembers(false);
        if (typeof (memberInfo.state) === 'string' && memberInfo.state !== 'success' && typeof (memberInfo.adv) === 'string' && memberInfo.adv === 'logout') {
            saveSessionStore('not-set', 'logKey');
            saveSessionStore('not-set', 'logSess');
            dispatch(deleteLogin());
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Login Error', 
                    text: typeof (memberInfo.data) === 'string' ? memberInfo.data : 'Unknown error has occurred while checking login' 
                }
            ));
            return 0;
        } else if (typeof (memberInfo.state) !== 'string' || memberInfo.state !== 'success') {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: typeof (memberInfo.data) === 'string' ? memberInfo.data : 'Unknown error has occurred fetching members data' 
                }
            ));
            return 0;
        }

        if (_.isArray(memberInfo.data) && !_.isEmpty(memberInfo.data)) {
            setDisVotLeader(true);
            dispatch(saveParkMembers(memberInfo.data));
        } else {
            console.log(memberInfo.data);
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Sorry!', 
                    text: 'Parking area has no members yet' 
                }
            ));
        }
    }

    return (
        <div className="ParkAreaInfoMain">
            <div className="sectParkInfo">
                <ParkMainDetails
                    parkName={parksx.park_name}
                    parkId={parksx.park_id}
                    parkReg={parksx.location.region_name}
                    parkDist={parksx.location.district_name}
                    parkWard={parksx.location.ward_name}
                    parkSize={parksx.park_size}
                    parkOwner={parksx.owner}
                />
            </div>
            <div className="sectParkInfo">
                {
                    _.isArray(parksx.leadersInfo) && !_.isEmpty(parksx.leadersInfo)
                    ? (
                        <ParkAreaLeaderDetails
                            driverId={parksx.leadersInfo[0].driver_id}
                            name={parksx.leadersInfo[0].fname+' '+parksx.leadersInfo[0].lname}
                            dp={parksx.leadersInfo[0].passport}
                            gender={parksx.leadersInfo[0].gender}
                            dob={formatDateCool(parksx.leadersInfo[0].dob)}
                            phone={'+'+parksx.leadersInfo[0].phone}
                            email={parksx.leadersInfo[0].email}
                            uniNum={parksx.leadersInfo[0].uniform}
                            res={parksx.leadersInfo[0].residence}
                        />
                    ) : (
                        <div className="selectLeaderForParkAreaParkInfo">
                            <button className="selectLeaderButtonForParkAreaParkInfo" style={loadingMembers || disVotLeader ? { display: 'none' } : { }} onClick={() => getMembers()}>
                                Select New Leaders
                            </button>
                            <div style={loadingMembers ? {} : { display: 'none' }}>
                                <Loadeffect />
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="sectParkInfo" style={disVotLeader ? { } : { display: 'none' }}>
                <LeaderSelector
                    parkId={parkId}
                />
            </div>
        </div>
    );
}

ParkAreaInfo.propTypes = {
    parkId: PropTypes.string.isRequired,
}

export default ParkAreaInfo;
