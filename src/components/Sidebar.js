import React from 'react'
import logo from '../Media/profile.webp'
function Sidebar() {
  return (
    <>
    <div id="computer-bar">
    <nav className="vertical-menu-wrapper">
    <div className="vertical-menu-logo">
      <div><span className="material-symbols-outlined">settings</span> Dashboard</div>
    </div>
    <ul className="vertical-menu">
      <li><span className="material-symbols-outlined">grid_view</span>Dashboard <span id='dash' className="material-symbols-outlined">navigate_next</span>
</li>
      <li><span className="material-symbols-outlined">inventory_2</span> Product <span id='product' className="material-symbols-outlined">navigate_next</span>
</li>
      <li><span className="material-symbols-outlined">support_agent</span> Customers <span id='customers' className="material-symbols-outlined">navigate_next</span>
</li>
      <li><span className="material-symbols-outlined">account_balance_wallet</span> Income <span id='income' className="material-symbols-outlined">navigate_next</span>
</li>
      <li><span className="material-symbols-outlined">check_circle</span> Promote<span id ='promote' className="material-symbols-outlined">navigate_next</span>
 </li>
      <li><span className="material-symbols-outlined">live_help</span>Help<span id='help' className="material-symbols-outlined">navigate_next</span></li>
      <br /><br /><br /><br /><br />
    </ul>
    <div id="prof">
      <div id='profile'>
        <img src={logo} alt="" />
      </div>
      <div id='right'>
        <p>Evano <span className="material-symbols-outlined">expand_more</span></p>
        <p>Project Manager</p>
      </div>
    </div>
  </nav>
    </div>
</>
  )
}


export default Sidebar