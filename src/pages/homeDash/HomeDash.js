import React from 'react';
import { useSelector } from 'react-redux';
import './homeDash.css';
// temp
import tImg from '../../images/shirikishoIntro.png';
// components
import NumbTile from './micro/numbtile/NumbTile';
import RightSider from './micro/rightSider/RightSider';
import BubbleTile from './micro/bubbleTile/BubbleTile';
import LineGraphTile from './micro/lineGraphTile/LineGraphTile';
import BarGraphTile from './micro/barGraphTile/BarGraphTile';
import PerformerTile from './micro/performaTile/PerformerTile';
import _ from 'lodash';
import { createImageLink } from '../../shared/sharedFun';

function HomeDash() {
    const initData = useSelector(state => state.fetchedReducer.initialData);
    console.log(initData);
    return (
        <div className="mainHomeDash">
           <div className="homeDashTopSect">
                <NumbTile
                    tileColor="#4D73C81F"
                    tileIcon="groups"
                    tileName="Members"
                    cTileColor="#4D73C8"
                    tileNumb={initData.metrics.drivers}
                />
                <NumbTile
                    tileColor="#D3F0D5"
                    tileIcon="groups"
                    tileName="Active Members"
                    cTileColor="#24B42E"
                    tileNumb={initData.metrics.active}
                />
                <NumbTile
                    tileColor="#505F7940"
                    tileIcon="groups"
                    tileName="Inactive Members"
                    cTileColor="#505F79"
                    tileNumb={initData.metrics.inactive}
                />
           </div>
           <div className="GraphAndBubbleHolderHomeDash">
                <div className="regStrationMonthGraphHolder">
                    <LineGraphTile/>
                </div>
                <div className="bubbleHolderHomeDash">
                    <BubbleTile/>
                    <div className="parksTileHolderHomeDash">
                        <NumbTile
                            tileColor="#CEECF7"
                            tileIcon="local_parking"
                            tileName="Parking Areas"
                            cTileColor="#07A0DD"
                            tileNumb={initData.metrics.parks}
                        />
                    </div>
                </div>
           </div>
           <div className="barGraphHolderHomeDash">
                <BarGraphTile/>
           </div>
           <div className="homeDashRightSectHolder">
                <RightSider />
                <div className="performercollectionHolder">
                    {
                        _.isArray(initData.drivers) && !_.isEmpty(initData.drivers)
                        ? 
                        <PerformerTile 
                            userImage={createImageLink(initData.drivers[0].passport)}
                            tileTitle={'New Member'}
                            userName={initData.drivers[0].fname+' '+initData.drivers[0].lname}
                            userPhone={'+'+initData.drivers[0].phone}
                            userNumber={initData.drivers[0].uniform}
                            userGender={initData.drivers[0].gender}
                            boxColor={'#D3F0D5'}
                        />
                        : <></>
                    }
                    <PerformerTile 
                        userImage={tImg}
                        tileTitle={'Best Debtor'}
                        userName={'Demo Name'}
                        userPhone={'+255745341109'}
                        userNumber={'DMS0101004-235'}
                        userGender={'Mwanamume'}
                        boxColor={'#CEECF7'}
                    />
                </div>
           </div>
        </div>
    );
}

export default HomeDash;