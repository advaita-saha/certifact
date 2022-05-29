import { useNavigate } from "react-router-dom"
import "./Footer.css"
import Facebook from "./../../assets/facebook.svg"
import Twitter from "./../../assets/twitter.svg"
import Instagram from "./../../assets/instagram.svg"

const Footer = ({ featureRef, faqRef }) => {
  const navigate = useNavigate();
  const scrollToElement = (ele) => {
    navigate('/');
    ele.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="footer">
        <h1 className="footer-brand">
          CERTIFACT
        </h1>
        <div className="footer-links">
          {/* <button>About</button> */}
          <button onClick={() => scrollToElement(featureRef)}>Features</button>
          <button onClick={() => scrollToElement(faqRef)}>FAQs</button>
          <button onClick={() => { 
            window.open('https://github.com/advaita-saha/certifact/blob/master/api/README.md', '_blank'); 
          }}>API Docs</button>
        </div>
        <div className="footer-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" >
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" >
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" >
            <img src={Facebook} alt="facebook" />
          </a>
        </div>
        <h3 className="footer-copyright">
          COPYRIGHT &copy; 2022 CERTIFY - ALL RIGHTS RESERVED
        </h3>
    </div>
  )
}

export default Footer