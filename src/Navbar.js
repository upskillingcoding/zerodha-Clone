import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light " style={{borderBottom: '1px solid gray', backgroundColor: 'white'}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link classNameName="navbar-brand" to='/'>
                    <img src="media/logo.svg" alt="" style={{width: '35%'}}/>
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    
                    <form className="form-inline my-2 my-lg-0">
                       <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="support">Support</Link>
                        </li>
                        
                    </ul>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Navbar;