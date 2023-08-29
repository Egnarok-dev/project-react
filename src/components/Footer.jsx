import React from 'react';
import style from '../styles/footer.module.css'
import Logo from './Logo';
import fb from '../assets/social/facebook-fill.png'
import ins from '../assets/social/instagram-fill.png'
import twit from '../assets/social/twitter-fill.png'
import youtube from '../assets/social/youtube-fill.png'
import plane_icon from '../assets/images/plane_icon.png'
import { Link } from 'react-router-dom';



const Footer = (props) => {
    return (
        <div className={style.footer}>
            <div className={style.footer_container }>
                <div className={style.footer_description}>
                    <Logo logoStyle={props.logoStyle} />
                    <p className={style.footer_desc}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <ul className={style.social_icons}>
                        <li>
                            <img src={fb} alt="" />
                        </li>
                        <li>
                            <img src={ins} alt="" />
                        </li>
                        <li>
                            <img src={twit} alt="" />
                        </li>
                        <li>
                            <img src={youtube} alt="" />
                        </li>
                    </ul>
                </div>
                <div className={style.nav_footer}>
                    <h4>quick link</h4>
                    <ul>
                        <li>
                            <Link to="/" className={style.nav_link}>About Us</Link>
                        </li>
                        <li>
                            <Link to="/" className={style.nav_link}>Menu</Link>
                        </li>
                        <li>
                            <Link to="/" className={style.nav_link}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/" className={style.nav_link}>Conatct Us</Link>
                        </li>
                    </ul>
                </div>
                <div className={style.form_footer}>
                    <h4>news letter</h4>
                    <p>Subscribe our newsletter to get our latest update & news</p>
                    <div>
                        <form action="#" method="post">
                            <label for="email">
                                <input type="email" id="email" name="email" placeholder="Your email address" required />
                            </label>
                            <button type="submit">
                                <img src={plane_icon} alt="plane icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={style.bottom_border}></div>
            <p className={style.cuality}> &copy; Copyright 2021 .Tammy Food. All Right Reserved.</p>
        </div>
    );
}

export default Footer;
