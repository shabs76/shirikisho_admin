import React from 'react';
import PropTypes from 'prop-types';
import ItemColumn from './ItemColumn';

function AdditionalInfo({
    idImage,  idType, idNumber
}) {
    return (
        <div className="driverMainTileDetails">
        <div className="driverHeaderSect">
            <div className="driverHeadericonTile">
                <span className="material-symbols-outlined">
                    note_stack
                </span>
            </div>
            <div className="driverHeaderValTile">
                More Details
            </div>
        </div>
        <div className="driverDetailsTileBox">
            <div className="driverDetailsTileCont">
                <div className="megaRowDriverDetails">
                    <div className="driverDetailsTileIdDiv"
                        style={{ backgroundImage: `url('${idImage}')` }}
                    />
                    <div className="detailsRightTileId">
                        <ItemColumn
                            itemHeader={'Identification Type'}
                            itemValue={idType}
                        />
                        <div className="spacerDriverDetailsTile" />
                        <ItemColumn
                            itemHeader={'Identification Number'}
                            itemValue={idNumber}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

AdditionalInfo.propTypes = {
    idImage: PropTypes.string,
    idNumber: PropTypes.string,
    idType: PropTypes.string,
};

export default AdditionalInfo;
