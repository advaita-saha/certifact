import HeroImg from "./../../assets/hero-Illustration.svg"
import HeroZigZag from "./../../assets/hero-zigzag.svg"
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
        <h1>Get Certificates Secured 🔒</h1>
        <h3>We Secure your Certificates for you on Blockchain Technology and Safeguard your Identity</h3>
      </div>
    </div>
    <div className="herocta">
      <button onClick={() => scrollToElement(featureRef)}>Explore Our Product</button>
    </div>
    </div>
  )
}

export default Hero