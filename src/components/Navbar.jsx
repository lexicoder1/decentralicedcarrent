import { Link } from "react-router-dom";

import { useState } from "react";
import { ConnectKitButton } from "connectkit";
// import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useAccount} from "wagmi";
import { useNavigate } from 'react-router-dom';
;



function Navbar() {
  const { isConnected } = useAccount();
  const navigate = useNavigate();
 
useEffect(()=>{
  if(isConnected){
    navigate("/payment");
  }
  if(!isConnected){
    navigate("/");
  }
},[isConnected,navigate])
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
          CHURIAUTOS
          </div>
         
          <ConnectKitButton.Custom>
                {({ isConnected, show }) => {
                  return (
                    <div className={isConnected ? `herohidden` : "zind"}>

                  <button  onClick={show} className="connect">{isConnected ? `DISCONNECT` : "CONNECT"}</button>
                      
                      {isConnected ? "" : ""}
                    </div>
                  );
                }}
              </ConnectKitButton.Custom>

          {/* mobile */}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
