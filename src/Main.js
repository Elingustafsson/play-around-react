import React from 'react';
import ElinsNav from "./components/ElinsNav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './index.css';

export default class Main extends React.Component {

    render() {
      return (
        <div>
          <ElinsNav />
          <Content />
          <Footer />
        </div>
     )
    }
}
