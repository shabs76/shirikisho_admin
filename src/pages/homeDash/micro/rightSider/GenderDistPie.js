import React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
        </StyledText>
    );
}

function GenderDistPie({
    data, size
}) {
    return (
        <PieChart slotProps={{ legend: {hidden: true } }} series={[{ data, innerRadius: 85, highlightScope: { faded: 'global', highlighted: 'item' }, paddingAngle: 2 }]} {...size}>
          <PieCenterLabel>Genders</PieCenterLabel>
        </PieChart>
      );
}

GenderDistPie.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    size: PropTypes.objectOf(PropTypes.string).isRequired
};

export default GenderDistPie;