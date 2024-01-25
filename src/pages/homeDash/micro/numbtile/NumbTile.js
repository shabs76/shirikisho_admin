import React from 'react';
import PropTypes from 'prop-types';
import './numbTile.css'

function NumbTile({
    tileName, tileNumb, tileIcon, tileColor, cTileColor
}) {
    return (
        <div className="tileMainClass">
            <div className="textContNumbTileHolder">
                <div className="tileNameHolder">
                    {
                        tileName
                    }
                </div>
                <div className="tileNumbNumbVal">
                    {
                        tileNumb
                    }
                </div>
            </div>
            <div className="iconHolderNumbTile" style={{ backgroundColor: tileColor }}>
                <span className="material-symbols-outlined" style={{ color: cTileColor }}>
                    {
                        tileIcon
                    }
                </span>
            </div>
        </div>
    );
}

NumbTile.propTypes = {
    tileName: PropTypes.string,
    tileColor: PropTypes.string,
    tileNumb: PropTypes.number,
    tileIcon: PropTypes.string,
    cTileColor: PropTypes.string
};

export default NumbTile;
