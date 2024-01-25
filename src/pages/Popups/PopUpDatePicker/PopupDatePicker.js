import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-date-range';
import './popupDatePicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
// shared functions
import { formatDateForSQL } from '../../../shared/sharedFun';

function PopupDatePicker({
    head, funRun, exLoad
}) {
    const [dateState, setDateState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const handleSelect = (ranges) =>{
        setDateState(ranges);
        exLoad.dateRange = { startDate: formatDateForSQL(ranges[0].startDate), endDate:  formatDateForSQL(ranges[0].endDate)};
    }
    return (
        <div className="PopupDatePicker">
            <div className="PopupDatePickerHeader">
                {
                    head
                }
            </div>
            <div className="PopUpDateHolder">
                <DateRangePicker
                    onChange={item => handleSelect([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={dateState}
                    direction="horizontal"
                    preventSnapRefocus={true}
                    calendarFocus="backwards"
                />
            </div>
            <div className="PopupDateSelectButtonHolder">
                <button className="popupDateButton" onClick={() => funRun(exLoad)}>
                    Search
                </button>
            </div>
        </div>
    );
}

PopupDatePicker.propTypes = {
    head: PropTypes.string.isRequired,
    funRun: PropTypes.func.isRequired,
    exLoad: PropTypes.object.isRequired,
};

export default PopupDatePicker;
