import React from 'react';
import './driverTable.css';

function DriverTableheader() {
    return (
        <div className="DriverTableHeader">
            <div className="SNColumnDriverTable columnHeader">SN.</div>
            <div className="nameColumnDriverTable columnHeader">
                Names
            </div>
            <div className="phoneColumnDriverTable columnHeader">Phone</div>
            <div className="uniColumnDriverTable columnHeader">Uniform No.</div>
            <div className="parkNameDriverTable columnHeader">Parking Area</div>
            <div className="resiColumnDriverTable columnHeader">Residence</div>
            <div className="stateColumnDriverTable columnHeader">State</div>
            <div className="actColumnDriverTable columnHeader">Action</div>
        </div>
    );
}

export default DriverTableheader;