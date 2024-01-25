import React from 'react';
import PropTypes from 'prop-types';
import './parkAreaLeaderDetails.css';

function ParkAreaLeaderDetails({
    driverId, name, dp, gender, dob, phone, email, uniNum, res,
}) {
    const itemOnrow = (icon, header, value) => {
        return (
            <div className="infosubTileRightMainParkInfoDetails">
                <div className="iconHolderMainParkInfoDetails">
                    <span className="material-symbols-outlined">
                        {
                            icon
                        }
                    </span>
                </div>
                <div className="textInfoHolderTextParkDetails">
                    <div className="scHeadertextDetailsParkMainInfo">
                        {
                            header
                        }
                    </div>
                    <div className="scValuetextDetailsParkMainInfo">
                        {
                            value
                        }
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="ParkAreaLeaderDetailsMain">
            <div className="ParkAreaContHolder">
                <div className="driverHeaderSect">
                    <div className="driverHeadericonTile">
                        <span className="material-symbols-outlined">
                            person
                        </span>
                    </div>
                    <div className="driverHeaderValTile">
                        Leader Details
                    </div>
                </div>
                <div className="LeaderContDetailsMegaRow">
                    <div className="leftLeaderContParkDetails">
                        <div className="imageHolderDivLeaderPark" style={{ backgroundImage: `url('${dp}')` }} />
                        <div className="leaderNameParkDetails">
                            {
                                name
                            }
                        </div>
                    </div>
                    <div className="rightLeaderContParkDetails">
                        <div className="boxLeaderDetailsRowsParkDetails">
                            <div className="rowLeaderDetailsParkDetails">
                                {
                                    itemOnrow('call', 'Phone Number', phone)
                                }
                                {
                                    itemOnrow('mail', 'Email Address', email)
                                }
                            </div>
                            <div className="rowLeaderDetailsParkDetails">
                                {
                                    itemOnrow('contact_emergency', 'Uniform No.', uniNum)
                                }
                                {
                                    itemOnrow('location_on', 'Residence', res)
                                }
                            </div>
                            <div className="rowLeaderDetailsParkDetails">
                                {
                                    itemOnrow('event', 'Birth Date', dob)
                                }
                                {
                                    itemOnrow('wc', 'Gender', gender)
                                }
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ParkAreaLeaderDetails.propTypes = {
    driverId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dp: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    uniNum: PropTypes.string.isRequired,
    res: PropTypes.string.isRequired
};

export default ParkAreaLeaderDetails;