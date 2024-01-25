import React from 'react';
import PropTypes from 'prop-types';
import './performerTile.css';

function PerformerTile({
    userImage, tileTitle, userName, userPhone, userNumber, userGender, boxColor
}) {
    const itemOnrow = (icon, header, value) => {
        return (
            <div className="infosubTileRightMainPerformaInfoDetails">
                <div className="iconHolderMainPerformaInfoDetails">
                    <span className="material-symbols-outlined">
                        {
                            icon
                        }
                    </span>
                </div>
                <div className="textInfoHolderTextPerformaDetails">
                    <div className="scHeadertextDetailsPerformaMainInfo">
                        {
                            header
                        }
                    </div>
                    <div className="scValuetextDetailsPerformaMainInfo">
                        {
                            value
                        }
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="PerFormerTileMain">
            <div className="topSectPerformerTile">
                <div className="colorBoxForHeaderPerFormerTile" style={{ backgroundColor: boxColor }} />
                <div className="titleHeaderPerformerTile">
                    {
                        tileTitle
                    }
                </div>
            </div>
            <div className="tileMainContPerformerTile">
                <div className="imageNameSectionPerformaTile">
                    <div className="imageDivPerformerTile" style={{ backgroundImage: `url('${userImage}')` }} />
                    <div className="nameValPerformerTile">
                        {
                            userName
                        }
                    </div>
                </div>
                <div className="boxUserDetailPerformaTile">
                    <div className="boxUserContHolderDetailPerformaTile">
                        <div className="rowContPerformaTile">
                            {
                                itemOnrow('wc', 'Gender', userGender)
                            }
                        </div>
                        <div className="rowContPerformaTile">
                            {
                                itemOnrow('call', 'Phone Number', userPhone)
                            }
                        </div>
                        <div className="rowContPerformaTile">
                            {
                                itemOnrow('contact_emergency', 'Uniform Number', userNumber)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

PerformerTile.propTypes = {
    userImage: PropTypes.string.isRequired,
    tileTitle: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userPhone: PropTypes.string.isRequired,
    userNumber: PropTypes.string.isRequired,
    userGender: PropTypes.string.isRequired,
};

export default PerformerTile;
