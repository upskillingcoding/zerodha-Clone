import React from 'react';

function Pricing() {
    return ( 
        <>
            <div className="conatiner p-5">
                <div className="row p-5">
                    <div className="col-4 p-5">
                        <h1>Unbeatable Pricing</h1>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href="" style={{textDecoration: "none"}}>See Pricing</a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6">
                        <div className="row text-center p-5">
                            <div className="col p-3 border">
                                <h1 className='mb-3'>₹0</h1>
                                <p>Free equity delivery and <br /> direct mutual funds</p>
                            </div>
                            <div className="col p-3 border">
                                <h1 className='mb-3'>₹0</h1>
                                <p>Intrady and F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Pricing;