import React, { useState, useEffect, useRef } from 'react';
import logo from '../Media/profile.webp'

function MobileBar() {
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);
  const canvasRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleCanvas = () => {
    if (isCanvasOpen) {
      // If the canvas is open, close it
      setIsCanvasOpen(false);
    } else {
      // If the canvas is closed, open it and prevent the button click from closing it
      setIsCanvasOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!canvasRef.current.contains(event.target) && !toggleButtonRef.current.contains(event.target)) {
        setIsCanvasOpen(false);
      }
    };

    // Add an event listener to the document to handle clicks outside the canvas
    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // const logo = 'your_logo_path_here'; // Define the logo path

  return (
    <div id='mobile-bar'>
      <button
        id="toggleButton"
        className={isCanvasOpen ? 'hide' : 'show'}
        onClick={toggleCanvas}
        ref={toggleButtonRef}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div
        id="offCanvas"
        style={{ left: isCanvasOpen ? '0' : '-280px' }}
        className={isCanvasOpen ? 'canvas-open' : 'canvas-closed'}
        ref={canvasRef}
      >
        <canvas id="canvas" width={280} height={400} />
        <nav className="m-vertical-menu-wrapper">
          <div className="m-vertical-menu-logo">
            <div>
              <span className="material-symbols-outlined">settings</span> Dashboard
            </div>
          </div>
          <ul className="m-vertical-menu">
          <li><span class="material-symbols-outlined">grid_view</span>Dashboard <span id='m-dash' class="material-symbols-outlined">navigate_next</span>
      </li>
            <li><span class="material-symbols-outlined">inventory_2</span> Product <span id='m-product' class="material-symbols-outlined">navigate_next</span>
      </li>
            <li><span class="material-symbols-outlined">support_agent</span> Customers <span id='m-customers' class="material-symbols-outlined">navigate_next</span>
      </li>
            <li><span class="material-symbols-outlined">account_balance_wallet</span> Income <span id='m-income' class="material-symbols-outlined">navigate_next</span>
      </li>
            <li><span class="material-symbols-outlined">check_circle</span> Promote<span id ='m-promote' class="material-symbols-outlined">navigate_next</span>
       </li>
            <li><span class="material-symbols-outlined">live_help</span>Help<span id='m-help' class="material-symbols-outlined">navigate_next</span></li>
            <br /><br /><br /><br /><br />
          </ul>
          <div id="m-prof">
            <div id="m-profile">
              <img src={logo} alt="" />
            </div>
            <div id="m-right">
              <p>
                Evano <span className="material-symbols-outlined">expand_more</span>
              </p>
              <p>Project Manager</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileBar;
