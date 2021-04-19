import React from "react";
import "../../theme/sass/components/header.sass";

const Header = () => {
  return (
    <header
      class="header-area header-bg dark-home-2"
      id="header"
      style={{
        backgroundImage: `linear-gradient(169deg, #001060 0%, #0A2A7A23 19%, #234393D8 58%, #0010607a 100%),})`,
      }}
    >
      <div class="shape-1">
        <img src="assets/img/shape/01.png" alt="" />
      </div>
      <div class="shape-2">
        <img src="assets/img/shape/02.png" alt="" />
      </div>
      <div class="shape-3">
        <img src="assets/img/shape/03.png" alt="" />
      </div>
      <div class="shape-4">
        <img src="assets/img/shape/09.png" alt="" />
      </div>

      <div class="header-right-image">
        {/* <img src='assets/img/mobile-image-4.png' alt='header right image' /> */}
        {/* <img src={require('../../theme/assets/images/holding-hands.jpg')} alt='holding-hands' /> */}
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="header-inner">
              <h1 class="title">
                Center for Clinical Care and Clinical Research Nigeria
              </h1>
              <p>
                Center for Clinical Care and Clinical Research is a non-profit
                organization that promotes best practices in health care
                delivery, medical training and research using locally-adapted
                models of health systems strengthening.
              </p>
              <div class="btn-wrapper wow fadeInUp">
                <a href="#" class="boxed-btn btn-rounded">
                  Mission
                </a>
                <a href="#" class="boxed-btn btn-rounded blank">
                  Vision
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
