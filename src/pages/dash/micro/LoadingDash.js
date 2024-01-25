import React from 'react';
import './loadingDash.css';
import Loadeffect from '../../Micros/Loadeffect';

function LoadingDash() {
    return (
        <div className="LoadingDashMain">
            <div className="loadingDashContHoldeer">
                <div className="loadingEffeDashHlder">
                    <Loadeffect />
                </div>
                <div className="loadingTextDash">
                    Loading initial Data ...
                </div>
            </div>
        </div>
    );
}

export default LoadingDash;
