import React from 'react'


const HeaderTopbar = () => {
    return(	
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-7 col-md-5 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i><img src='/images/icon/1.png' alt=""/></i>24/7 zakelijke storingsdienst</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-7 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li><a legacyBehavior href="tel:+31640961848"><i><img src='/images/icon/2.png' alt=""/></i>Zakelijke lijn: 06 40 96 18 48</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;
