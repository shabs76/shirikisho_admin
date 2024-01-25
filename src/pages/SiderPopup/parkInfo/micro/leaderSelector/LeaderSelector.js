import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import './leaderSelector.css';
// storage
import { saveSessionStore } from '../../../../../shared/storage';
// actions
import { deleteLogin } from '../../../../../redux/actions/loginAction';
import { activatePopup } from '../../../../../redux/actions/popupActions';
// api
import { sendToBackendPost } from '../../../../../shared/apiCalls';
// components
import Loadeffect from '../../../../Micros/Loadeffect';

function LeaderSelector({
    parkId
}) {
    const dispatch = useDispatch();
    const [ voteData, setVoteData ] = useState({ driver_id: '',  leader_type: '', park_id: parkId });
    const [ loadVote, setLoadVote ] = useState(false);
    const fetchData = useSelector(state => state.fetchedReducer);

    const voteToleaderFun = async () => {
        setLoadVote(true);
        const ans = await sendToBackendPost('/acts/vote/park/leader', voteData);
        setLoadVote(false);
        if (typeof (ans.state) === 'string' && ans.state !== 'success' && typeof (ans.adv) === 'string' && ans.adv === 'logout') {
            saveSessionStore('not-set', 'logKey');
            saveSessionStore('not-set', 'logSess');
            dispatch(deleteLogin());
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Login Error', 
                    text: typeof (ans.data) === 'string' ? ans.data : 'Unknown error has occurred while checking login' 
                }
            ));
            return 0;
        } else if (typeof (ans.state) !== 'string' || ans.state !== 'success') {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: typeof (ans.data) === 'string' ? ans.data : 'Unknown error has occurred while decoding response' 
                }
            ));
            return 0;
        } else if (typeof (ans.state) === 'string' && ans.state === 'success') {
            dispatch(activatePopup(
                'info', 
                { 
                    head: 'Success', 
                    text: typeof (ans.data.info) === 'string' ? ans.data.info : 'Vote was successfully with strange response' 
                }
            ));
        }

    }
    return (
        <div className="leaderSelectorMain">
            <div className="leaderSelectorHeader">
                Change Parking Area Leadership
            </div>
            <div className="leaderShipChangeInputsHolder">
                <div className="leaderShipChangeInputColumn">
                    <div className="leaderShipChangeLable">
                        Type of Leader
                    </div>
                    <select className="selectInputLeaderShipChange" 
                        onChange={(e) => {
                            const tVdata = voteData;
                            tVdata.leader_type = e.target.value
                            setVoteData(tVdata);
                        }}
                    >
                        {
                            _.isArray(fetchData.initialData.leadershipTypes) && !_.isEmpty(fetchData.initialData.leadershipTypes)
                            ? fetchData.initialData.leadershipTypes.map((ltype) => (
                                <option key={ltype.type_id} value={ltype.type_id}>
                                    {
                                        ltype.type_name
                                    }
                                </option>
                            ))
                            : (
                                <option value="">Select leadership</option>
                            )
                        }
                        
                    </select>
                </div>
                <div className="leaderShipChangeInputColumn">
                    <div className="leaderShipChangeLable">
                        List of Members
                    </div>
                    <select className="selectInputLeaderShipChange"
                        onChange={(e) => {
                            const tVdata = voteData;
                            tVdata.driver_id = e.target.value
                            setVoteData(tVdata);
                        }}
                    >
                        <option value="">Select member</option>
                        {
                            _.isArray(fetchData.pMembers) && !_.isEmpty(fetchData.pMembers)
                            ? fetchData.pMembers.map((member) => (
                                <option key={member.driver_id+'parkingMember'} value={member.driver_id}>
                                    {
                                        member.fname+' '+member.mname+' '+member.lname
                                    }
                                </option>
                            ))
                            : (
                                <option value="">Select member</option>
                            )
                        }
                        
                    </select>
                </div>
                <div className="leaderShipChangeActionHolder">
                    <button className="leaderShipChangeAction" onClick={() => voteToleaderFun()} style={loadVote ? { display: 'none' } : { }}>Vote to leadership</button>
                    <div className="loaderChangeLeadership" style={loadVote ? { width: '100%' } : { display: 'none' }}>
                        <Loadeffect />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderSelector;
