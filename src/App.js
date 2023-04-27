import "./App.css"
import arrow from"./bg/arrow_down.svg"
import React from "react";
import { useState } from 'react';


function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    document.getElementsByClassName("sidenav")[0].style.marginLeft="1rem"
  } else{
    document.getElementsByClassName("sidenav")[0].style.marginLeft="-10rem"
  }
}
window.addEventListener("scroll", scrollFunction);
window.onscroll = function() {
  scrollFunction();
};



function App() {
  return (
    <>
    <div className="sidenav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about_us">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Request a Call Back</a></li>
        </ul>
    </div>
    
      <div className="main_container">      
        <div>
          <h1 className="techstaffy">
            TechStaffy
          </h1>
          <h1 id="main_Heading">
            IT Solutions
          </h1>
        </div>
        <p id="main_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi distinctio praesentium ea, nostrum aliquam quasi cupiditate sapiente earum aliquid, perspiciatis consequatur, esse vitae. Repellat temporibus minima earum. Provident, minus!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis velit illum error inventore quasi, vel tenetur repellendus deleniti assumenda nam, aliquid dolorem itaque voluptatibus obcaecati dolore rerum ad consequatur impedit?
        </p>
        <div className="worker_image">
          <a href="#about_us"><img src={arrow}/></a>
        </div>
        <div id="about_us">
          <h1 className="about_heading"id="">
            About Us!
          </h1>

          <p id="main_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi distinctio praesentium ea, nostrum aliquam quasi cupiditate sapiente earum aliquid, perspiciatis consequatur, esse vitae. Repellat temporibus minima earum. Provident, minus!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis velit illum error inventore quasi, vel tenetur repellendus deleniti assumenda nam, aliquid dolorem itaque voluptatibus obcaecati dolore rerum ad consequatur impedit?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil explicabo fugit quas odit vero laudantium officia! Autem ipsum consequuntur saepe reiciendis perspiciatis numquam voluptate quod omnis. Earum incidunt exercitationem deleniti.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias aperiam a perspiciatis aliquid, ullam facere veniam. Quaerat accusamus inventore corrupti? Iste, omnis maxime. Quia debitis cumque fugiat sit pariatur nisi?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rerum exercitationem, atque, dolores earum sint porro rem officiis perferendis tempore reiciendis accusamus deleniti facilis doloribus itaque cum, recusandae temporibus similique!
          </p>
        </div>
        <div id="services">
          <h1 className="service_head">
            Services
          </h1>
          <p id="main_para">
              We Believe any work that is taken should be done with Passion and By love. The Services provided by us are one of the top notch with the latest Industry standards Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <h2 className="listofservice">Services that we Offer</h2>
          <ul id="services_ul">
            <li>
              <a href="/"><h3>Service Name 1</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, non saepe pariatur illo libero quae unde neque necessitatibus praesentium voluptatem ex sint officia eius dignissimos quod, blanditiis adipisci modi aperiam? </p> </a>

              <a href="/"><h3>Service Name 2</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, non saepe pariatur illo libero quae unde neque necessitatibus praesentium voluptatem ex sint officia eius dignissimos quod, blanditiis adipisci modi aperiam? </p> </a>
              
              <a href="/"><h3>Service Name 3</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, non saepe pariatur illo libero quae unde neque necessitatibus praesentium voluptatem ex sint officia eius dignissimos quod, blanditiis adipisci modi aperiam? </p> </a>
              
              <a href="/"><h3>Service Name 4</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, non saepe pariatur illo libero quae unde neque necessitatibus praesentium voluptatem ex sint officia eius dignissimos quod, blanditiis adipisci modi aperiam? </p> </a>
              
              <a href="/"><h3>Service Name 5</h3> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, non saepe pariatur illo libero quae unde neque necessitatibus praesentium voluptatem ex sint officia eius dignissimos quod, blanditiis adipisci modi aperiam? </p> </a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h1>Want Us To Get Back To You</h1>
          <span>Just Enter your Contact Details and We'll Shortly Contact You</span>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"/><br/>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone"/><br/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email"/><br/>

            <label for="servicetype">Service Type:</label>
            <select id="servicetype" name="servicetype">
                <option value="Service Name 1">Service Name 1</option>
                <option value="Service Name 2">Service Name 2</option>
                <option value="Service Name 3">Service Name 3</option>
                <option value="Service Name 4">Service Name 4</option>
                <option value="Service Name 5">Service Name 5</option>
            </select><br/>

            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea><br/>

            <input type="submit" value="Submit" />
          </form>

        </div>
      </div>
    </>
  );
}

export default App;
