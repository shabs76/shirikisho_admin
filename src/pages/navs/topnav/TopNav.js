import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './topNav.css';
// actions
import { activatePopup } from '../../../redux/actions/popupActions';
// shared fuctions
import { createImageLink } from '../../../shared/sharedFun';

function TopNav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navigeUser = (link) => {
        navigate(link);
        navigate(0);
    }
    const fetchDetails = useSelector(state => state.fetchedReducer);
    const userButtonDets = (namex, dp) => {
        return (
            <button className="userInfoButtonTopNav" onClick={() => dispatch(activatePopup('profile', { navFun: navigeUser }))}>
                <div className="userButtonInfContHolder">
                    <img src={dp} alt="user profile" className="userImagTopNav" />
                    <div className="userNameTopNavContHolder">
                        <div className="userNameTopNavValue">
                            {
                                namex
                            }
                        </div>
                        <div className="iconUserNameTopNav">
                            <span className="material-symbols-rounded">
                                expand_more
                            </span>
                        </div>
                    </div>
                </div>
            </button>
        );
    }
    return (
        <div className="topNavMain">
            <div className="topNaContHolder">
                <div className="topUserContHolder">
                    <button className="notificationTopNavButn">
                        <div className="notifiDivTopCont">
                            <span className="numbHolderNotificationTopNav">
                                0
                            </span>
                            <span className="material-symbols-outlined">
                                notifications
                            </span>
                        </div>
                    </button>
                    {
                        fetchDetails.loadingAll ? <div>Loading ...</div> : userButtonDets(fetchDetails.initialData.admin.fname+' '+fetchDetails.initialData.admin.lname, createImageLink(fetchDetails.initialData.admin.dp))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopNav;
