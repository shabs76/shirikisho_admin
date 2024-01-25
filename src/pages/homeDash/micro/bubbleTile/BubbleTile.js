import React from 'react';
import './bubbleTile.css';

function BubbleTile() {
    return (
        <div className="BubbleTileMain">
            <div className="BubbleTileHeader">
                Financials Numbers
            </div>
            <div className="BubbleContHolder">
                <div className="BubbleRoundCont loanBubble">
                    <div className="bubbleNameRound">
                        Loans
                    </div>
                    <div className="bubbleValueRound">
                        23.45 mil
                    </div>
                </div>
                {/*  */}
                <div className="BubbleRoundCont collectionsBubble">
                    <div className="bubbleNameRound">
                        Collections
                    </div>
                    <div className="bubbleValueRound">
                        23.45 mil
                    </div>
                </div>
                {/*  */}
                <div className="BubbleRoundCont defaultsBubble">
                    <div className="bubbleNameRound">
                        Defaults
                    </div>
                    <div className="bubbleValueRound">
                        2300
                    </div>
                </div>
                {/*  */}
                <div className="BubbleRoundCont loansNumberBubble">
                    <div className="bubbleNameRound">
                        Loans No.
                    </div>
                    <div className="bubbleValueRound">
                        1500
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BubbleTile;
