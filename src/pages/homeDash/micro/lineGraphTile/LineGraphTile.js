import React from 'react';
import { useSelector } from 'react-redux';
import {  LineChart} from '@mui/x-charts/LineChart';
import './lineGraphTile.css';

function LineGraphTile() {
    const initData = useSelector(state => state.fetchedReducer.initialData);
    const pData = [];
    const xLabels = [];
    for (let index = 0; index < initData.montReg.length; index++) {
        const reg = initData.montReg[index];
        pData.push(reg.drivers);
        xLabels.push(reg.month);
    }
    return (
        <div className="LineGraphTileMain">
            <div className="LineGraphtileHeader">
                Monthly Registration Rate
            </div>
            <div className="graphContHolder">
                <LineChart
                    width={510}
                    height={360}
                    series={[
                        {
                            data: pData
                        }
                    ]}
                    xAxis={[{ scaleType: 'point', data: xLabels, disableTicks: true, tickSize: 2 }]}
                    leftAxis={null}
                />
            </div>
        </div>
    );
}

export default LineGraphTile;
