import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './inputSlider.css';


function InputSlider({
    LabelName, min, max, onchangeFun, InputName, value, SIUnit, defaultVal,
}) {
    return (
        <div className="InputSliderMain">
            <div className="labelInputSlider">
                {
                    LabelName
                }
            </div>
            <Slider
                className="SlidersStyles"
                min={min}
                max={max}
                defaultValue={defaultVal}
                keyboard={true}
                onChange={(e) => onchangeFun(e, InputName)}
            />
            <div className="currentSliderValueNUnit">
                <div className="currentSliderValue">
                    {
                        value
                    }
                </div>
                <div className="currentSliderUnit">
                    {
                        SIUnit
                    }
                </div>
            </div>
        </div>
    );
}

InputSlider.propTypes = {
    LabelName: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    InputName: PropTypes.string.isRequired,
    onchangeFun: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    SIUnit: PropTypes.string.isRequired,
    defaultVal: PropTypes.number.isRequired,
};

export default InputSlider;
