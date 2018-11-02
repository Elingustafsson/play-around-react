import React, { Component } from "react";
import '../index.css';
import images from '../libs/images';

let {avatar} = images



export default class ElinsNav extends Component {

    render() {
      return (
        <div class="wrapper">
          <ul class="navbar">

            <li class="navbar1"><img class="avatar" src={avatar}/> <p>Elin</p></li>
            <li class="navbar2">Projects</li>
            <li class="navbar3">Contact</li>
          </ul>
        </div>
      )
}
}


// <img src={images}></img>
