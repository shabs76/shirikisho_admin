import React from 'react';
import PropTypes from 'prop-types';
import ItemColumn from './ItemColumn';

function VehicleDetails({
    vehicleType, vehicleNumb, stckerNumb
}) {
    return (
        <div className="driverMainTileDetails">
            <div className="driverHeaderSect">
                <div className="driverHeadericonTile">
                    <span className="material-symbols-outlined">
                        motorcycle
                    </span>
                </div>
                <div className="driverHeaderValTile">
                    Vehicle Details
                </div>
            </div>
            <div className="driverDetailsTileBox">
                <div className="driverDetailsTileCont">
                    <div className="driverDatilsRowCont">
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Vehicle Type'}
                                itemValue={vehicleType}
                            />
                        </div>
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Vehicle Number'}
                                itemValue={vehicleNumb}
                            />
                        </div>
                    </div>
                    <div className="driverDatilsRowCont">
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Insurance'}
                                itemValue={stckerNumb}
                            />
                        </div>  
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

VehicleDetails.propTypes = {
    vehicleType: PropTypes.string,
    vehicleNumb: PropTypes.string,
    stckerNumb: PropTypes.string
};

export default VehicleDetails;
