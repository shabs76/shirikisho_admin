import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './selectInput.css';

function SelectInput({
    LabelName,ChangeFun, InputStyleClass,  defaultVal, InputName, is_Required, options,
}) {
    let pOptions = [
        {
            OpName: 'No Options available',
            value: '',
            is_selected: true,
        }
    ];
    if (typeof (options) === 'object' && !_.isEmpty(options)) {
        pOptions = options;
    }
    return (
        <div className="SelectInputMain">
            <div className="SelectlabelName">
                {
                    LabelName
                }
            </div>
            <select name={InputName} required={is_Required} className={`SelectInputBlock ${InputStyleClass}`} defaultValue={defaultVal} onChange={(e) => ChangeFun(InputName, e.target.value)}>
                {
                    pOptions.map((option) => (
                        <option key={option.value} selected={option.is_selected} value={option.value}>
                            {
                                option.OpName
                            }
                        </option>
                    ))
                }
            </select>
            
        </div>
    );
}

SelectInput.propTypes = {
    InputName: PropTypes.string.isRequired,
    ChangeFun: PropTypes.func.isRequired,
    InputStyleClass: PropTypes.string.isRequired,
    defaultVal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    LabelName: PropTypes.string.isRequired,
    is_Required: PropTypes.bool.isRequired,
    options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]))).isRequired,
};

export default SelectInput;