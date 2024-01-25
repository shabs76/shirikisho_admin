import React from 'react';
import './parksTable.css';

function ParkTableHeader() {
    return (
        <div className="ParkTableHeaderMain">
            <div className="snColumnParkTable columnHeader">
                SN
            </div>
            <div className="nameColumnParkTable columnHeader">
                Name
            </div>
            <div className="leaderNameParkTable  columnHeader">
                Park Leader
            </div>
            <div className="leaderPhoneParkTable columnHeader">
                Leader Phone
            </div>
            <div className="numParkTable columnHeader">
                C.No
            </div>
            <div className="numParkTable columnHeader">
                Mx.No
            </div>
            <div className="viTypeParktable columnHeader">
                Vehicle Type
            </div>
            <div className="actionParkTable columnHeader">
                Actions
            </div>
        </div>
    );
}

export default ParkTableHeader;
