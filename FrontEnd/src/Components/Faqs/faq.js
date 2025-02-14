import React from 'react';
import "./faq.css";
import line from '../../Assets/faq/arrow_up.svg';
import Formfaq from '../Form/Formfaq';
import line1 from '../../Assets/Studies/loading_line.svg';

function faq() {
  return (
    <div>
      <div className="container p-4">
        <div className='row'>
      
          <div className=''>
          <div className='mt-5 col-lg-6'>
          <p className='faq_back'>
          FAQs <span className='line'><img src={line} alt='line' className='line_css_faq' /></span>
          </p>
          <p className='faq_title'>Answer Your<span className='faq_changeclr'> Needs</span> </p>
          <p className='faq_title_con'>Ultrices eros in cursus turpis massa tincidunt dui. Ipsum a arcu cursus
          vitae congue mauris. Justo laoreet sit amet cursus sit amet dictum sit. </p>
        </div>
        <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12'>
          
            <div className='accordion mt-5' id="accordionExample">
              <div className='accordion-item mb-5 border'>
                <h2 className='accordion-header' id="headingOne">
                  <button className='accordion-button faq_question' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. How Secure Is My Information When Using AI?
                  </button>
                </h2>
                <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className='accordion-body faq_answer'>
                    Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Blandit massa enim nec dui nunc mattis euismod elementum.
                  </div>
                </div>
              </div>
              <div className='accordion-item mb-5 border'>
                <h2 className='accordion-header' id="headingTwo">
                  <button className='accordion-button collapsed faq_question' type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. Can AI Help Improve Learning Over Time?
                  </button>
                </h2>
                <div id="collapseTwo" className='accordion-collapse collapse' aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className='accordion-body faq_answer'>
                    Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Blandit massa enim nec dui nunc mattis euismod elementum.
                  </div>
                </div>
              </div>
              <div className='accordion-item mb-4 border'>
                <h2 className='accordion-header' id="headingThree">
                  <button className='accordion-button collapsed faq_question' type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Can I Customize AI App For My Business?
                  </button>
                </h2>
                <div id="collapseThree" className='accordion-collapse collapse' aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className='accordion-body faq_answer'>
                    Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Blandit massa enim nec dui nunc mattis euismod elementum.
                  </div>
                </div>
              </div>
            </div>
            <div>
          <div class="accordion-body quest_still">
        <p className='still_quest'>Still Have Question ?</p>
      <p className='btn_position'>
      <button className='btn_faq_touch'>Get In Touch</button>
      </p>  
         <p className='team_concern'>Kindly converse with our team.</p>
        </div>
      </div>
          </div>
          <div className='col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12'>
          <div className=''>
          <div className='mt-5 form_main'>
          <div className='mt-5 container pad'>
          <p className='form_back'>
          Contact_us <span className='form_line'><img src={line1} alt='line' className='form_line_css' /></span>
          </p>
          <div>
          <p className='any_queries'>Do You Have <br/>
          Any Queries?</p>
          </div>
          <form>
          <input type='text' className='input_text p-3' placeholder='Name*' required />
          <input type='email' className='input_text p-3' placeholder='Email ID*' required />
          <input type='phone' className='input_text p-3' placeholder='Phone' required />
          <textarea
          className='input_text_area p-3'
          placeholder="Enter your text here..."
        />      
        <button type='submit' className='input_text_btn mt-3'>Submit Query</button>
        </form>
        </div>
            
          </div>
          </div>
          </div>
        </div>
      </div>
      
        </div>
        </div>
      </div>
    </div>
  );
}

export default faq;
