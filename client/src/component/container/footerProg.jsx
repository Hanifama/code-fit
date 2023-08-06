import { imageLogo } from "../../utils"

const Footer = () => {
    return(
     <footer className="section__container footer__container">
        <span className="bg__blur" />
        <span className="bg__blur footer__blur" />
        <div className="footer__col">
            <div className="footer__logo"><img src={imageLogo} alt="logo" /></div>
            <p>
            Take the first step towards a healthier, stronger you with our
            unbeatable pricing plans. Let's sweat, achieve, and conquer together!
            </p>
            <div className="footer__socials">
            <a href="#"><i className="ri-facebook-fill" /></a>
            <a href="#"><i className="ri-instagram-line" /></a>
            <a href="#"><i className="ri-twitter-fill" /></a>
            </div>
        </div>
        <div className="footer__col">
            <h4>Company</h4>
            <a href="#">Business</a>
            <a href="#">Franchise</a>
            <a href="#">Partnership</a>
            <a href="#">Network</a>
        </div>
        <div className="footer__col">
            <h4>About Us</h4>
            <a href="#">Blogs</a>
            <a href="#">Security</a>
            <a href="#">Careers</a>
        </div>
        <div className="footer__col">
            <h4>Contact</h4>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">BMI Calculator</a>
        </div>
        <div className="footer__bar">
            Copyright © 2023 hanifama. All rights reserved.
        </div>
        </footer>

    )
}

export default Footer