import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import FooterNew from './src/components/Footer/Footer.jsx';
import Navbar from './src/components/Navbar/Navbar';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './styles.css';
import Banner from './src/Home/Banner';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

function App() {
  return (
    <div>
      <Navbar />
      <Provider template={AlertTemplate} {...options}>
      <Home />
       </Provider>
      {/* <div className="home-page">
        <Banner />
      </div> */}
      <FooterNew />

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
