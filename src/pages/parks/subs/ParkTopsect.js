import React from 'react';
import './parkTopsect.css';

function ParkTopsect() {
    return (
        <div className="searchBarTopsecmain">
            <div className="searchContsholder xsmallShadow">
                <div className="iconHolderSearchbar">
                    <span className="material-symbols-rounded">
                        local_parking
                    </span>
                </div>
                <div className="searctTypeHolder">
                    <select className="searchTypeInput">
                        <option value="phone">Park Name</option>
                        <option value="park">Ward name</option>
                    </select>
                </div>
                <div className="serchtextinputHolder">
                    <input type="text" className="searchInput" placeholder="Search parks" />
                    <button className="searchButtonSearchBar">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
                </div>
            </div>
    </div>
    );
}

export default ParkTopsect;
