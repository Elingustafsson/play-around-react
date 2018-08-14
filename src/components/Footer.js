import React, { Component } from "react";
import images from '../libs/images';
import '../index.css';

let {HTMLicon} = images

class Footer extends Component {

    render() {
      return (
        <div>
          <div className="footerFlex">
            <div className="footerLogo">
              <img className="testaren" src={HTMLicon}></img>
            </div>
            <div className="footerLogo">
              <img className="testaren" src={HTMLicon}></img>
            </div>
            <div className="footerLogo">
              <img className="testaren" src={HTMLicon}></img>
            </div>
          </div>
        <div className="lala"></div>
        </div>
      )
    }
}

export default Footer;
