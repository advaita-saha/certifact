import HeroImg from "./../../assets/hero-Illustration.svg"
import HeroZigZag from "./../../assets/hero-zigzag.svg"
import LockSvg from "./../../assets/lock_icon.svg"
import "./Hero.css"
import "./../../pages/Home/Home.css"

const Hero = ({ featureRef }) => {
  const scrollToElement = (ele) => {
    ele.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div style={{ position: 'relative' }}>
    <div className="heroZigZag">
      <img src={HeroZigZag} alt="HeroImage" />
    </div>
    <div className="home-grid">
      <div className="heroImg">
        <img src={HeroImg} alt="HeroImage" />
      </div>
      <div className="heroDesc">
        <h1>
          Certificates<br /> re-invented for Metaverse 
          <img src={LockSvg} alt="lock" style={{ height: "9vh", marginLeft:"2rem" }} />
        </h1>
        <h3>
          <span style={{ textDecoration: "line-through", marginRight: "2rem", fontSize: "4vh" }} >Hire Web3 Dev</span>
          Use Certifact API
        </h3>
      </div>
    </div>
    <div className="herocta">
      <button onClick={() => scrollToElement(featureRef)}>Explore Our Product</button>
    </div>
    </div>
  )
}

export default Hero