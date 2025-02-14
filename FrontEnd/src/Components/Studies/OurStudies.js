import React from 'react';
import './OurStudies.css';
import line from '../../Assets/Studies/loading_line.svg';
import blog1 from "../../Assets/Studies/blog_img1.svg";
import blog2 from "../../Assets/Studies/blog_img2.svg";
import blog3 from "../../Assets/Studies/blog_img3.svg";

function OurStudies() {
  const blogs = [
    {
      title: 'Chat AI Prompts to the Next',
      date: 'February 25, 2024',
      image: blog1,
      content: 'RPA bots can automate repetitive tasks like filling out forms, copying and pasting data between applications, and extracting information from various sources.',
      url: '',
    },
    {
      title: 'Chat AI Prompts to the Next',
      date: 'February 25, 2024',
      image: blog2,
      content: 'RPA bots can automate repetitive tasks like filling out forms, copying and pasting data between applications, and extracting information from various sources.',
      url: '',
    },
    {
      title: 'Chat AI Prompts to the Next',
      date: 'February 25, 2024',
      image: blog3,
      content: 'RPA bots can automate repetitive tasks like filling out forms, copying and pasting data between applications, and extracting information from various sources.',
      url: '',
    },
 
    
  ];

  return (
    <div className='studies_main'>
      <div className='container mt-5 mb-5'>
        <div className='main_studies'>
          <p className='studies_back'>
            Our Studies <span className='line'><img src={line} alt='line' className='line_css' /></span>
          </p>
        </div>
        <div className="blog-row mt-5">
          {blogs.map((blog, index) => (
            <div key={index} className="blog">
              <img src={blog.image} alt={blog.title} />
              <p className='date_studies'>{blog.date}</p>
              <h3 className='title_studies'>{blog.title}</h3>
              <p className='content_studies'>{blog.content}</p>
              <a href={blog.url} className='read_studies'>Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurStudies;
