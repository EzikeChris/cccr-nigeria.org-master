import React from "react";
import "../../theme/sass/components/partners.sass";
const Index = (props) => {
  const partners = props.partners.map((partner) => (
    <div key={partner.id} className='col-sm-3 col-md-2 col-lg-2 my-2 mx-3'>
      <img className='partner-logo' src={partner.url} alt='partner-logo' />
    </div>
  ));
  return (
    <section id='partners' className='partners p-4'>
      <h1 className='title text-center'>Backed By The Best</h1>
      <p className='sub-title text-center'>
        Generating more meaningful and lasting impact is made possible <br />{" "}
        through the support of our partners.
      </p>
      <div className='container-fluid p-4'>
        <div className='row justify-content-start align-items-center'>
          {partners}
        </div>
      </div>
    </section>
  );
};

Index.defaultProps = {
  partners: [
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/ebonyi.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/clinton.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/cdc.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/caritas.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/abbvie.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/apin.png",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/11/umb.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/11/solina.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/11/ncdc.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/11/kbs.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/11/imo.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/11/geanco.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/11/FMCO.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/fth.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/fmc_keffi.jpg",
    },
    {
      id: Math.random(),
      url: "https://cccr-nigeria.org/wp-content/uploads/2016/10/fmc_ado.jpg",
    },
    {
      id: Math.random(),
      url: require("../../theme/assets/images/kncv.jpg"),
    },
    {
      id: Math.random(),
      url: require("../../theme/assets/images/usaid-usa.jpg"),
    },
  ],
};

export default Index;
