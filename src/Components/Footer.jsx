import React from "react"; 
import '../css/Footer.css';


const Footer = () => {
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>SOLUTION</h4>
                        <a href="/employer">
                            <p>Square connect</p>
                        </a>
                        <a href="/healthpian">
                            <p>Prime connect</p>
                        </a>
                        <a href="/individual">
                            <p>Rent Agreement</p>
                        </a>
                        <a href="/individual">
                            <p>Online</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>NETWORK SITES</h4>
                        <a href="/resource">
                            <p>Maharashtra</p>
                        </a>
                        <a href="/resource">
                            <p>Gujrat</p>
                        </a>
                        <a href="/resources">
                            <p>Urban money</p>
                        </a>
                        <a href="/resources">
                            <p>India</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>RESOURCES</h4>
                        <a href="/employer">
                            <p>Data intelligience</p>
                        </a>
                        <a href="/employer">
                            <p>Cities Real Estate</p>
                        </a>
                        <a href="/employer">
                            <p>Reviews</p>
                        </a>
                        <a href="/employer">
                            <p>Cities Real Estate</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>COMPANY</h4>
                        <a href="/about">
                            <p>About us</p>
                        </a>
                        <a href="/press">
                            <p>Careers</p>
                        </a>
                        <a href="/career">
                            <p>services</p>
                        </a>
                        <a href="/contact">
                            <p>Policy of use</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>KEEP IN TOUCH</h4>
                        <div className="socialmedia">
                           <p><img src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png" alt="facebook"/></p>
                           <p><img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" alt="twitter"/></p> 
                           <p><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="linkedin"/></p>
                           <p><img src="https://cdn-icons-png.flaticon.com/128/3955/3955027.png" alt="instagram"/></p>
                        
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb_footer-below">
                <div className="about_us">
              <h2 className="about-us-heading">About Us</h2>
             <p>
             Star Estate Pvt Ltd is India's largest Integrated real estate marketplace, with category leadership presence across multiple touchpoints of consumer home ownership journey. With Urbanisation and rising disposable incomes as the core theme, Square Yards, with 8mn+ monthly traffic and ~USD 5bn+ GTV, is the largest and asset light proxy play to the growing residential demand story of India. One of the few Indian start ups to taste global success with presence in 100+ cities across 9 countries, Square Yards is at the forefront of tech adoption in the sector, with multiple patents across VR/AI domains.
            </p>
            </div>
              
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} codeinn. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>terms & conditions</p></div></a>
                        <a href="/privacy"><div><p>privacy</p></div></a>
                        <a href="/security"><div><p>security</p></div></a>
                        <a href="/cookie"><div><p>cookie</p></div></a>
                    </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Footer;