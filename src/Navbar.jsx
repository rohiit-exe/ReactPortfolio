import React from 'react';
import CameraIcon from '@material-ui/icons/Camera';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import "./Navbar.css";
import Typewriter from 'typewriter-effect';
import Particles from 'react-particles-js';
import ParticlesConfig2 from './particle-config2';
import { Link } from "react-scroll";

const Navbar = () => {

    return (<>
        <nav className="navbar navbar-light-50 pt-0 position-relative">
            <div className="page-header">
                <Particles params={ParticlesConfig2} />
                {/* <a className="navbar-brand" href="/">
                    <CameraIcon style={{ fontSize: 35 }} />
                    Rohit
                </a> */}
                <p className="bottom__text">Creative Designer And Developer</p>
            </div>
        </nav>
        <div className="container-fluid ps-0 pe-0 col-lg mt-4 ">

            <div className=" col-md-12 col-sm-12 col-xs-12 " id="intro">
                <h6 className="name">I   AM   ROHIT    NEGI</h6>
                {/* <img className="creative__designer" src="images/designer.png" alt="desinger" /> */}
                <h1 className="creative__designer__heading">
                <Typewriter
                    options={{
                        strings: ['Creative Designer'],
                        autoStart: true,
                        loop: true,
                    }}/></h1>
                <button type="button" className="contact__button"> <Link to="container__id" spy={true} smooth={true}>
                    CONTACT ME
                </Link>
                </button>
            </div>
        </div>

        <section>
            <div className="social__div">
                <p className="icon__social">SOCIAL</p>
            </div>
            <ul className="icon__list">
                <li className="icon__item">

                    <a href="https://www.facebook.com/rohit.negi.33865854/" className="icon-link"><FaFacebookF /></a>
                </li>
            </ul>
            <ul className="icon__list">
                <li className="icon__item">
                    <a href="https://www.instagram.com/rohiitnegi/" className="icon-link"><FaInstagram /></a>
                </li>
            </ul>
            <ul className="icon__list">
                <li className="icon__item">
                    <a href="https://github.com/rohiit-exe" className="icon-link"><FaGithub /></a>
                </li>
            </ul>
            <ul className="icon__list">
                <li className="icon__item">
                    <a href="https://www.linkedin.com/in/rohit-negi-425b821b4/" className="icon-link"><FaLinkedinIn /></a>
                </li>
            </ul>
        </section>


        <div className="container text-light">

            <div className="row ps-5">
                <div className="col-6 position-absolute" id="about__me">
                    <div id="about__heading">
                    <p className="d-flex align-items-start pt-5" id="head">Web Developer & Designer</p>

                    <h1 className="d-flex align-items-start mt-3  fw-bold" id="rohit"> About Me</h1></div>
                    <p className="about__me__text"> As a developer, I enjoy bridging the gap between
                        engineering and design, combining my technical knowledge with my keen eye for design to create a beautiful product.
                        My goal is to always build applications that are scalable and efficient under
                        the hood while providing engaging, pixel-perfect user experiences.
                        <br /><br />
                        I work to make a better web; one that is fast,
                        easy to use, beautiful, accessible to all, and frustration-free.
                        I take great pride in not only being able to complete work to the high standard you expect but also go the extra mile wherever possible.
                        <br /><br />I can quickly and efficiently join your team using continuous-integration methods and tools such as Git and Agile.</p>


                    <div className="button__cv__div">
                    <a className="button__cv" href="/files/Resumeee.pdf" download target="_blank" >DOWNLOAD CV</a>
                </div></div>
                <div className="col-6 pt-5" id="my__pic__div">
                    <img className="my__pic" src="images/Capture.png" alt="my pic" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Navbar;