import React from 'react';
import PropTypes from 'prop-types';
import './mainInfoDri.css';


function MainInfoDriver({
    image, flName, uniNumb, email, phone, licNumb, statusz, locRes, parkName, parkId, parkLeaderName, parkLeaderPic, parkLeaderPhone, 
}) {

    const itemOnrow = (icon, header, value) => {
        return (
            <div className="infosubTileRightMainDriverInfoDetails">
                <div className="iconHolderMainDriverInfoDetails">
                    <span className="material-symbols-outlined">
                        {
                            icon
                        }
                    </span>
                </div>
                <div className="textInfoHolderTextDriverDetails">
                    <div className="scHeadertextDetailsDriverMainInfo">
                        {
                            header
                        }
                    </div>
                    <div className="scValuetextDetailsDriverMainInfo">
                        {
                            value
                        }
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="MainInfoDriverDetails">
            <div className="MainInfoDriverContDets">
                <div className="leftMainInfoDriverDetails">
                    <div className="imageHolderDriverDetails">
                        <img src={image} className="imageDriverDpDrverDetails" alt="driver dp" />
                    </div>
                    <div className="driverDetailsTextNames">
                        <div className="driverDetailsDriverNameval">
                            {
                                flName
                            }
                        </div>
                        <div className="driverUniformNoVals">
                            {
                                uniNumb
                            }
                        </div>
                    </div>
                </div>
                <div className="rightMainInfoIconNText">
                    <div className="topSectRightMainInfoDriverDetails">
                        <div className="rowRightMainInfoDriverDetails">
                            {
                                itemOnrow('mail', 'Email', email)
                            }
                            {
                                itemOnrow('call', 'Phone Number', phone)
                            }
                        </div>
                        {/*  */}
                        <div className="rowRightMainInfoDriverDetails">
                            {
                                itemOnrow('contact_emergency', 'License Number', licNumb)
                            }
                            {
                                itemOnrow('stat_0', 'Driver Status', statusz)
                            }
                        </div>
                        {/*  */}
                        <div className="rowRightMainInfoDriverDetails">
                            {
                                itemOnrow('local_parking', 'Parking Area', parkName)
                            }
                            {
                                itemOnrow('location_on', 'Parking Location', locRes)
                            }
                        </div>
                    </div>
                    <div className="lowSectRightMainInfoDriverDetails">
                        <div className="parkAreaLeaderTitle">
                            Parking Area Leader
                        </div>
                        <div className="parkAreaDetails">
                            <div className="imageparkArealeaderDriverDetails" style={{ backgroundImage: `url('${parkLeaderPic}')` }} />
                            <div className="rightParkLeaderInfoDriverDetails">
                                <div className="parkLeadernameDriverdetails">
                                    {
                                        parkLeaderName
                                    }
                                </div>
                                <div className="parkLeaderNumberDerverDetails">
                                    {
                                        parkLeaderPhone
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ActionAreaMainDriverDetails">
                <div className="buttonsGroupMainDriverDetails">
                    <button className="actionNormMainDriverDetails">
                        <div className="buttonNameactionNormMainDriverDetails">
                            Change Parking Area
                        </div>
                    </button>
                    <button className="actionNormMainDriverDetails" style={{ backgroundColor: 'orange' }}>
                        <div className="iconHolderactionNormMainDriverDetails">
                            <span className="material-symbols-outlined">
                                do_not_disturb_on
                            </span>
                        </div>
                        <div className="buttonNameactionNormMainDriverDetails">
                            Disable Driver
                        </div>
                    </button>
                    <button className="actionNormMainDriverDetails" style={{ backgroundColor: 'red'}}>
                        <div className="iconHolderactionNormMainDriverDetails">
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </div>
                        <div className="buttonNameactionNormMainDriverDetails">
                            Delete Driver
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

MainInfoDriver.propTypes = {
    image: PropTypes.string,
    flName: PropTypes.string,
    uniNumb: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    licNumb: PropTypes.string,
    statusz: PropTypes.string,
    locRes: PropTypes.string,
    parkName: PropTypes.string,
    parkId: PropTypes.string,
    parkLeaderName: PropTypes.string,
    parkLeaderPic: PropTypes.string,
    parkLeaderPhone: PropTypes.string,
};

export default MainInfoDriver;
