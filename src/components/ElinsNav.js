import React, { Component } from "react";
import {Navbar, Nav, NavItem } from 'reactstrap';

export default class ElinsNav extends Component {

    render() {
      return (
        <div style={styles.wrapper}>
          <ul style={styles.navbar}>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      )
}
}

let styles = {
  navbar: {
    display: 'flex',
    position: 'fixed',
    left: '0',
    right: '0',
    overflow: 'auto',
    Zindex: '99',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    listStyleType: 'none',
    letterSpacing: '3px'
  },
  wrapper: {
    position: 'relative',
    top: '20px'
  }
}
