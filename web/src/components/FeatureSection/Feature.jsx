import React from 'react'
import "./../../pages/Home/Home.css"
import "./Feature.css"
import Feature1 from "./../../assets/feat-1-illustration.svg"
import Feature2 from "./../../assets/feat-2-illustration.svg"
import Feature3 from "./../../assets/feat-3-illustration.svg"
import One from "./../../assets/one.svg"
import Two from "./../../assets/two.svg"
import Three from "./../../assets/three.svg"
import PaperPlane from "./../../assets/paper-plane.svg"
import Pattern from "./../../assets/feat-bottom-pattern.svg"
import Circle from "./../../assets/circle.svg"

const Feature = ({ featureRef }) => {
  return (
    <div ref={featureRef} style={{ position: "relative" }} >
      <div className="feat-plane">
        <img src={PaperPlane} style={{ width: "30vw" }} alt="paper-plane" />
      </div>
      <div className="feat-pattern">
        <img src={Pattern} alt="pattern" />
      </div>
      <div className="home-grid feature">
        <div className="sectionDesc">
        <div className="feat-circle-1">
          <img src={Circle} alt="circle" />
        </div>
          <h1 style={{ position: "relative", fontWeight: "600" }}>
            <div style={{ position: "absolute", top: "10", left: "0", transform: "translateX(-150%)" }}>
              <img src={One} alt="one" />
            </div>
            Certificate ownership in blockchain
          </h1>
          <h3>The certificates are a unique form of ERC-721 NFT, which is non-transferable.</h3>
        </div>
        <div className="sectionImg">
          <img src={Feature1} alt="FeatureImage" />
        </div>
      </div>
      <div className="home-grid feature">
        <div className="sectionImg">
          <img src={Feature2} alt="FeatureImage" />
        </div>
        <div className="sectionDesc">
          <div className="feat-circle-2">
            <img src={Circle} alt="circle" />
          </div>
          <h1 style={{ position: "relative", fontWeight: "600" }}>
            <div style={{ position: "absolute", top: "10", left: "0", transform: "translateX(-150%)" }}>
              <img src={Two} alt="two" />
            </div>
            Never lose your certificate
          </h1>
          <h3>The certificates are stored in a peer-to-peer decentralized network Filecoin, so the certificates will be there with you in the metaverse till eternity.</h3>
        </div>
      </div>
      <div className="home-grid feature">
        <div className="sectionDesc">
          <h1 style={{ position: "relative", fontWeight: "600" }}>
            <div style={{ position: "absolute", top: "10", left: "0", transform: "translateX(-150%)" }}>
              <img src={Three} alt="three" />
            </div>
            Easy to use API
          </h1>
          <h3>Just integrate our all new API with your product and voila, you are part of the Metaverse now !</h3>
        </div>
        <div className="sectionImg">
          <img src={Feature3} alt="FeatureImage" />
        </div>
      </div>
    </div>
  )
}

export default Feature