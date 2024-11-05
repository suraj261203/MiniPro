import { Link } from "react-router-dom";

import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <footer>
         <section className="footer-container">
             <ul className="information">
                <li>Call us: <Link to={'/callus'}> 555-666 </Link></li>
                <li><Link to={"/aboutus"}>Contacts</Link></li>
                <li><Link to={'/terms-and-condition'}>Terms and Conditions</Link></li>
             </ul>
             <ul className='follow'>
                <p> Follow Us: </p>
                <li><a href='https://www.facebook.com/peter.monevhttps://www.facebook.com/'><i className="fa-brands fa-facebook fa-beat fa-lg"></i></a></li>
                <li><a href='https://www.linkedin.com/in/sripadisuraj/'><i className="fa-brands fa-linkedin fa-shake fa-xl"></i></a></li>
                <li><a href='https://github.com/suraj261203/'><i className="fa-brands fa-github fa-spin fa-xl"></i></a></li>
             </ul>
        </section>
      <p className='copy-rigth'>
        Copyright © 2024 team LSP. Educational purpose. <span>Music Instruments Shop</span>
      </p>
    </footer>
  );
};
