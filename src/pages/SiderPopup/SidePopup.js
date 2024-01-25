import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// actions
import { deactivateSiderPopup } from '../../redux/actions/siderPopActions';
import './sidePopup.css';
import DriverInfoMain from './driverInfo/DriverInfoMain';
import ParkAreaInfo from './parkInfo/ParkAreaInfo';

function SidePopup() {
    const dispatch = useDispatch();
    const popData = useSelector(state => state.SiderPopReducer);

    let contx = (<div>Info</div>);
    if (popData.mode === 'driver') {
        contx = (
            <DriverInfoMain
                driver_id={popData.data}
            />
        );
    } else if (popData.mode === 'park') {
        contx = (
            <ParkAreaInfo
             parkId={popData.data}
            />
        );
    }
    return (
        <div className="siderPopMain">
            <div className="siderSectPopSider">
                <div className="floatingButtonHolderSiderPop">
                    <button className="floatButtonSiderPop" type="button" onClick={() => dispatch(deactivateSiderPopup())}>
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </button>
                </div>
                <div className="siderPopContHolder">
                    {
                        contx
                    }
                </div>
            </div>
        </div>
    );
}

export default SidePopup;
