import React from 'react';
import "./Home.css";

export default function Home() {
    return (
        <>
            <div className="container w-100 mx-6 mt-6">
                <div className="col-12 mb-2 mt-5 w-100 text-center" id="home__header">
                    <h6 id="header__services"> What I Do</h6>
                    <h1 className="my__services">MY SERVICES</h1>
                </div>
            </div>
           
            <div className="container" id="home__container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    
                    <div className="col">
                        <div className="service__item">
                           <img src="images/11.jpg" alt="pic1" />
                            <div className="service__content" aria-haspopup="true">
                                <h1>Web Design</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__item">
                           <img src="images/10.jpg" alt="pic1" />
                            <div className="service__content">
                                <h1>Web Development</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__item">
                           <img src="images/9.jpg" alt="pic1" />
                            <div className="service__content">
                                <h1>Creative Design</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__item">
                           <img src="images/8.jpg" alt="pic1" />
                            <div className="service__content">
                                <h1>Responsive Design</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__item">
                           <img src="images/7.jpg" alt="pic1" />
                            <div className="service__content">
                                <h1>Branding Identity</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="service__item">
                           <img src="images/6.jpg" alt="pic1" />
                            <div className="service__content">
                                <h1>24/7 Support</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}