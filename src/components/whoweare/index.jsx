import React from "react";
import "../../theme/sass/components/_whoweare.scss";

const whoweare = () => {
  return (
    <header className="wh">
      <div className="hd"></div>
      <div className="ab">
        <h1>Center for Clinical Care and Clinical Research</h1>
        <p>
          The Center for Clinical Care and Clinical Research is an indigenous,
          non-profit organization that promotes best practices in health systems
          strengthening and research. Established in 2010, CCCRN implements
          projects through a team of experienced professionals. Touching lives
          in a unique way, CCCRN has established its footprints in 36 states of
          Nigeria, where it has and continues to implement health programs that
          contribute to the global knowledge of effective health solutions. Our
          guiding philosophy is to provide best possible care solutions for each
          client, magnifying same approach to reach many more in reaching public
          health goals. With the headquarters in Abuja and field offices in its
          operational states, CCCRN has built a vast network of health and
          allied professional staff, partners and collaborators. Our
          infrastructure includes functional training facilities, robust
          telecommunications, in-house capacity for laboratory sample archiving,
          alternative power solutions and vehicle inventory for transportation
          logistics{" "}
        </p>
      </div>
      <div className="ab2">
        <h1> Geographical Reach and Experience in Nigeria</h1>
        <p>
          CCCRN has extensive footprints across the entire Nigerian geo-polity.
          We have worked in 36 states of the federation and our work spans
          through all tiers of healthcare system (primary, secondary and
          tertiary). Our community engagement has supported preventive and
          curative services to many Nigerians including those in hard to reach
          or vulnerable communities, such as nomadic populations and persons in
          conflict zones of Northeastern Nigeria.{" "}
        </p>
        <div className="rw">
          <div className="course-col">
            <h3>Middle Belt</h3>

            <p></p>
          </div>
          <div className="course-col">
            <h3>North West</h3>
            <p></p>
          </div>
          <div className="course-col">
            <h3>North East</h3>
            <p></p>
          </div>
          <div className="course-col">
            <h3>South South</h3>
            <p></p>
          </div>
          <div className="course-col">
            <h3>South East</h3>
            <p></p>
          </div>
          <div className="course-col">
            <h3>South West</h3>
            <p></p>
          </div>
        </div>
      </div>
      <div className="lc">
        <h1 className="on">Operational Facilities</h1>
        <p>
          CCCRN has strengthened Operational and Facility structures to
          implement standardized testing protocols for HIV testing and
          counseling.{" "}
        </p>
        <div className="rw">
          <div className="facility-col">
            <img src="images/headoffice.jpeg" alt="" />
            <div className="layer">
              <h3>ABUJA</h3>
            </div>
          </div>
          <div className="facility-col">
            <img src="images/headoffice.jpeg" alt="" />
            <div className="layer">
              <h3>Benue</h3>
            </div>
          </div>
          <div className="facility-col">
            <img src="images/headoffice.jpeg" alt="" />
            <div className="layer">
              <h3>Calabar</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default whoweare;
