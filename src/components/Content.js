import React, { Component } from "react";
import images from '../libs/images';
import '../index.css';

let {elinProfile} = images

export default class Content extends Component {


    render() {
      return (
        <div>
          <div className="parallax" id="top">
            <div className="caption">
              <div className="column-one">
                <p>Hi my name is Elin, and this is my portfolio site<span>|</span></p>
              </div>
          </div>
        </div>
          <section className="test" id="page">
            <div className="infoPage" >
              <img className="elinProfile" src={elinProfile} />
            </div>
            <div className="infoCaption">
              <p>My name is Elin, I'm 25 years old and I am studying front-end development.
                I have experience working with React, HTML, CSS, dittan dattan.
                I also enjoy running and swimming and jumping.</p>
            </div>
          </section>
          <div className="parallaxSecond">
        			<h1>lalalalalal</h1>
        	</div>
          <section className="infoPage" id="">
          </section>
        </div>
      )
    }
}
