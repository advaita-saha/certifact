import { useState } from 'react';
import "./FAQSection.css"
import Plus from "./../../assets/plus.svg"
import Minus from "./../../assets/minus.svg"
import PatternTop from "./../../assets/faq-top-pattern.svg"
import PatternBottom from "./../../assets/faq-bottom-pattern.svg"

const FAQSection = ({ faqRef }) => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
  return (
    <div className="faq" ref={faqRef} style={{ position: "relative" }}>
      <div className="faq-top-pattern">
        <img src={PatternTop} style={{ height: "25vh", width: "25vh" }} alt="pattern" />
      </div>
      <div className="faq-bottom-pattern">
        <img src={PatternBottom} style={{ height: "25vh", width: "25vh" }} alt="pattern" />
      </div>
      <h1 className='faq-heading'>Frequently Asked Questions</h1>
      <div className="faq-block">
        <p className="faq-question">Why use Certifact?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible1) ? `block` : `none` 
        }}>
          Certifact enables certificate providers to secure certificates by minting them as NFTs on the blockchain
        </p>
        <button className="faq-expand" onClick={() => setIsVisible1(!isVisible1)}>
          <img src={ isVisible1 ? Minus : Plus} alt="expand" />
        </button>
      </div>
      <div className="faq-block">
        <p className="faq-question">How to use our API?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible2) ? `block` : `none` 
        }}>
            Our NFT is listed on OpenSea, click on the link in our website to directly visit the collection in OpenSea
        </p>
        <button className="faq-expand" onClick={() => setIsVisible2(!isVisible2)}>
          <img src={ isVisible2 ? Minus : Plus} alt="expand" />
        </button>
      </div>
      <div className="faq-block">
        <p className="faq-question">What is Certify built upon?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible3) ? `block` : `none` 
        }}>What is Certify built upon?</p>
        <button className="faq-expand" onClick={() => setIsVisible3(!isVisible3)}>
          <img src={ isVisible3 ? Minus : Plus} alt="expand" />
        </button>
      </div>
      <div className="faq-block">
        <p className="faq-question">How is the pricing decided and how much it will cost?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible4) ? `block` : `none` 
        }}>What is Certify built upon?</p>
        <button className="faq-expand" onClick={() => setIsVisible4(!isVisible4)}>
          <img src={ isVisible4 ? Minus : Plus} alt="expand" />
        </button>
      </div>
    </div>
  )
}

export default FAQSection