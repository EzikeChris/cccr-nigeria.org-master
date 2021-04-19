import React from 'react'
import '../../theme/sass/components/support.sass'

const Support = () => {
  return (
    <section id='how-it-work-area' className='how-it-work-area dark-bg'>
      <div className='shape-1'><img src='assets/img/shape/06.png' alt='' /></div>
      <div className='shape-2'><img src='assets/img/shape/07.png' alt='' /></div>
      <div className='shape-3'><img src='assets/img/shape/06.png' alt='' /></div>
      <div className='shape-4'><img src='assets/img/shape/07.png' alt='' /></div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-10'>
            <div className='section-title white'>
              <h2 className='subtitle'>Our Approach</h2>
              <p>CCCRN creates a fertile environment for ideas development, value creation and excellence through knowledge acquisition, application and dissemination.</p>
            </div>
          </div>
        </div>

        <div className='row info-cards'>
          <div className='col-sm-12 col-md-12 col-lg-4'>
            <div className='card' >
              <img className='card-img-top' src='http://cccr-nigeria.org/wp-content/uploads/2016/10/people-laugh.jpg?id=1821' alt='' />
              <div className='card-body'>
                <h4 className='card-title'>Fertile Environment</h4>
                <p className='card-text'>Ideas Development</p>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-4'>
            <div className='card' >
              <img className='card-img-top' src='http://cccr-nigeria.org/wp-content/uploads/2016/10/girl-talk.jpg?id=1840' alt='' />
              <div className='card-body'>
                <h4 className='card-title'>Cost Effective</h4>
                <p className='card-text'>Ethics and National Policies</p>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-12 col-lg-4'>
            <div className='card'>
              <img className='card-img-top' src='http://cccr-nigeria.org/wp-content/uploads/2016/10/microscope.jpg?id=1841' alt='' />
              <div className='card-body'>
                <h4 className='card-title'>Sustainable Partnerships</h4>
                <p className='card-text'>Accountability and Transparency</p>
              </div>
            </div>
          </div>
        </div>
        {/*  <div className='row'>
          <div className='col-lg-12'>
            <div className='how-it-work-tab-nav'>
              <ul className='nav nav-tabs' role='tablist'>
                <li className='nav-item'>
                  <a className='nav-link active' id='account-tab' data-toggle='tab' href='#account' role='tab' aria-controls='account' aria-selected='true'><i className='flaticon-checked' /> Call Us <span className='number'>1</span></a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' id='settings-tab' data-toggle='tab' href='#settings' role='tab' aria-controls='settings' aria-selected='false'><i className='flaticon-settings-1' /> Pick a Child <span className='number'>2</span></a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' id='chat-tab' data-toggle='tab' href='#chat' role='tab' aria-controls='chat' aria-selected='false'><i className='flaticon-chat-1' /> Become a Partner <span className='number'>3</span></a>
                </li>
              </ul>
            </div>
            <div className='tab-content fadeInUp wow'>
              <div className='tab-pane fade show active' id='account' role='tabpanel' aria-labelledby='account-tab'>
                <div className='how-it-works-tab-content white'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='left-content-area'>
                        <h4 className='title'>Get in touch with us</h4>
                        <p>Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore
                                                Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore
                                                    Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='right-content-area'>
                        <div className='img-wrapper'>
                          <img src='assets/img/how-it-works-image.png' alt='how it works image' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane fade' id='settings' role='tabpanel' aria-labelledby='settings-tab'>
                <div className='how-it-works-tab-content white'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='left-content-area'>
                        <h4 className='title'>Pick a child to sponsor</h4>
                        <p>Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore
                                                Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore
                                                    Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='right-content-area'>
                        <div className='img-wrapper'>
                          <img src='assets/img/how-it-works-image.png' alt='how it works image' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tab-pane fade' id='chat' role='tabpanel' aria-labelledby='chat-tab'>
                <div className='how-it-works-tab-content white'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='left-content-area'>
                        <h4 className='title'>Become a Partner</h4>
                        <p>Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore
                                                Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore
                                                    Innovative solutions with the best.  Incididunt dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore et dolore </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='right-content-area'>
                        <div className='img-wrapper'>
                          <img src='assets/img/how-it-works-image.png' alt='how it works image' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
export default Support
