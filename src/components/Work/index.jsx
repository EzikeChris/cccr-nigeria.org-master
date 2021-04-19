import React from 'react'
import '../../theme/sass/components/work.sass'

const Work = () => {
  return (
    <section id="why-choose-area" className="why-choose-area dark-bg">
      <div className="shape-1">
        <img src="assets/img/shape/05.png" alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title white">
              <span className="subtitle">why work with us?</span>
              <h3 className="title extra">Our Core Values</h3>
              <p>
                Our Core Values embody who we are as an organization, and guide
                our thinking and activities as we strive to impact the
                communities we work.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
            <div className="card" style={{ width: '' }}>
              <img
                src="https://www.unicef.org/tanzania/sites/unicef.org.tanzania/files/styles/hero_mobile/public/UNI197921.jpg?itok=rqcI4kio"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">We are CCCRN</h5>
                <p className="card-text">
                  The Center for Clinical Care and Research Nigeria is a
                  non-profit organization that promotes best practices in health
                  care delivery
                </p>
                <a href="#" className="btn btn-primary ml-auto d-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
            <div className="card" style={{ width: '' }}>
              <img
                src="https://www.who.int/health-cluster/news-and-events/news/Image-7.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Guilding Philosophy</h5>
                <p className="card-text">
                  Our guiding philosophy is to provide best possible care
                  solutions for each client, magnifying same approach to reach
                  many more in reaching public health goals.
                </p>
                <a href="#" className="btn btn-primary ml-auto d-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
            <div className="card" style={{ width: '' }}>
              <img
                src="http://cccr-nigeria.org/wp-content/uploads/2016/10/pills.jpg?id=1809"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Touching Lives</h5>
                <p className="card-text">
                  CCCRN has its footprints in 12 states of Nigeria, where it
                  implements health initiatives and contributes to the global
                  knowledge of applicable health solutions.
                </p>
                <a href="#" className="btn btn-primary ml-auto d-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*
            <div className='row'>
          <div className='col-lg-4 col-md-12'>
            <div className='single-why-us-item white margin-top-60 fadeInUp wow'>
              <div className='icon gdbg-1'>
                <i className='flaticon-settings-1' />
              </div>
              <div className='content'>
                <h4 className='title'>Touching Lives</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
            <div className='single-why-us-item white fadeInUp wow'>
              <div className='icon gdbg-2'>
                <i className='flaticon-checked' />
              </div>
              <div className='content'>
                <h4 className='title'>Feeding the Hungry</h4>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12'>
            <div className='center-image'>
                <img src='assets/img/mobile-img-2.png' alt='mobile image two' />
              </div>
              </div>
              <div className='col-lg-4 col-md-12'>
                <div className='single-why-us-item white margin-top-60 fadeInUp wow'>
                  <div className='icon gdbg-3'>
                    <i className='flaticon-chat-1' />
                  </div>
                  <div className='content'>
                    <h4 className='title'>Training the Youths</h4>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </div>
                </div>
                <div className='single-why-us-item white fadeInUp wow'>
                  <div className='icon gdbg-4'>
                    <i className='flaticon-cloud' />
                  </div>
                  <div className='content'>
                    <h4 className='title'>Providing Health care</h4>
                    <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                  </div>
                </div>
              </div>
            </div>
        */}
      </div>
    </section>
  )
}
export default Work
