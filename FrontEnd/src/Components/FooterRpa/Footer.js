import React from 'react'
import "./Footer.css"
import rpa from "../../Assets/Footer/rpa.svg"
import fb from "../../Assets/Footer/fb.svg"
import twitter from "../../Assets/Footer/twitter.svg"
import youtube from "../../Assets/Footer/youtube.svg"
import linkedin from "../../Assets/Footer/lnkdn.svg"
import insta from "../../Assets/Footer/insta.svg"

function Footer() {
 

 
  return (
    <div className='main_footer'>
     


  <footer class="footer">
  	 <div class="container">
   
  	 	<div class="row">
  	 		<div class="col-xl-3 col-md-6 footer-col mt-5">
  	 			<span className='footer_heading'><img src={rpa} alt='RPA'/></span>
  	 		<p className='sub_contact_detail'>Who Is xyz?</p>
            <p className='sub_contact_detail1'>
               xzy is the leader in Value-Driven AI –
               a unique and collaborative approach.</p>
              
         <div class="social-links">
  	 				<img src={fb} alt='facebook'/>
  	 				<img src={twitter} alt='twitter'/>
  	 				<img src={youtube} alt='Youtube'/>
  	 				<img src={linkedin} alt='Linkedin'/>
                 <img src={insta} alt='instagram'/>

                    </div>
  	 		</div>
  	 		<div class="col-xl-3 col-md-6 footer-col mt-5">
  	 			<h4 className='footer_heading mt-3'>Solutions</h4>
  	 			<ul className='ql'>
                   <li><a href="#">Predictive Modelling</a></li>
                   <li><a href="#">AI Rewriter</a></li>
                   <li><a href="#">AI Text Completer</a></li>
                   <li><a href="#">AI Image Generator</a></li></ul>
  	 		</div>
  	 		<div class="col-xl-3 col-md-6 footer-col mt-5">
  	 			<h4 className='footer_heading mt-3'>About</h4>
  	 			<ul className='ql'>
                   <li><a href="#">About Our Company</a></li>
                   <li><a href="#">Focus On Solutions</a></li>
                   <li><a href="#">Assuring Our Best Services</a></li>
                   <li><a href="#">Meet Our Professional Team</a></li></ul>
  	 		</div>
  	 		<div class="col-xl-3 col-md-6 footer-col mt-5">
  	 			<h4 className='footer_heading mt-3'>Get Our App</h4>
  	 			<p className='sub_contact'>We have a dedicated team of
                   specialists for you.</p>
           
         
          
         
  	 		</div>
  	 	</div>
  	 </div>
    
     </footer>
     <div className='footer_last p-3'>© 2024 RAQ. All rights reserved</div>


    </div>
  )
}

export default Footer
