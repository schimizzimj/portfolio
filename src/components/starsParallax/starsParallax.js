import React from 'react';
import PropTypes from "prop-types";

import "./starsParallax.scss";

export default class StarsParallax extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }

  componentDidMount() {
    window.addEventListener("scroll", function (e) {
      const scrolled = window.pageYOffset;

      const parallax = document.getElementsByClassName('parallax');
      const backgrounds = document.getElementsByClassName('parallaxBackground');
      for (let i = 0; i < backgrounds.length; i++) {
        if (parallax[i].getBoundingClientRect().top <= window.innerHeight && parallax[i].getBoundingClientRect().bottom >= 0) {
          backgrounds[i].style.top = - (scrolled * 0.2) + 'px';
          console.log(i + " in view");
        }
      }
    });
  }

  render() {
    return (
      <div className="parallax">
        <div className="parallaxBackground">
          <div className="starsBackground"></div>
          <div className="twinkling"></div>
        </div>
        <div className="parallaxContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}
