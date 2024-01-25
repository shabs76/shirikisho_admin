import React from 'react';
import PropTypes from 'prop-types';
import './driverTable.css';

function DriverTableRow({
    sn, names, phone, uniNo, park, resi, state, openFun, driverId
}) {
    return (
        <div className="DriverTableRowMain">
            <div className="SNColumnDriverTable columnVals">
                {
                    sn
                }
            </div>
            <div className="nameColumnDriverTable columnVals">
                {
                    names
                }
            </div>
            <div className="phoneColumnDriverTable columnVals">
                {
                    phone
                }
            </div>
            <div className="uniColumnDriverTable columnVals">
                {
                    uniNo
                }
            </div>
            <div className="parkNameDriverTable columnVals">
                {
                    park
                }
            </div>
            <div className="resiColumnDriverTable columnVals">
                {
                    resi
                }
            </div>
            <div className="stateColumnDriverTable columnVals">
                {
                    state
                }
            </div>
            <div className="actColumnDriverTable columnVals">
                <button className="rowActionButtonDriverTable" onClick={() => openFun(driverId)}>View More</button>
            </div>
        </div>
    );
}

DriverTableRow.propTypes = {
    sn: PropTypes.number,
    names: PropTypes.string,
    phone: PropTypes.string,
    uniNo: PropTypes.string,
    park: PropTypes.string,
    resi: PropTypes.string,
    state: PropTypes.string,
    openFun: PropTypes.func,
    driverId: PropTypes.string,
}

export default DriverTableRow;
