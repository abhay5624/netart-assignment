import { useState } from 'react'
import logo from './asserts/logo.png'
import trophy from './asserts/1.png'
import collect from './asserts/2.png'
import Logistic from './asserts/3.png'
import PhoneIcon from './asserts/icons/phone_icon.svg'
import facebook from "./asserts/icons/facebook-circle-.svg"
import website from "./asserts/icons/web.svg"
import './App.css'
function App() {
  

  return (
    <>
      <div className='container'>
      <div className="logo">
          <img src={logo} alt="" />
      </div>
      <div className="flexbox">
        <div className="trophy"><img src={trophy} alt=""  /></div>
        <div className="trophyContent">
          <p style={{fontWeight: "800"}}>C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul>
            <li>C.R.I's energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I is the highest contribution in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
          </ul>
          <div className="card">
            <img src={collect} alt="" />
          </div>
          <p>Goverment of india has awarded the <strong>"National Energy Conservation Award 2018"</strong>. MR. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
        </div>
        <p className='headline'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img src={Logistic} alt="" className='tools'/>
        <p className="middle">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <div className="line"></div>
        <h3 className="middle">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <div className="flexbox wrap">
          <div className="bl-red">CHEMICAL & PROCESS</div>
          <div className="bl-red">POWER</div>
          <div className="bl-red">WATER & WASTE WATER</div>
          <div className="bl-red">OILS & GAS</div>
          <div className="bl-red">PHARMA</div>
          <div className="bl-red">SUGARS & DISTILLERIES</div>
          <div className="bl-red">PAPER & PULP</div>
          <div className="bl-red">MARINE & DEFENCE</div>
          <div className="bl-red">METEL & MINING</div>
          <div className="bl-red">FOOD & BEVERAGE</div>
          <div className="bl-red">PETROCHEMICAL & REFINERIES</div>
          <div className="bl-red">SOLAR</div>
          <div className="bl-red">BUILDING</div>
          <div className="bl-red">HVAC</div>
          <div className="bl-red">FIRE FIGHTING</div>
          <div className="bl-red">AGRICULTURE & RESIDENTIAL</div>
        </div>
      </div>
      <div className="footer flexbox">
        <div style={{color: 'white'}}><img src={PhoneIcon} alt="" />Troll free <strong  style={{color: 'white'}}>1800 200 1234</strong></div>
        <div style={{color: 'white'}}><img src={facebook} alt="" />www.facebook.com/cripumps</div>
        <div style={{color: 'white'}}><img src={website} alt="" />www.crigroups.com</div>
      </div>
      
    </>
  )
}

export default App
