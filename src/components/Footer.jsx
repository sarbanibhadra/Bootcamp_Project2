import React, {useState} from "react";
import "../styles/Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
    const [email,setEmail] = useState("")

    const handleFormSubmit = (event) => {
        //   // Preventing the default behavior of the form submit (which is to refresh the page)
          event.preventDefault();
    }

    return (
        <div>
        <footer>

            <div className="container footer">
                <div className="row justify-content-center footer-menu ">

                    {/* <div className="col-md-4 col-lg-3 company">
                        <div className="title">
                            COMPANY
                        </div>
                        <ul className="list-unstyled">
                            <li>
                            <Link to="/">Exercises</Link>
                            </li>
                            <li>
                            <Link to="/">BMI</Link>
                            </li>
                            <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                        </ul> 
                    </div> */}

                    <div className="col-md-4 col-lg-3 contactUs">
                        <div className="title">
                            CONTACT US
                        </div>
                        <ul className="list-unstyled">
                            <li><i className="fa-solid fa-location-dot"></i><a href="#"> London</a></li>
                            <li><i className="fa-solid fa-envelope"></i> <a href="mailto:info@gymfit.com">info@gymfit.com</a></li>
                            <li><i className="fa-solid fa-phone"></i><a href="tel:9051290512"> +447712356789</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3"> 
                    <div className="title">
                            SOCIAL MEDIA 
                        </div>
                        <ul className="list-unstyled">
                            <li><i className="fa-brands fa-facebook-f"></i><a href="https://www.facebook.com/" className="facebook"> Facebook</a></li>
                            <li><i className="fa-brands fa-instagram"></i><a href="https://www.instagram.com/" className="instagram"> Instagram</a></li>
                            <li><i className="fa-brands fa-x-twitter"></i><a href="https://twitter.com/?lang=en" className="twitter"> Twitter</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="title">
                            SUBSCRIBE
                        </div>
                        <form>
                            <div className="form-group me-sm-3 row subscribe">
                                <div>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="form-control" id="email" placeholder="Your email address"/>
                                </div>

                                <div onClick={handleFormSubmit}>
                                    <button type="submit" className="btn btn-sm btn-danger"> Submit
                                    </button>
                                </div>
                            
                            </div> 
                        </form>
                    </div>

                </div>

            </div>

            <div className="copyright">&copy; 2024 GymFit. All rights reserved.</div>

        </footer>
    </div>


    );
}

export default Footer;
