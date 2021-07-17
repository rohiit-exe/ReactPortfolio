import React from 'react';
import CameraIcon from '@material-ui/icons/Camera';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import "./Footer.css";

export default function Footer() {
    return (
        <>
            <div className="container-fluid " id="footer-cont">
                <div className="col-12 position-relative justify-content-center">
                    <div className="home__icon">
                        <a className="footer-brand" href="/">
                            <CameraIcon style={{ fontSize: 35 }} />
                        </a>
                    </div>
                </div>
                <div className="row position">
                    <div className="col-12" id="footer__icons" >
                        <ul className="footer__icons__list">
                            <li className="footer__icon__item">
                                <a href="https://www.facebook.com/rohit.negi.33865854/" className="footer-icon-link"><FaFacebookF /></a>
                            </li>
                        </ul>

                        <ul className="footer__icons__list">
                            <li className="footer__icon__item">
                                <a href="https://www.instagram.com/rohiitnegi/" className="footer-icon-link"><FaInstagram /></a>
                            </li>
                        </ul>

                        <ul className="footer__icons__list">
                            <li className="footer__icon__item">
                                <a href="https://github.com/rohiit-exe" className="footer-icon-link"><FaGithub /></a>
                            </li>
                        </ul>

                        <ul className="footer__icons__list">
                            <li className="footer__icon__item">
                                <a href="https://www.linkedin.com/in/rohit-negi-425b821b4/" className="footer-icon-link"><FaLinkedinIn /></a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-12 justify-content-center">
                        <p className="footer__para"> Copyright - 2021  Developed by Rohit</p>
                    </div>
                </div>
            </div>

        </>
    )
};