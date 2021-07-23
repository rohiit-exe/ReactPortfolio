import React, {useEffect} from 'react';
import "./Contact.css"
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Contact() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    const handler=()=>{
        alert("Form Submitted!");
    }
    return (
        <>
            <div id="container__id">
                <div className="container" id="contact__container">
                    <div className="row pt-5">
                        <div data-aos="fade-right" className="col-lg-5 col-md- ms-5 col-sm-5 text-light" id="contact__info">
                            <h1 className="contact__header " > My Contact </h1>
                            <p> You can contact me and access my services
                                on below mentioned information.
                                Or you can fill the contact form on right. :)
                            </p>

                            <h1 className="contact__label"> Address </h1>
                            <p> Ward 10, 14 Bigha, Rishikesh, Uttrakhand</p>

                            <h1 className="contact__label"> Phone </h1>
                            <p> 08273119969</p>

                            <h1 className="contact__label"> Email </h1>
                            <p> rohiitnegii@gmail.com</p>
                        </div>

                        <div data-aos="fade-left" className="col-lg-5 col-md-5 col-sm-5 text-light" id="contact__form__container">
                            <h1 className="contact__header"> Quick Contact Form </h1>
                            <div className="contact__form">
                                <div className="half__col">
                                    <input className="bg-dark" type="text" name="name" placeholder="Your Name" />

                                </div>

                                <div className="half__col">
                                    <input className="bg-dark" type="email" name="email" placeholder="Your Email" />
                                </div>

                                <div className="half__col">
                                    <input className="bg-dark" type="phone" name="phone" placeholder="Your Phone" />
                                </div>

                                <div className="half__col">
                                    <input className="bg-dark" type="address" name="address" placeholder="Address" />
                                </div>
                                <div className="full__col">
                                    <textarea className="bg-dark" type="message" name="message" placeholder="Your Message..." />
                                </div>

                                <div className="contact__btn">
                                    <button className="btn" onClick={handler}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
