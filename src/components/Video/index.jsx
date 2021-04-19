import React from 'react'
import '../../theme/sass/components/video.sass'

const Video = () => {
  return (
    <section id='video-area' class='video-area dark-bg white p-5'>
      <div class='container'>
        <div class='row'>
          <div class='col-lg-6'>
            <div class='img-with-video'>
              <div class='img-wrap'>
                <img src='https://cccr-nigeria.org/wp-content/themes/cccrn/assets/img/baby-drip.jpg' alt='' />
                <div class='hover'>
                  <a href='#' class='video-play-btn mfp-iframe'><i class='fas fa-play' /></a>
                </div>
              </div>
            </div>
          </div>
          <div class='col-lg-6'>
            <div class='right-content-area '>
              <span class='subtitle'>Amazing experience</span>
              <h3 class='title'>Our Mission</h3>
              <p>
                Innovative solutions with the best.  Incididunt dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolor  tempor incididunt ut labore et dolore
              </p>
              <p>Built purse maids cease her ham new seven among and.
               Pulled coming wooded tended it answer remain me be. So landlord by we unlocked
              sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer
              common the appear ham beauty her had. Or belonging zealously existence
              as by resources.
              </p>

              <a href='#' class='boxed-btn btn-rounded'>Know more about CCCRN</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Video
