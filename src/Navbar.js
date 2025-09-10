import React from 'react';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{borderBottom: '1px solid gray', backgroundColor: 'white'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a classNameName="navbar-brand" href="#">
                    <img src="media/logo.svg" alt="" style={{width: '35%'}}/>
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    
                    <form className="form-inline my-2 my-lg-0">
                       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Support</a>
                        </li>
                        
                    </ul>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;