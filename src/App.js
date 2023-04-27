import "./App.css";
import arrow from "./bg/arrow_down.svg";
import React from "react";

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.getElementsByClassName("sidenav")[0].style.marginLeft = "1rem";
  } else {
    document.getElementsByClassName("sidenav")[0].style.marginLeft = "-10rem";
  }
}
window.addEventListener("scroll", scrollFunction);
window.onscroll = function () {
  scrollFunction();
};

function App() {
  return (
    <>
      <div className="sidenav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about_us">About Us</a>
          </li>
          <li>
            <a href="#ourwork">Our Works</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Request a Call Back</a>
          </li>
        </ul>
      </div>

      <div className="main_container">
        <div className="head">
          <h1 className="techstaffy">TechStaffy</h1>
          <h1 id="main_Heading">IT Solutions</h1>
          <p id="main_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nisi distinctio praesentium ea, nostrum aliquam quasi cupiditate
            sapiente earum aliquid, perspiciatis consequatur, esse vitae.
            Repellat temporibus minima earum. Provident, minus! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Corporis velit illum
            error inventore quasi, vel tenetur repellendus deleniti assumenda
            nam, aliquid dolorem itaque voluptatibus obcaecati dolore rerum ad
            consequatur impedit?
          </p>
        </div>

        <div className="worker_image">
          <a href="#about_us">
            <img src={arrow} />
          </a>
        </div>

        <div id="about_us">
          <h1 className="about_heading" id="">
            About Us!
          </h1>

          <p id="main_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nisi distinctio praesentium ea, nostrum aliquam quasi cupiditate
            sapiente earum aliquid, perspiciatis consequatur, esse vitae.
            Repellat temporibus minima earum. Provident, minus! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Corporis velit illum
            error inventore quasi, vel tenetur repellendus deleniti assumenda
            nam, aliquid dolorem itaque voluptatibus obcaecati dolore rerum ad
            consequatur impedit? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nihil explicabo fugit quas odit vero laudantium
            officia! Autem ipsum consequuntur saepe reiciendis perspiciatis
            numquam voluptate quod omnis. Earum incidunt exercitationem
            deleniti. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestias aperiam a perspiciatis aliquid, ullam facere veniam.
            Quaerat accusamus inventore corrupti? Iste, omnis maxime. Quia
            debitis cumque fugiat sit pariatur nisi? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Velit rerum exercitationem, atque,
            dolores earum sint porro rem officiis perferendis tempore reiciendis
            accusamus deleniti facilis doloribus itaque cum, recusandae
            temporibus similique!
          </p>
        </div>

        <div className="ourwork" id="ourwork">
          <h1>Our Works</h1>
          <ul class="works">
            <li>
              <img src="work1.jpg" alt="Work 1" />
              <h2>Work 1 Title</h2>
              <p>A brief description of Work 1.</p>
            </li>
            <li>
              <img src="work2.jpg" alt="Work 2" />
              <h2>Work 2 Title</h2>
              <p>A brief description of Work 2.</p>
            </li>
            <li>
              <img src="work3.jpg" alt="Work 3" />
              <h2>Work 3 Title</h2>
              <p>A brief description of Work 3.</p>
            </li>
            <li>
              <img src="work4.jpg" alt="Work 4" />
              <h2>Work 4 Title</h2>
              <p>A brief description of Work 4.</p>
            </li>
            <li>
              <img src="work5.jpg" alt="Work 5" />
              <h2>Work 5 Title</h2>
              <p>A brief description of Work 5.</p>
            </li>
            <li>
              <img src="work6.jpg" alt="Work 6" />
              <h2>Work 6 Title</h2>
              <p>A brief description of Work 6.</p>
            </li>
          </ul>
        </div>

        <div id="services">
          <h1 className="service_head">Services</h1>
          <p id="main_para">
            We Believe any work that is taken should be done with Passion and By
            love. The Services provided by us are one of the top notch with the
            latest Industry standards Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <h2 className="listofservice">Services That We Offer</h2>
          <ul id="services_ul">
            <li>
              <a href="/">
                <h3>Service Name 1</h3>{" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores, non saepe pariatur illo libero quae unde neque
                  necessitatibus praesentium voluptatem ex sint officia eius
                  dignissimos quod, blanditiis adipisci modi aperiam?{" "}
                </p>{" "}
              </a>

              <a href="/">
                <h3>Service Name 2</h3>{" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores, non saepe pariatur illo libero quae unde neque
                  necessitatibus praesentium voluptatem ex sint officia eius
                  dignissimos quod, blanditiis adipisci modi aperiam?{" "}
                </p>{" "}
              </a>

              <a href="/">
                <h3>Service Name 3</h3>{" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores, non saepe pariatur illo libero quae unde neque
                  necessitatibus praesentium voluptatem ex sint officia eius
                  dignissimos quod, blanditiis adipisci modi aperiam?{" "}
                </p>{" "}
              </a>

              <a href="/">
                <h3>Service Name 4</h3>{" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores, non saepe pariatur illo libero quae unde neque
                  necessitatibus praesentium voluptatem ex sint officia eius
                  dignissimos quod, blanditiis adipisci modi aperiam?{" "}
                </p>{" "}
              </a>

              <a href="/">
                <h3>Service Name 5</h3>{" "}
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores, non saepe pariatur illo libero quae unde neque
                  necessitatibus praesentium voluptatem ex sint officia eius
                  dignissimos quod, blanditiis adipisci modi aperiam?{" "}
                </p>{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="contact" id="contact">
          <h1>Want Us To Get Back To You</h1>
          <span>
            Just Enter your Contact Details and We'll Shortly Contact You
          </span>
          <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />
            <br />

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />
            <br />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
            <br />

            <label for="servicetype">Service Type:</label>
            <select id="servicetype" name="servicetype">
              <option value="Service Name 1">Service Name 1</option>
              <option value="Service Name 2">Service Name 2</option>
              <option value="Service Name 3">Service Name 3</option>
              <option value="Service Name 4">Service Name 4</option>
              <option value="Service Name 5">Service Name 5</option>
            </select>
            <br />

            <label for="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <br />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <footer>
        <div class="container">
          <div class="row">
            <div class="col">
              <img src="logo.png" alt="Logo"/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3>Subscribe to our newsletter</h3>
              <form>
                <input type="email" placeholder="Enter your email" id="email2"/>
                <button type="submit" id="submit2">Subscribe</button>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <p>&copy; 2023 Example Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>



    </>
  );
}

export default App;
