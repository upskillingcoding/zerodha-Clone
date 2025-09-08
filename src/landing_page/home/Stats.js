import React from 'react';

function Stats(){
    return(
        <>
            <div className="container p-5">
                <div className="row p-5">
                    <div className="col-lg-6 col-6 col-md-6 col-sm-12 p-5">
                        <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                        <h2 className='fs-4'>Customer-first always</h2>
                        <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with Rs3.5+ lakh crore worth of equity investment</p>

                        <h2 className='fs-4'>No spam or gimmicks</h2>
                        <p className='text-muted'>No gimmicks, spam, "gimmicks", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>

                        <h2 className='fs-4'>The Zerodha Universe</h2>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to you needs.</p>

                        <h2 className='fs-4'>Do better with money</h2>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilites transaction, but actively help you do better with your money</p>
                    </div>
                    <div className="col-lg-6 col-6 col-md-6 col-sm-12 p-5">
                        <img src="media/ecosystem.png" alt="" style={{width: '90%'}}/>
                        <div className='text-center'>
                            <a href="" className='mx-5' style={{textDecoration: "none"}}>Explore our Products</a>
                            <a href="" style={{textDecoration: "none"}}>Try Kite demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Stats;