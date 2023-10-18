import React from 'react'
import orders from '../Media/orders.png'
import blaance from '../Media/balance.png'
import earning from '../Media/earnnig.png'
import sales from '../Media/total sales.png'
import abstrat from '../Media/abstract.png'
import saphens from '../Media/sarphens.png'

function Dashboard(){
    return(
        <>
          <div id="dashboard-first">
    {/* Head */}
    <div className="head">
      <h3>Hello Sharukh 👋,</h3>
    </div>
    {/* End Head */}
    <div id="search">
      <i
        className="fa-solid fa-magnifying-glass fa-sm"
        style={{ color: "#0000004f" }}
      />
      <input id="search" type="text" placeholder="Search" />
    </div>
  </div>
  <div id="dashboard-second">
    <div className="card">
    <div id="left">
      <img src={earning} alt="" />
  </div>
  <div id="right">
      <p>Earning</p>
      <h2>$198k</h2>
      <p id="green" className="inline">
          <span className="material-symbols-outlined">arrow_upward</span>37.8%<p className='inline'>this month</p>
        </p>
  </div>
    </div>
    <div className="card">
    <div id="left">
      <img src={orders} alt="" />
  </div>
  <div id="right">
      <p>Orders</p>
      <h2>$2.4k</h2>
      <p id="pink" className="inline">
          <span className="material-symbols-outlined">south</span>2%<p className='inline'>this month</p>
        </p>
  </div>
    </div>
    <div className="card">
    <div id="left">
      <img src={blaance} alt="" />
  </div>
  <div id="right">
      <p>Balance</p>
      <h2>$2.4k</h2>
      <p id="pink" className="inline">
          <span className="material-symbols-outlined">south</span>2%<p className='inline'>this month</p>
        </p>
  </div>
    </div>
    <div className="card">
    <div id="left">
      <img src={sales} alt="" />
  </div>
  <div id="right">
      <p>Total sales</p>
      <h2>$89k</h2>
      <p id="green" className="inline">
          <span className="material-symbols-outlined">arrow_upward</span>11%<p className='inline'>this week</p>
        </p>
  </div>
    </div>
  </div>
  <div id="dashboard-third">
    <div id="overview">
      <div id="dash-first">
        <h4>Overview</h4>
        <p>Monthly Earning</p>
      </div>
      <div id="overview-drop">
      <div><a href="#">Quaterly<span className="material-symbols-outlined">expand_more</span></a></div>
            <div id='overview-menu'>
              <a href="#">Monthly</a>
              <br />
              <a href="#">Weelkiy</a>
              <br />
              <a href="#">Daily</a>
            </div>
      </div>
    </div>
    <div id="bar-graph">
      <div id="bar-graph1">
      <div className="bar-container">
        <div className="bar" id="jan" />
        <p className="year">Jan</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="feb" />
        <p className="year">Feb</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="mar" />
        <p className="year">Mar</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="apr" />
        <p className="year">Apr</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="may" />
        <p className="year">May</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="jun" />
        <p className="year">Jun</p>
      </div>
      </div>
      <div id="bar-graph2">
      <div className="bar-container">
        <div className="bar" id="jul" />
        <p className="year">Jul</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="aug" />
        <p className="year">Aug</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="sep" />
        <p className="year">Sep</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="oct" />
        <p className="year">Oct</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="nov" />
        <p className="year">Nov</p>
      </div>
      <div className="bar-container">
        <div className="bar" id="dec" />
        <p className="year">Dec</p>
      </div>
      </div>
    </div>
    <div id="pie-chart">
      <div>
        <h2>Customers</h2>
        <p>Customers that buy product</p>
      </div>
    </div>
  </div>
  <div id="dashboard-forth">
    <div id="first-dash">
      <div id="dash-left">
          <h2 id='p-sales'>Product Sell</h2>
      </div>
      <div id="dash-right">
      <div id="dash-search">
        <i className="fa-solid fa-magnifying-glass fa-sm"style={{ color: "#0000004f" }}/>
          <input id="dash-in-search" type="text" placeholder="Search" />
        </div>
        <div id="dash-drop">
            <div><a href="#">Last 30 days <span className="material-symbols-outlined">expand_more</span></a></div>
            <div id='dash-menu'>
              <a href="#">Last 20 days</a>
              <br />
              <a href="#">Last 15 days</a>
              <br />
              <a href="#">Last 10 days</a>
            </div>
        </div>
      </div>
    </div>
    <div id="second-dash">
    <table>
      <tr>
      <th id='th-name'>Product Name</th>
      <th id='th-stock'>Stock</th>
      <th id='th-price'>Price</th>
      <th id='th-sales'>Total Sales</th>
      </tr>
      <hr />
      <tr>
        <td className="td-name">
          <div className='td-left'>
            <img src={abstrat} alt="" />
          </div>
          <div className="td-right">
            <h3>Abstract 3D</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </td>
        <td className='stock'>32 in stock</td>
        <td className='price'>$ 45.99</td>
        <td className='td-sales'>20</td>
      </tr>
      <tr>
        <td className="td-name">
          <div className='td-left'>
            <img src={saphens} alt="" />
          </div>
          <div className="td-right">
            <h3>Sarphens illustration</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </td>
        <td className='stock'>32 in stock</td>
        <td className='price'>$ 45.99</td>
        <td className='td-sales'>20</td>
      </tr>
    </table>
    </div>
  </div>
</>

  )
}
export default Dashboard