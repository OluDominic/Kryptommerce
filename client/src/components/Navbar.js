import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from '../images/cover.png';



const Navbar =()=> {
    const [open, setOpen] = useState(false)

    return(
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="logo-msg">Kryptommerce</div>
                <div className="links">
                    <ul>
                        <li>
                            <Link>Market</Link>
                        </li>
                        <li>
                            <Link>Exchange</Link>
                        </li>
                        <li>
                            <Link>Tutorials</Link>
                        </li>
                        <li>
                            <Link>Wallets</Link>
                        </li>
                        <button>login</button>
                    </ul>
                </div>
                <div className="toggle">
                    {open ?
                     <AiOutlineClose fontSize={28} className="open" onClick={()=> setOpen(false)} /> 
                     : 
                     <HiMenuAlt4 fontSize={28} className="open" onClick={()=> setOpen(true)}/>
                      }
                      {open && (
                          <ul>
                              <li>
                                  <AiOutlineClose onClick={()=> setOpen(false)} />
                              </li>
                              <li>
                                <Link>Market</Link>
                            </li>
                            <li>
                                <Link>Exchange</Link>
                            </li>
                            <li>
                                <Link>Tutorials</Link>
                            </li>
                            <li>
                                <Link>Wallets</Link>
                            </li>
                          </ul>
                      )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;