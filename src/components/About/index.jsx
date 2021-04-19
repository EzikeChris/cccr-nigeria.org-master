import React from 'react'
import '../../theme/sass/components/about.sass'
const About = () => {
  return (
    <section id='about-us-area' class='about-us-area dark-bg'>
      <div class='shape-1'><img src='assets/img/shape/04.png' alt='' /></div>
      <div class='shape-2'><img src='assets/img/shape/05.png' alt='' /></div>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-lg-10'>
            <div class='section-title white'>
              <span class='subtitle'>About CCCRN</span>
              <h3 class='title extra'>
                Our mission is to promote best practices in health care delivery
                and research using locally-adapted models of health systems strengthening.
              </h3>
              <p>
                Center for Clinical Care and Clinical Research is a non-profit organization that
                promotes best practices in health care delivery, medical training and research using
                locally-adapted models of health systems strengthening. Established in 2010, CCCRN
                implements through a team of experienced health and allied professionals that include
                clinicians, laboratorians, community workers and health information specialists.
              </p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='feature-area'>
              <ul class='feature-list white'>
                <li class='single-feature-list white'>
                  <div class='icon icon-bg-1'>
                    <i class='flaticon-vector' />
                  </div>
                  <div class='content'>
                    <h4 class='title'><a href='#'>Service Delivery</a></h4>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt</p>
                  </div>
                </li>
                <li class='single-feature-list white'>
                  <div class='icon icon-bg-2'>
                    <i class='flaticon-responsive' />
                  </div>
                  <div class='content'>
                    <h4 class='title'><a href='#'>Training</a></h4>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor  tempor incididunt</p>
                  </div>
                </li>
                <li class='single-feature-list white'>
                  <div class='icon icon-bg-3'>
                    <i class='flaticon-layers-2' />
                  </div>
                  <div class='content'>
                    <h4 class='title'><a href='#'>Research</a></h4>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt</p>
                  </div>
                </li>
                <li class='single-feature-list white'>
                  <div class='icon icon-bg-4'>
                    <i class='flaticon-picture' />
                  </div>
                  <div class='content'>
                    <h4 class='title'><a href='#'>Others</a></h4>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt</p>
                  </div>
                </li>
              </ul>
              <div class='btn-wrapper' style={{display: 'none'}}>
                <a href='#' class='boxed-btn btn-rounded gd-bg-1'><i class='' />Our Projects</a>
                <a href='#' class='boxed-btn btn-rounded gd-bg-2'><i class='' /> Where We Work</a>
                <a href='#' class='boxed-btn btn-rounded gd-bg-3'><i class='' />Our Partners</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
