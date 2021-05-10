import React from "react";
import "../../theme/sass/components/contact.scss";

const contact = () => {
  return (
    <div className="Tap">
      <div class="row ho">
        <div class="col-lg-6">
          <div class="contact-area-wrapper white" id="contact">
            <span class="subtitle">Contact us</span>
            <h3 class="title">Get In Touch</h3>
            <p>
              CCCRN looks forward to hearing back from you. We welcome feedback,
              questions, comments and concerns. Please email us using the
              contact form below or give us a call
            </p>
            <form action="index.html" class="contact-form sec-margin">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group textarea">
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                    />
                  </div>
                  <button class="submit-btn  btn-rounded gd-bg-1" type="submit">
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer id="footer" class="footer-area">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget about_widget">
                  <a href="index.html" class="footer-logo"></a>
                  <p>
                    Our guiding philosophy is to provide best possible care
                    solutions for each client, magnifying same approach to reach
                    many more in reaching public health goals.{" "}
                  </p>
                  <ul class="social-icon">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget nav_menus_widget">
                  <h4 class="widget-title">Useful Links</h4>
                  <ul>
                    <li>
                      <a href="index.html">
                        <i class="fas fa-chevron-right" /> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> About Us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Service
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Blog
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget nav_menus_widget">
                  <h4 class="widget-title">Need Help?</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Faqs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Support
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget nav_menus_widget">
                  <h4 class="widget-title">More Links</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Careers
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Projects
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Missions
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> Team
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fas fa-chevron-right" /> People
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="copyright-inner">
                  <div class="left-content-area">
                    &copy; Copyrights 2020 Center for Clinical Care and Clinical
                    Research | Plot 784, Jahi District, off Life Camp Gwarimpa
                    by Pass Expressway, Abuja | +234-8086-664968 | Powered by
                    Diggital Inc.
                  </div>
                  <div class="right-content-area" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default contact;
