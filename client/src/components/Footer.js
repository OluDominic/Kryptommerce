import React from 'react';
import logo from '../images/cover.png'

const Footer =()=> {
    return(
        <div className="footer">
            <div className="footer-sub">
                <div className="footer-image">
                    <img src={logo} alt="logo"  />
                </div>
                <div className="footer-sub1">
                    <p className="foot-market">
                        Market
                    </p>
                    <p className="foot-market">
                        Exchange
                    </p>
                    <p className="foot-market">
                        Tutorials
                    </p>
                    <p className="foot-market">
                        Wallets
                    </p>
                </div>
            </div>
            <div className="foot-sub">
                <p>
                    Come join us
                </p>
                <p>
                    info@Kryptommerce.com
                </p>
            </div>
            <div className="foot-sub1" />
            <div className="foot-sub2">
                <p>
                        @Kryptommerce 2022
                </p>
                <p>
                        All rights reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;