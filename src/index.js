import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomeJs from './Home';
import HeroJs from './Hero';
import Katalogs from './Katalog';
import FooterJs from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <App />
    </header>

    <main>
      <HomeJs />
      <HeroJs />
      <Katalogs />
    </main>

    <footer>
      <FooterJs/>
    </footer>
  </React.StrictMode>
);
