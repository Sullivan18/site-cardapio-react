import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Sobre Nós</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">Texto sobre o restaurante</p>
        <button type="button" className="custom__button">
          Saiba mais
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
     
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Nossa história</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p_opensans">Texto sobre a história</p>
        <button type="button" className="custom__button">
          Saiba mais
        </button>
      </div>
      

    </div>
  </div>
);

export default AboutUs;
