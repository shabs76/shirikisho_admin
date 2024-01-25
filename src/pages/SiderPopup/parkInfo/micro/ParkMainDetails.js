import React from 'react';
import PropTypes from 'prop-types';
import './parkMainDetails.css';
// components
import ItemColumn from '../../driverInfo/micros/ItemColumn';

function ParkMainDetails({
    parkName, parkId, parkReg, parkDist, parkWard, parkSize, parkOwner
}) {
    return (
        <div className="driverMainTileDetails">
            <div className="driverHeaderSect">
                <div className="driverHeadericonTile">
                    <span className="material-symbols-outlined">
                        local_parking
                    </span>
                </div>
                <div className="driverHeaderValTile">
                    Parking Area Details
                </div>
            </div>
            <div className="driverDetailsTileBox">
                <div className="driverDetailsTileCont">
                    <div className="driverDatilsRowCont">
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Name'}
                                itemValue={parkName}
                            />
                        </div>
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Region'}
                                itemValue={parkReg}
                            />
                        </div>
                    </div>
                    <div className="driverDatilsRowCont">
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'District'}
                                itemValue={parkDist}
                            />
                        </div>  
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Ward'}
                                itemValue={parkWard}
                            />
                        </div>
                    </div>
                    <div className="driverDatilsRowCont">
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Driver Capacity'}
                                itemValue={parkSize}
                            />
                        </div>  
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Park Owner'}
                                itemValue={parkOwner}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="actionAreaParkMainDetails">
                <div className="actionAreaParkMainDetailsCont">
                    <button className="actionButtonParkDets" style={{ backgroundColor: 'orange' }}>
                        <div className="iconHolderactionNormMainParkDetails">
                            <span className="material-symbols-outlined">
                                do_not_disturb_on
                            </span>
                        </div>
                        <div className="buttonNameactionNormMainParkDetails">
                            Disable Park
                        </div>
                    </button>
                    <button className="actionButtonParkDets">
                        <div className="iconHolderactionNormMainParkDetails">
                            <span className="material-symbols-outlined">
                                visibility
                            </span>
                        </div>
                        <div className="buttonNameactionNormMainParkDetails">
                            View Members
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

ParkMainDetails.propTypes = {
    parkName: PropTypes.string.isRequired,
    parkId: PropTypes.string.isRequired,
    parkReg: PropTypes.string.isRequired,
    parkDist: PropTypes.string.isRequired,
    parkWard: PropTypes.string.isRequired,
    parkSize: PropTypes.number.isRequired,
    parkOwner: PropTypes.string.isRequired,
};

export default ParkMainDetails;
