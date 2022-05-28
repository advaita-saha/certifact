import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"

const Navbar = ({ featureRef, faqRef }) => {
  const navigate = useNavigate();
  const scrollToElement = (ele) => {
    navigate('/');
    ele.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="navbar">
        <div className="navbrand">
          <Link to="/" style={{ textDecoration: "none", color: "black", fontSize: "3rem", fontWeight: "bold" }}>Certifact</Link>
        </div>
        <ul className='navmenu'>
          {/* <button>About</button> */}
          <button onClick={() => scrollToElement(featureRef)} >Features</button>
          <button onClick={() => scrollToElement(faqRef)}>FAQs</button>
          <a href="https://github.com/advaita-saha/certifact/blob/master/api/README.md" target="_blank" rel="noreferrer" className="nav-doclink">
            Docs
          </a>
          <Link to="/upload" className='nav-cta'>Try it out</Link>
        </ul>
    </div>
  )
}

export default Navbar