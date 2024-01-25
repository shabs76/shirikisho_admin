import React from 'react';
import PropTypes from 'prop-types';
import './serviceBubble.css';

function Servicebubble({
    serviceName, serviceImg, serviceId, opFun
}) {
    return (
        <button className="ServiceBubbleMain" onClick={()=> opFun(serviceId)}>
            <div className="serviceBubbleIconDivHolder">
                <img src={serviceImg} className="seriveBubbleIconImage" alt="service icon" />
            </div>
            <div className="serviceBubbleNameHolder">
                {
                    serviceName
                }
            </div>
        </button>
    );
}

Servicebubble.propTypes = {
    serviceName: PropTypes.string.isRequired,
    serviceImg: PropTypes.string.isRequired,
    serviceId: PropTypes.string.isRequired,
    opFun: PropTypes.func.isRequired
};

export default Servicebubble;
