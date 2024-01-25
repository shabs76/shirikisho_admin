import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import './addParkingArea.css';
// action
import { activatePopup } from '../../../redux/actions/popupActions';
import { saveSessionStore } from '../../../shared/storage';
import { deleteLogin } from '../../../redux/actions/loginAction';
// api
import { sendToBackendPost } from '../../../shared/apiCalls';
import SelectInput from '../../Micros/SelectInput';
import TextInputBlock from '../../Micros/TextInputBlock';
import Loadeffect from '../../Micros/Loadeffect';


function AddParkingArea() {
    const dispatch = useDispatch();
    const [ wards, setWards ] = useState([
        {
            value: '',
            is_selected: false,
            OpName: 'Select Ward'
        }
    ]);
    const [subData, setSubData ] = useState({});
    const [subError, setSubError] = useState('');
    const [loadState, setLoadState] = useState(false);
    const [dist, setDists ] = useState([
        {
            value: '',
            is_selected: false,
            OpName: 'Select Districts'
        }
    ]);
    const [veh, setVeh] = useState([
        {
            value: '',
            is_selected: false,
            OpName: 'Select Vehicle Type'
        }
    ]);
    const initData = useSelector((state) => state.fetchedReducer.initialData);
    console.log(initData);

    const onChangeDist = (distId) => {
        const xWards = [
            {
                value: '',
                is_selected: false,
                OpName: 'Select Ward'
            }
        ]
        if (_.isArray(initData.wards)) {
            for (let w = 0; w < initData.wards.length; w++) {
                const wrd = initData.wards[w];
                if (wrd.district_id === distId) {
                    xWards.push(
                        {
                            value: wrd.ward_id,
                            is_selected: false,
                            OpName: wrd.ward_name
                        }
                    )
                }
            }
        }
        setWards(xWards);
    }

    const setInitDats = () => {
        const xdist = [
            {
                value: '',
                is_selected: false,
                OpName: 'Select Districts'
            }
        ]
        if (_.isArray(initData.districts)) {
            for (let d = 0; d < initData.districts.length; d++) {
                const dis = initData.districts[d];
                xdist.push(
                    {
                        value: dis.district_id,
                        is_selected: false,
                        OpName: dis.district_name
                    }
                );
            }
            setDists(xdist);
        }
        const xVeh = [
            {
                value: '',
                is_selected: false,
                OpName: 'Select Vehicle Type'
            }
        ]
        if (_.isArray(initData.vehiclesTypes)) {
            for (let v = 0; v < initData.vehiclesTypes.length; v++) {
                const vh = initData.vehiclesTypes[v];
                xVeh.push(
                    {
                        value: vh.v_type_id,
                        is_selected: false,
                        OpName: vh.v_type_name
                    }
                );
            }
            setVeh(xVeh);
        }
    }

    const onMatterInputChange = (namex, val) => {
        console.log(val);
        const xsubData = subData;
        xsubData[namex] = val;
        setSubData(xsubData);
    }

    const subMData = async (e) => {
        e.preventDefault();
        const reVals = ['park_name', 'park_size', 'vehicle_type', 'ward_id', 'owner'];
        console.log(subData);
        for (let sv = 0; sv < reVals.length; sv++) {
            const vlName = reVals[sv];
            if (typeof (subData[vlName]) === 'undefined' || subData[vlName] === '' || subData[vlName] === 0) {
                setSubError('Make sure you have filled '+vlName);
                return 0;
            }
        }
        setLoadState(true);
        const resp = await sendToBackendPost('/acts/register/parkarea', subData);
        setLoadState(false);
        if (typeof (resp.state) === 'string' && resp.state !== 'success' && typeof (resp.adv) === 'string' && resp.adv === 'logout') {
            saveSessionStore('not-set', 'logKey');
            saveSessionStore('not-set', 'logSess');
            dispatch(deleteLogin());
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Login Error', 
                    text: typeof (resp.data) === 'string' ? resp.data : 'Unknown error has occurred while checking login' 
                }
            ));
            return 0;
        } else if (typeof (resp.state) !== 'string' || resp.state !== 'success') {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: typeof (resp.data) === 'string' ? resp.data : 'Unknown error has occurred while decoding response' 
                }
            ));
            return 0;
        }

        if (typeof (resp.state) === 'string' && resp.state === 'success') {
            dispatch(activatePopup(
                'info', 
                { 
                    head: 'Success', 
                    text: typeof (resp.data.info) === 'string' ? resp.data.info : 'Process was successfully with unexpected response' 
                }
            ));
            return 0;
        } else {
            dispatch(activatePopup(
                'error', 
                { 
                    head: 'Error', 
                    text: 'Unexpected error has occurred. Please try again' 
                }
            ));
        }
    }

    useEffect(() => {
        setInitDats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="AddParkingAreaMain">
            <div className="addingParkHeader">
                <div className="parkHeaderIcon">
                    <span className="material-symbols-rounded">
                        local_parking
                    </span>
                </div>
                <div className="AddparkHeaderName">
                    Adding New Park Area
                </div>
            </div>
            <div className="formHolderAddParkArea">
                <form className="formAddingParkAreaInfo" onSubmit={(e) => subMData(e)}>
                    <TextInputBlock
                        LabelName="Park Name"
                        Type="text"
                        ChangeFun={onMatterInputChange}
                        InputStyleClass={' '}
                        defaultVal=""
                        InputName="park_name"
                        is_Required={true}
                        placeHolder="e.g. Okansa Mwalungu"
                    />
                    <TextInputBlock
                        LabelName="Number of Members"
                        Type="number"
                        ChangeFun={onMatterInputChange}
                        InputStyleClass={' '}
                        defaultVal=""
                        InputName="park_size"
                        is_Required={true}
                        placeHolder="e.g. 50"
                    />
                    <TextInputBlock
                        LabelName="Park Owner"
                        Type="text"
                        ChangeFun={onMatterInputChange}
                        InputStyleClass={''}
                        defaultVal=""
                        InputName="owner"
                        is_Required={true}
                        placeHolder="e.g. Tarura"
                    />
                    <SelectInput
                        LabelName="District"
                        ChangeFun={(name, vl) => {
                            onChangeDist(vl)
                        }}
                        InputStyleClass=""
                        defaultVal=""
                        InputName="district"
                        is_Required={true}
                        options={dist}
                    />
                    <SelectInput
                        LabelName="Ward"
                        ChangeFun={onMatterInputChange}
                        InputStyleClass={' '}
                        defaultVal=""
                        InputName="ward_id"
                        is_Required={true}
                        options={wards}
                    />
                    <SelectInput
                        LabelName="Type of Vehicles"
                        ChangeFun={onMatterInputChange}
                        InputStyleClass={' '}
                        defaultVal=""
                        InputName="vehicle_type"
                        is_Required={true}
                        options={veh}
                    />
                    <div className="errorTextLoc">
                        {
                            subError
                        }
                    </div>
                    <div className="addParkActionHolder">
                        <div className="addParkLeader" style={loadState ? { } : { display: 'none' }}>
                            <Loadeffect />
                        </div>
                        <button className="addParkActionButton" type="submit" style={!loadState ? { } : { display: 'none' }}>
                            Add Park
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddParkingArea;
