import React from 'react';
import './NoNet.css';

const NoNet = () => {
    return (
        <>          
            <div className="NoNet">
                <div className="gearbox">
                    <div className="overlay"></div>
                        <div className="gear one">
                        <div className="gear-inner">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        </div>
                        <div className="gear two">
                        <div className="gear-inner">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        </div>
                        <div className="gear three">
                        <div className="gear-inner">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        </div>
                        <div className="gear four large">
                        <div className="gear-inner">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        </div>
                    </div>
                    <div>
                    <h1 className="nonet-desc">Connect to the Internet</h1>
                    <h2>You're offline. Check your connection.</h2>
                    </div>
            </div>
        </>
    )
}

export default NoNet;