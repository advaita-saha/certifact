import { Link, useNavigate } from 'react-router-dom'
import BrandImg from "./../../assets/brand_img.svg"
import "./Navbar.css"

const Navbar = ({ featureRef, faqRef }) => {
  const navigate = useNavigate();
  const scrollToElement = (ele) => {
    navigate('/');
    ele.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="navbar">
        <div className="navbrand" style={{ padding: "5rem 0" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <img src={BrandImg} alt="Certifact" style={{ height: "10rem", display: "block" }} />
          </Link>
        </div>
        <ul className='navmenu'>
          {/* <button>About</button> */}
          <button onClick={() => scrollToElement(featureRef)} >Features</button>
          <button onClick={() => scrollToElement(faqRef)}>FAQs</button>
          <button onClick={() => { 
            window.open('https://github.com/advaita-saha/certifact/blob/master/api/README.md', '_blank'); 
          }}>Docs</button>
          <Link to="/upload" className='nav-cta'>Try it out</Link>
        </ul>
    </div>
  )
}

export default Navbar