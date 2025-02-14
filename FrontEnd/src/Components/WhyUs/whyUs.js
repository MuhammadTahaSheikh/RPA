import React from 'react'
import "./whyUs.css"
import brain from "../../Assets/brain.svg"
import arrow from "../../Assets/icons/arrow.svg"
import { Link } from 'react-router-dom'
function whyUs() {
  return (
    <div>
      <div className='container mt-5 mb-5'>
      <div className='row'>
      <div className='col-xl-6 col-lg-6 col-md-8 col-sm-6'>
      <img src={brain} alt='brain' className='brain_img'/>
      </div>
      <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
      <p className='why_us'>Why Us?</p>
      <p className='head_two'>We can also help you with</p>
      <span className='why_content'>Nulla facilisi cras fermentum odio eu feugiat. Euismod elementum nisi quis
      eleifend quam adipiscing vitae proin sagittis. Pellentesque diam volutpat
      commodo sed egestas egestas fringilla.</span>
      <div class="d-flex flex-row mt-5">
  <div className=""><img src={arrow} alt='arrow' className='img_arrow'/></div>
  <div className="title">Customization: <span className="title_cont"> We tailor RPA solutions to your specific needs and processes.</span></div>
</div>

<div class="d-flex flex-row">
<div className=""><img src={arrow} alt='arrow' className='img_arrow'/></div>
<div className="title">Scalability: <span className="title_cont"> Our solutions can grow alongside your business as your automation requirements evolve.</span></div>
</div>

<div class="d-flex flex-row">
<div className=""><img src={arrow} alt='arrow' className='img_arrow'/></div>
<div className="title">Support: <span className="title_cont">  We provide ongoing support to ensure your RPA solution operates smoothly and delivers lasting value.</span></div>
</div>

     <Link to='/about-us'><button className='why_btn mt-5'>About Us</button></Link> 
      </div>
      </div>
      </div>
    </div>
  )
}

export default whyUs
