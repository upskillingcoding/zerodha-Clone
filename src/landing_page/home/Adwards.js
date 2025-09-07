import React from 'react';


function Adwards() {
    return (  
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 p-5">
                    <img src="media/largestBroker.svg" alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volume in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stock & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govy. Security</p></li>
                            </ul>
                        </div>
                        <img src="media/pressLogos.png" alt="" style={{width: "80%"}}/>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Adwards;