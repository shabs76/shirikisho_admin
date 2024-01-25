import React from 'react';
import PropTypes from 'prop-types';
import './itemColumn.css';

function ItemColumn({
    itemHeader, itemValue 
}) {
    return (
        <div className="itemColumnMain">
            <div className="itemColumnHeader">
                {
                    itemHeader
                }
            </div>
            <div className="itemColumnValue">
                {
                    itemValue
                }
            </div>
        </div>
    );
}

ItemColumn.propTypes = {
    itemHeader: PropTypes.string,
    itemValue: PropTypes.string
};

export default ItemColumn;
