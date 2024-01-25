import React from 'react';
import PropTypes from 'prop-types';
import ItemColumn from './ItemColumn';


function DriverPersonal({
    gender, dob, martialStatus, address
}) {
    return (
        <div className="driverMainTileDetails">
            <div className="driverHeaderSect">
                <div className="driverHeadericonTile">
                    <span className="material-symbols-outlined">
                        person
                    </span>
                </div>
                <div className="driverHeaderValTile">
                    Personal Details
                </div>
            </div>
            <div className="driverDetailsTileBox">
                <div className="driverDetailsTileCont">
                    <div className="driverDatilsRowCont">
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Gender'}
                                itemValue={gender}
                            />
                        </div>
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Date of Birth'}
                                itemValue={dob}
                            />
                        </div>
                    </div>
                    <div className="driverDatilsRowCont">
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Maritial Status'}
                                itemValue={martialStatus}
                            />
                        </div>  
                        
                        <div className="itemHolderWidGiver">
                            <ItemColumn 
                                itemHeader={'Living Address'}
                                itemValue={address}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

DriverPersonal.propTypes = {
    gender: PropTypes.string,
    dob: PropTypes.string,
    martialStatus: PropTypes.string,
    address: PropTypes.string
};

export default DriverPersonal;
