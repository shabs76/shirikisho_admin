import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart } from '@mui/x-charts/BarChart';
import './barGraphTile.css';

function BarGraphTile() {
    const initData = useSelector((state) => state.fetchedReducer.initialData);
    const barData = {fData: [0], mData: [0], lcos:['dist']}
    const initSetsData = () => {
        if (typeof (initData.barInfo) === 'object') {
            barData.lcos = initData.barInfo.xData;
            barData.fData = initData.barInfo.yData.fData;
            barData.mData = initData.barInfo.yData.mData;
        }
    }

    initSetsData();

    return (
        <div className="BarGraphTileMain">
            <div className="BarGraphTileHeader">
                Members Distribution
            </div>
            <div className="BarGraphHolderTile">
                <BarChart
                    xAxis={[{ scaleType: 'band', data: barData.lcos, categoryGapRatio: 0.5, barGapRatio: 0.2 }]}
                    series={[{ data: barData.fData, color: '#CEECF7', label: 'Females' }, { data: barData.mData, color: '#505F79', label: 'Males' },  ]}
                    width={760}
                    height={385}
                />
            </div>
        </div>
    );
}

export default BarGraphTile;
