import { useState } from "react";
import toTopArrow from "./../../assets/toTopArrow.svg"

const ToTop = () => {
    const [vis,setVis] = useState(0);
    const handleScroll = () => {
        if((window.scrollY > window.innerHeight) && (vis===0)) setVis(1);
        if((window.scrollY <= window.innerHeight) && (vis===1)) setVis(0);
    }
    window.addEventListener('scroll', handleScroll);
    return (
      <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
              position: "fixed",
              bottom: "5rem",
              right: "5rem",
              height: "6rem",
              width: "6rem",
              cursor: "pointer",
              display: `${ (vis===1) ? 'block' : 'none' }`,
              zIndex: "99"
          }}
      >
          <img 
              src={toTopArrow} 
              alt="go-to-top" 
              style={{
                  height: "100%",
                  width: "100%"
              }}
          />
      </div>
    )
}

export default ToTop