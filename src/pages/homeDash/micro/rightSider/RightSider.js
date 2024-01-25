import React from 'react';
import { useSelector } from 'react-redux';
import './rightSider.css';
import GenderDistPie from './GenderDistPie';

function RightSider() {
    const initData = useSelector(state => state.fetchedReducer.initialData);
    const data = [
    { value: initData.metrics.female, label: 'female', color: '#505F79' },
    { value: initData.metrics.male, label: 'male', color: '#CEECF7' },
    ];

    const size = {
        width: 330,
        height: 300,
    };
    return (
        <div className="rightSiderMain">
            <div className="ParkInfoTopRightSider">
                <div className="parkInfoTopSectRightSider">
                    <div className="parkTinfoTitleTopSecRightSider">
                        <div className="parkInfoTitleTopGreenDotRightSider" />
                        <div className="parkInfoTitleNameValue">
                            Top Parking Areas
                        </div>
                    </div>
                </div>
                <div className="parkingInfoNewparksNumber">
                    <div className="parkAreaHeadNNumber">
                        <div className="headNewParkAreas">
                            {
                                initData.topParks[0].park_name
                            }
                        </div>
                        <div className="parkNumbRightSider">
                            {
                                initData.topParks[0].members
                            }
                        </div>
                    </div>
                    {/*  */}
                    <div className="parkAreaHeadNNumber">
                        <div className="headNewParkAreas">
                            {
                                initData.topParks[1].park_name
                            }
                        </div>
                        <div className="parkNumbRightSider">
                            {
                                initData.topParks[1].members
                            }
                        </div>
                    </div>
                    {/*  */}
                    {/* <div className="parkAreaHeadNNumber">
                        <div className="headNewParkAreas">
                            {
                                initData.topParks[2].park_name
                            }
                        </div>
                        <div className="parkNumbRightSider">
                            {
                                initData.topParks[2].members
                            }
                        </div>
                    </div> */}
                    {/*                     
                    <div className="parkAreaHeadNNumber">
                        <div className="headNewParkAreas">
                            {
                                initData.topParks[3].park_name
                            }
                        </div>
                        <div className="parkNumbRightSider">
                            {
                                initData.topParks[3].members
                            }
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="genderSectRightSider">
                <div className="genderInfoTopSectRightSider">
                    <div className="genderTinfoTitleTopSecRightSider">
                        <div className="genderInfoTitleTopGreenDotRightSider" />
                        <div className="genderInfoTitleNameValue">
                            Gender Distribution
                        </div>
                    </div>
                </div>
                <div className="genderGraphRightSider">
                    <GenderDistPie
                        data={data}
                        size={size}
                    />
                </div>
                <div className="genderTextInfoLowRightSider">
                    <div className="genderHeaderRightSider">
                        Filling Event
                    </div>
                    <div className="rowGenderTextInfoRightSider">
                        <div className="rowHeadGenderTextInfoRightSider">
                            Males
                        </div>
                        <div className="rowValGenderTextInfoRightSider">
                            {
                                initData.metrics.female+initData.metrics.male <= 0 ? '0%' : `${parseInt((initData.metrics.male/(initData.metrics.female+initData.metrics.male))*100)}%`
                            }
                        </div>
                        <div className="rowValGenderTextInfoRightSider">
                            {
                                initData.metrics.male
                            }
                        </div>
                    </div>
                    <div className="rowGenderTextInfoRightSider">
                        <div className="rowHeadGenderTextInfoRightSider">
                            Females
                        </div>
                        <div className="rowValGenderTextInfoRightSider">
                            {
                                initData.metrics.female+initData.metrics.male <= 0 ? '0%' : `${parseInt((initData.metrics.female/(initData.metrics.female+initData.metrics.male))*100)}%`
                            }
                        </div>
                        <div className="rowValGenderTextInfoRightSider">
                            {
                                initData.metrics.female
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightSider;
