import React from 'react';
import './services.css'

// static data
import { services } from './serviceCont';
import Servicebubble from './serviceBubble/Servicebubble';

function Services() {
    return (
        <div className="ServicesMain">
            <div className="TopSectDashPage">
                <div className="topDashPageTextInfo">
                    <div className="TopSectHeaderPager">
                        Platform Services
                    </div>
                    <div className="topSectDescriptionPager">
                        View and manage all platform services
                    </div>
                </div>
                <div className="addingTopPageButtonHolder">
                    <button className="addingTopPageButton" >
                        Activate Service
                    </button>
                </div>
            </div>
            <div className="ServicesBubblesHolder">
                <div className="servicesBubbleContArranger">
                    {
                        services.map((service) => (
                            <Servicebubble
                                serviceName={service.name}
                                serviceId={service.id}
                                serviceImg={service.icon}
                                opFun={(id) => {console.log(id);}}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Services;
