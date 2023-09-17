import React, { Component } from "react";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      centerMode:true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/beach.jpeg" alt="beach" /></h3>
          </div>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/bee.webp" alt="bee" /></h3>
          </div>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/fish.jpeg" alt="fish" /></h3>
          </div>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/horse.jpeg" alt="horse" /></h3>
          </div>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/lake.webp" alt="lake" /></h3>
          </div>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/leaf.jpeg" alt="leaf" /></h3>
          </div>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/mountain.jpeg" alt="mountain" /></h3>
          </div>
          <div>
            <h3><img className="img-fluid shadow-2-strong " src="images/sky.jpeg" alt="sky" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}