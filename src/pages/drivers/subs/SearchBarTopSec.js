import React from 'react';
import './searchBartTopSec.css';

function SearchBarTopSec() {
    return (
        <div className="searchBarTopsecmain">
            <div className="searchContsholder xsmallShadow">
                <div className="iconHolderSearchbar">
                    <span className="material-symbols-rounded">
                        motorcycle
                    </span>
                </div>
                <div className="searctTypeHolder">
                    <select className="searchTypeInput">
                        <option value="phone">Phone Number</option>
                        <option value="park">Parking Area</option>
                    </select>
                </div>
                <div className="serchtextinputHolder">
                    <input type="text" className="searchInput" placeholder="Search for drivers" />
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

export default SearchBarTopSec;
