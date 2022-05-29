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
        <p className="faq-question" style={{ color: `${ isVisible1 ? 'var(--secondary)' : 'var(--primary)' }` }}>What is Certifact?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible1) ? `block` : `none` 
        }}>
          We are proving a simple fast API to ed-tech businesses to make their certificates into NFTs and send to the receiver. We are making the NFTs non-transferable so maintain the legitimacy of the certificates
        </p>
        <button className="faq-expand" onClick={() => setIsVisible1(!isVisible1)}>
          <img src={ isVisible1 ? Minus : Plus} alt="expand" />
        </button>
      </div>
      <div className="faq-block">
        <p className="faq-question" style={{ color: `${ isVisible2 ? 'var(--secondary)' : 'var(--primary)' }` }}>Why should I use it?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible2) ? `block` : `none` 
        }}>
            For businesses there is no hasle of crypto wallet. Get legitimate ownership of your certificate over secure blockchain, certificates stay for life-time even if our server crashes.
        </p>
        <button className="faq-expand" onClick={() => setIsVisible2(!isVisible2)}>
          <img src={ isVisible2 ? Minus : Plus} alt="expand" />
        </button>
      </div>
      <div className="faq-block">
        <p className="faq-question" style={{ color: `${ isVisible3 ? 'var(--secondary)' : 'var(--primary)' }` }}>Where are my Certificates stored?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible3) ? `block` : `none` 
        }}>
          The certificates are stored over a decentralized network - FileCoin. The ownership is maintained over etherium or polygon blockchain
        </p>
        <button className="faq-expand" onClick={() => setIsVisible3(!isVisible3)}>
          <img src={ isVisible3 ? Minus : Plus} alt="expand" />
        </button>
      </div>
      <div className="faq-block">
        <p className="faq-question" style={{ color: `${ isVisible4 ? 'var(--secondary)' : 'var(--primary)' }` }}>Can we transfer our Certificates?</p>
        <p className="faq-question" style={{ 
            marginTop: "3rem",
            display: (isVisible4) ? `block` : `none` 
        }}>No, you cannot transfer your certificates, though it follows ERC-721 token standard</p>
        <button className="faq-expand" onClick={() => setIsVisible4(!isVisible4)}>
          <img src={ isVisible4 ? Minus : Plus} alt="expand" />
        </button>
      </div>
    </div>
  )
}

export default FAQSection