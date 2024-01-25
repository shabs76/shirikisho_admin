import React from 'react';
import PropTypes from 'prop-types';
import './sideButton.css';

function SideNavButton({ name, butnFun, activeState, buttonId, iconName }) {
    return (
        <button className={`SideNavButton ${ activeState ? 'activeSideNavButton' : '' }`} onClick={() => { butnFun(buttonId); }}>
            <div className="RowHolderSideNavButton">
                <div className="iconHolderSideNavBttn">
                    <span className="material-symbols-rounded">
                        {
                            iconName
                        }
                    </span>
                </div>
                <div className="ButtonNameSideNavBttn">
                    {
                        name
                    }
                </div>
            </div>
        </button>
    );
}
SideNavButton.propTypes = {
    name: PropTypes.string,
    butnFun: PropTypes.func,
    activeState: PropTypes.bool,
    buttonId: PropTypes.string,
    iconName: PropTypes.string,
};
export default SideNavButton;
