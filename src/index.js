import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './HeroSection';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <HeroSection/>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
