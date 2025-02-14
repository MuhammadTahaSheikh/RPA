import React from 'react'
import main_logo from "../../Assets/Header/main_logo.svg"
import phone_img from "../../Assets/Header/phone_img.svg"
import { Link } from 'react-router-dom';

import "./Header_main.css"
function Header_main() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-6 pt-2'>
          <Link to='/'>
            <img src={main_logo} alt='rpa_logo'/>
            </Link>
          </div>
          <div className='col-6 d-flex justify-content-end pt-4'> 
            <div className="p-2"><img src={phone_img} alt='phone_img'/></div>
            <div className="">
            <span className='phone_num'>+9090 8080 4044</span>
            <p className='email'>AiPT@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header_main
