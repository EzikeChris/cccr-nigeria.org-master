import React from 'react'

const Images = () => {
  return (
    <section class='screenshort-area dark-bg'>
      <div class='shape-1'><img src='assets/img/shape/06.png' alt='' /></div>
      <div class='shape-2'><img src='assets/img/shape/07.png' alt='' /></div>
      <div class='container'>
        <div class='row justify-content-center'>
          <div class='col-lg-10'>
            <div class='section-title white'>
              <span class='subtitle'>Screenshots</span>
              <h3 class='title extra'>Amazing visual interface</h3>
              <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor  tempor incididunt ut labore dolore magna.</p>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-lg-12'>
            <div class='screenshort-carousel'>
              <div class='single-screenshort-item'>
                <img src='assets/img/screenshort/screen-1.jpg' alt='' />
              </div>
              <div class='single-screenshort-item'>
                <img src='assets/img/screenshort/screen-2.jpg' alt='' />
              </div>
              <div class='single-screenshort-item'>
                <img src='assets/img/screenshort/screen-3.jpg' alt='' />
              </div>
              <div class='single-screenshort-item'>
                <img src='assets/img/screenshort/screen-4.jpg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Images
