import React, { Component } from "react";
import images from '../libs/images';
import '../index.css';

let {elinProfile, HTMLicon} = images

export default class Content extends Component {

    constructor(props) {
    super(props);
    this.state = {
      test: "hej Sam",
      elin: "hehe"
    }
  }



     elinsFunc(parameter) {
       var listOfStrings = [
      "HTML, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "JS, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "CSS, ReactJS är en fett bra motor liksom.. Den är fett bra jag lovar, svär..",
       "NODEJS, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "REACTJS, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "GIT, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     ];
      console.log(parameter);

        this.setState({test: listOfStrings[parameter] });
        console.log(this.state);
    }

    render() {
      const a = [0,1,2,3,4,5,6,7];
      return (
        <div>
          <div className="parallax" id="top">
          <div className="caption">
              <div className="column-one">
                {/*   <p>Hi my name is Elin, and this is my portfolio site<span>|</span></p> */}
              </div>

          </div>
        </div>
          <section className="test" id="page">
            <div className="infoPage" >
              <img className="elinProfile" src={elinProfile} />
            </div>
            <div className="infoCaption">
              <p>My name is Elin, Im 25 years old and I am studying front-end development.
                I have experience working with React, HTML, CSS, dittan dattan.
                I also enjoy running and swimming and jumping.</p>
            </div>
          </section>
          <div className="parallaxSecond">
            <div className="logoTypes">
              {a.map(i => {
                return <div className={'test1 logo' + i} onClick={() => this.elinsFunc(i)}></div>
              })}

            </div>
            <div className="logoTypeCaption">
              <p>{this.state.test}</p>
            </div>
        	</div>
          <section className="infoPage" id="">
          </section>
        </div>
      )
    }
}
