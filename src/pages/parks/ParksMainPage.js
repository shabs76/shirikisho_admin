import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './parksMainPage.css';
// actions
import { activateSiderPop } from '../../redux/actions/siderPopActions';
import { activatePopup } from '../../redux/actions/popupActions';
// components
import ParkTableHeader from './subs/parksTable/ParkTableHeader';
import ParkTableRow from './subs/parksTable/ParkTableRow';
import _ from 'lodash';

function ParksMainPage() {
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selWard, setSelWard] = useState('');
    const [shParks, setShParks ] = useState([]);
    const fetchData = useSelector(state => state.fetchedReducer);
    const dispatch = useDispatch();
    const openParkArea = (parkId) => {
        dispatch(activateSiderPop('park', parkId));
    }
    const initData = fetchData.initialData;
    console.log(initData);

    const onChangeRegion = (regId) => {
        if (regId === '') {
            selectParkToShow();
            setDistricts([]);
            setWards([]);
            return;
        }
        const distx = [];
        setDistricts([]);
        for (let i = 0; i < initData.districts.length; i++) {
            const dist = initData.districts[i];
            if (dist.region_id === regId) {
                distx.push(dist)
            }
        }
        setDistricts(distx);
        setWards([]);
    }

    const onChangeDist = (dist_id) => {
        const wardx = [];
        setWards([]);
        for (let j = 0; j < initData.wards.length; j++) {
            const ward = initData.wards[j];
            if (ward.district_id === dist_id) {
                wardx.push(ward);
            }
        }
        setWards(wardx);
    }

    const filterPark = async (ward) => {
        const parksx = [];
        if (_.isArray(initData.parks) && !_.isEmpty(initData.parks)) {
            for (let lv = 0; lv < initData.parks.length; lv++) {
                const park = initData.parks[lv];
                if (park.ward === ward) {
                    parksx.push(park);
                }
            }
        }
        setShParks(parksx);
    }

    const selectParkToShow = () => {
        const parkx = [];
        if (_.isArray(initData.parks) && !_.isEmpty(initData.parks)) {
            let selNum = 80;
            if (initData.parks.length < 80) {
                selNum = initData.parks.length;
            }
            for (let G = 0; G < selNum; G++) {
                const park = initData.parks[G];
                parkx.push(park);
            }
        }
        setShParks(parkx);
    }

    const textsearchPark = (query) => {
        if (query === '') {
            selectParkToShow();
            return;
        }
        const parksx = [];
        if (_.isArray(initData.parks) && !_.isEmpty(initData.parks)) {
            for (let lv = 0; lv < initData.parks.length; lv++) {
                const park = initData.parks[lv];
                if (park.park_name.toLowerCase().startsWith(query.toLowerCase())) {
                    parksx.push(park);
                }
            }
        }
        setShParks(parksx);
    }

    useEffect(() => {
        selectParkToShow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="ParksmainPage">
            <div className="TopSectDashPage">
                <div className="topDashPageTextInfo">
                    <div className="TopSectHeaderPager">
                        Parking areas
                    </div>
                    <div className="topSectDescriptionPager">
                        View and manage all parking areas
                    </div>
                </div>
                <div className="addingTopPageButtonHolder">
                    <button className="addingTopPageButton" onClick={() => dispatch(activatePopup('addPark', {}))}>
                        Adding Parking Area +
                    </button>
                </div>
            </div>
            <div className="topSectFilterParksFilterHolder">
                <div className="topSectFilterParksFilter">
                    <div className="topSectFilterParksFilterCont">
                        <div className="topSectFilterSelectInpL">
                            <div className="topSectFilterSelectLebal">
                                Region
                            </div>
                            <div className="topSectFilterSelectInputHolder">
                                <select className="topSectFilterSelectInput" onChange={(e) => onChangeRegion(e.target.value)}>
                                    <option value="">Select Region</option>
                                    {
                                        _.isArray(initData.regions) && !_.isEmpty(initData.regions)
                                        ? initData.regions.map((region) => {
                                            return (
                                                <option key={region.region_id} value={region.region_id} >
                                                    {
                                                        region.region_name
                                                    }
                                                </option>
                                            )
                                        })
                                        : (<option value="all">No Regions</option>)
                                    }
                                    
                                </select>
                            </div>
                        </div>
                        {/*  */}
                        <div className="topSectFilterSelectInpL">
                            <div className="topSectFilterSelectLebal">
                                Districts
                            </div>
                            <div className="topSectFilterSelectInputHolder">
                                <select className="topSectFilterSelectInput" onChange={(e) => onChangeDist(e.target.value)}>
                                    <option value="">Select District</option>
                                    {
                                        _.isArray(districts) && !_.isEmpty(districts)
                                        ? districts.map((district) => {
                                            // 
                                            return (
                                                <option key={district.district_id} value={district.district_id} >
                                                    {
                                                        district.district_name
                                                    }
                                                </option>
                                            );
                                        })
                                        : (<option value="">Select District</option>)
                                    }
                                    
                                    
                                </select>
                            </div>
                        </div>
                        {/*  */}
                        <div className="topSectFilterSelectInpL">
                            <div className="topSectFilterSelectLebal">
                                Wards
                            </div>
                            <div className="topSectFilterSelectInputHolder">
                                <select className="topSectFilterSelectInput" onChange={(e) => setSelWard(e.target.value)}>
                                    <option value="">Select Ward</option>
                                    {
                                        _.isArray(wards) && !_.isEmpty(wards)
                                        ? wards.map((ward) => (
                                            <option key={ward.ward_id} value={ward.ward_id}>
                                                {
                                                    ward.ward_name
                                                }
                                            </option>
                                        ))
                                        : (<option value="">Select Ward</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="topSectFilterActionHolder">
                        <button className="clearFilterParksActionButton" onClick={() => onChangeRegion('')}>
                            Clear filter
                        </button>
                        <button className="filterActionParksButton" onClick={() => filterPark(selWard)}>
                            <span className="filterActionTextParks">Filter</span>
                            <span className="material-symbols-outlined">
                                filter_alt
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="parksTableHolder">
                <div className="tableHeaderSearch">
                    <div className="tableHeaderTextVals">
                        <div className="tableHeaderTextName">
                            Parking areas
                        </div>
                        <div className="tableHeaderTextDescript">
                            List of searched parking areas
                        </div>
                    </div>
                    <div className="tableSearchInputDiv">
                        <div className="iconSearchInput">
                            <span className="material-symbols-rounded">
                                search
                            </span>
                        </div>
                        <input type="text" className="tableSearchInputType" placeholder="search for parking area" onInput={(e) => textsearchPark(e.target.value)} />
                    </div>
                </div>
                <div className="parksTable">
                    <ParkTableHeader />
                    {
                        _.isArray(shParks) && !_.isEmpty(shParks)
                        ? shParks.map((park, ind) => (
                            <ParkTableRow
                                key={park.park_id+'rowTable'}
                                sn={ind+1}
                                names={park.park_name}
                                leader={
                                    _.isArray(park.leadersInfo) && !_.isEmpty(park.leadersInfo)
                                    ? `${park.leadersInfo[0].fname} ${park.leadersInfo[0].mname} ${park.leadersInfo[0].lname}`
                                    : 'No Leader'
                                }
                                leaderNo={
                                    _.isArray(park.leadersInfo) && !_.isEmpty(park.leadersInfo)
                                    ? '+'+park.leadersInfo[0].phone
                                    : '-'
                                }
                                cNo={park.last_driver_number}
                                mxNo={park.park_size}
                                vType={park.vehicleName}
                                openFun={openParkArea}
                                parkId={park.park_id}
                            />
                        ))
                        : (<div style={{ width: '100%', textAlign: 'center' }}>Zero results were found</div>)
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default ParksMainPage;
