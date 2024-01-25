import React from 'react';
import PropTypes from 'prop-types';

function ParkTableRow({
    sn, names, leader, leaderNo, cNo, mxNo, vType, openFun, parkId
}) {
    return (
        <div className="ParkTableRowMain">
            <div className="snColumnParkTable columnVals">
                {
                    sn
                }
            </div>
            <div className="nameColumnParkTable columnVals">
                {
                    names
                }
            </div>
            <div className="leaderNameParkTable  columnVals">
                {
                    leader
                }
            </div>
            <div className="leaderPhoneParkTable columnVals">
                {
                    leaderNo
                }
            </div>
            <div className="numParkTable columnVals">
                {
                    cNo
                }
            </div>
            <div className="numParkTable columnVals">
                {
                    mxNo
                }
            </div>
            <div className="viTypeParktable columnVals">
                {
                    vType
                }
            </div>
            <div className="actionParkTable columnVals">
                <button className="actionParkButton" onClick={() => openFun(parkId)}>
                    View More
                </button>
            </div>
        </div>
    );
}


ParkTableRow.propTypes = {
    sn: PropTypes.number,
    names: PropTypes.string,
    leader: PropTypes.string,
    leaderNo: PropTypes.string,
    cNo: PropTypes.number,
    mxNo: PropTypes.number,
    vType: PropTypes.string,
    openFun: PropTypes.func,
    parkId: PropTypes.string,
};


export default ParkTableRow;