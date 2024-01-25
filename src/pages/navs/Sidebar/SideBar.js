import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sideBar.css';
// static data
import { sideBarMenus } from '../../../staticData/InternalStaticData';
import logo from '../../../images/logo.png'
// components
import SideNavButton from '../navs_micro/SideNavButton';
function SideBar() {
    const [activeMenyu, setActiveMenyu] = useState(sideBarMenus[0].svId);
    const navigate = useNavigate();
    const openMeu = (menuId) => {
        setActiveMenyu(menuId);
        if (menuId !== 'daxhboard') {
            navigate(`/dash/${menuId}`);
        } else {
            navigate(`/dash/`);
        }
        
    }
    return (
        <div className="SideBarMain">
            <div className="SideBarFloter">
                <div className="TopSectNavbar">
                    <div className="topSectImageHolder">
                        <img src={logo} className="sideBarImagPlatForm" alt="company logo" />
                    </div>
                    <div className="NameAppSideNav" style={{display: 'none'}}>Shirikisho</div>
                    <div className="AppTySideNav" style={{display: 'none'}}>Admins</div>
                </div>
                <div className="MenuHolderSidaNab">
                    {
                        sideBarMenus.map((menyu, index) => {
                            return (
                                <SideNavButton
                                    key={menyu.svId+index}
                                    name={menyu.name}
                                    butnFun={(ic) =>{
                                        openMeu(ic);
                                    }}
                                    buttonId={menyu.svId}
                                    activeState={activeMenyu === menyu.svId}
                                    iconName={menyu.icon}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SideBar;
