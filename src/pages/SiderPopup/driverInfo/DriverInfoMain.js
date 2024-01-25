import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './driverInfoMain.css';
// tempo
import tImage from '../../../images/shirikishoIntro.png'
import MainInfoDriver from './micros/MainInfoDriver';
import DriverPersonal from './micros/DriverPersonal';
import VehicleDetails from './micros/VehicleDetails';
import AdditionalInfo from './micros/AdditionalInfo';
import _ from 'lodash';
import { createImageLink, formatDateCool } from '../../../shared/sharedFun';

function DriverInfoMain({
    driver_id
}) {
    const initData = useSelector(state => state.fetchedReducer);
    let driver = '';
    if (_.isArray(initData.initialData.drivers) && !_.isEmpty(initData.initialData.drivers)) {
        for (let index = 0; index < initData.initialData.drivers.length; index++) {
            const driverdt = initData.initialData.drivers[index];
            if (driverdt.driver_id === driver_id) {
                driver = driverdt;
                break;
            }
        }
    }
    console.log(initData.sDrivers);
    /// check on the searched lits
    if ((typeof (driver) !== 'object' || _.isEmpty(driver)) && _.isArray(initData.sDrivers) && !_.isEmpty(initData.sDrivers)) {
        for (let id = 0; id < initData.sDrivers.length; id++) {
            const drvs = initData.sDrivers[id];
            if (drvs.driver_id === driver_id) {
                driver = drvs;
                break;
            } 
        }
    }

    if (typeof (driver) !== 'object' || _.isEmpty(driver)) {
        return (
            <div className="NoDataAbout">
                Driver does not exist, Please refresh the page.
            </div>
        );
    }
    return (
        <div className="driverInfoMain">
            <div className="sectDriverInfo">
                <MainInfoDriver
                    image={createImageLink(driver.passport)}
                    flName={`${driver.fname} ${driver.mname} ${driver.lname}`}
                    uniNumb={driver.uniform}
                    email={driver.email}
                    phone={'+'+driver.phone}
                    licNumb={driver.licence_number}
                    locRes={driver.residence}
                    statusz={driver.status}
                    parkName={driver.parkName}
                    parkId={driver.park_area}
                    parkLeaderName={ _.isObject(driver.parkingInfo) && _.isArray(driver.parkingInfo.leadersInfo) && !_.isEmpty(driver.parkingInfo.leadersInfo) 
                        ? `${driver.parkingInfo.leadersInfo[0].fname} ${driver.parkingInfo.leadersInfo[0].mname} ${driver.parkingInfo.leadersInfo[0].lname}` 
                        : 'No Leader'
                    }
                    parkLeaderPic={_.isObject(driver.parkingInfo) && _.isArray(driver.parkingInfo.leadersInfo) && !_.isEmpty(driver.parkingInfo.leadersInfo)
                        ? createImageLink(driver.parkingInfo.leadersInfo[0].passport)
                        : tImage}
                    parkLeaderPhone={ _.isObject(driver.parkingInfo) && _.isArray(driver.parkingInfo.leadersInfo) && !_.isEmpty(driver.parkingInfo.leadersInfo)
                        ? '+'+driver.parkingInfo.leadersInfo[0].phone
                        : '-'}
                />
            </div>
            <div className="sectDriverInfo">
                <DriverPersonal
                    gender={driver.gender}
                    dob={formatDateCool(driver.dob)}
                    martialStatus={driver.relationship}
                    address={driver.residence}
                />
            </div>
            <div className="sectDriverInfo">
                <VehicleDetails
                    vehicleType={_.isObject(driver.parkingInfo) ? driver.parkingInfo.vehicleName : 'unknown!!'}
                    vehicleNumb={driver.vehicle_number}
                    stckerNumb={driver.insurance === 'yes' ? 'I have insurance': 'I don\'t have insurance' }
                />
            </div>
            <div className="sectDriverInfo">
                <AdditionalInfo
                    idImage={createImageLink(driver.id_picture)}
                    idType={driver.id_type}
                    idNumber={driver.id_number}
                />
            </div>
        </div>
    );
}

DriverInfoMain.propTypes = {
    driver_id: PropTypes.string
};

export default DriverInfoMain;
