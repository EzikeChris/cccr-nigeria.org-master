import React from "react";
import "../../theme/sass/components/banner.sass";

const Index = () => {
  return (
    <div className="banner" id="banner">
      <div className="bg_banner h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="row h-100 w-100">
          <div className="col-sm-12 col-md-6 col-lg-6 p-0">
            <div
              className="left d-flex flex-column justify-content-center align-items-center  h-100 w-100"
              style={{
                backgroundImage: `linear-gradient(to bottom right, #001060, #0A2A7A23), url(${require("../../theme/assets/images/Image06.jpg")})`,
              }}
            >
              <h2 className="header my-auto">Clinical Services</h2>
              <p className="subheader mt-auto ml-3 align-self-start">
                Implementing clinical and <br />
                operational research <br />
                activities
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 p-0">
            <div
              className="right d-flex flex-column justify-content-center align-items-center  h-100 w-100"
              style={{
                backgroundImage: `linear-gradient(to bottom left, #001060, #0A2A7A23), url(${require("../../theme/assets/images/website-banner.png")})`,
              }}
            >
              <h2 className="header my-auto">Improved Approach</h2>
              <p className="subheader mt-auto mr-3 align-self-end">
                Providing best possible care solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
