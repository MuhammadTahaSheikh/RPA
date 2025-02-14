import React from 'react'
import dataentry from "../../Assets/DataIdea/dataentry.svg"
import datamigration from "../../Assets/DataIdea/datamigration.svg"
import datavalidation from "../../Assets/DataIdea/datavalidation.svg"
import generatingreports from "../../Assets/DataIdea/generatingreports.svg"
import PCI from "../../Assets/DataIdea/PCI.svg"
import orderprocessing from "../../Assets/DataIdea/orderprocessing.svg"
import "./DataIdea.css"
function DataIdea() {
  return (
    <div className='container service_data'>
    <div className="services-containerabout">
    <div className="service_about">
    <div className='service_image'>
     <img src={dataentry} alt="Service Image" />
     </div>
     
      <div className="service-content">
        <h3 className='service_heading'>Data Entry</h3>
        <p className='service_content'>RPA bots can automate repetitive tasks like filling out forms, copying and pasting data between applications, and extracting information from various sources.</p>
                       
                        <div className='read_btn'><a href="#" className="service-button_about">READ MORE</a></div>
      </div>
    </div>
    <div className="service_about">
    <div className='service_image'> <img src={datamigration} alt="Service Image" /></div>
      <div className="service-content">
        <h3 className='service_heading'> Data Validation</h3>
        <p className='service_content'>Bots can verify the accuracy and completeness of data sets, reducing errors and ensuring data integrity. </p>
                       
                        <div className='read_btn'><a href="#" className="service-button_about">READ MORE</a></div>
      </div>
    </div>
    <div className="service_about">
    <div className='service_image'>  <img src={datavalidation} alt="Service Image" /></div>
      <div className="service-content">
        <h3 className='service_heading'>Data Migration</h3>
        <p className='service_content'>RPA can automate the process of moving large volumes of data from legacy systems to new platforms </p>
                       
                        <div className='read_btn'><a href="#" className="service-button_about">READ MORE</a></div>
      </div>
    </div>
    <div className="service_about">
    <div className='service_image'> <img src={PCI} alt="Service Image" /></div>
      <div className="service-content">
        <h3 className='service_heading'>Processing Customer Inquiries</h3>
        <p className='service_content'>Bots can handle routine customer inquiries, freeing up human agents for more complex issues. </p>
                       
                        <div className='read_btn'><a href="#" className="service-button_about">READ MORE</a></div>
      </div>
    </div>
    <div className="service_about">
    <div className='service_image'>  <img src={orderprocessing} alt="Service Image" /></div>
    <div className="service-content">
      <h3 className='service_heading'> Order Processing</h3>
      <p className='service_content'>RPA can automate order entry, payment processing, and shipping updates. </p>
                    
                      <div className='read_btn'><a href="#" className="service-button_about">READ MORE</a></div>
    </div>
  </div>
  <div className="service_about">
  <div className='service_image'> <img src={generatingreports} alt="Service Image" /></div>
    <div className="service-content">
      <h3 className='service_heading'>Generating Reports</h3>
      <p className='service_content'> Bots can gather data from various systems and generate reports automatically.</p>
                     
<div className='read_btn'>
<a href="#" className="service-button_about">READ MORE
</a>
</div>
    </div>
  </div>
 
  </div>
    </div>
  )
}

export default DataIdea
