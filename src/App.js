import React, { Component } from 'react';
import Hero from './components/hero';
import MainMenuScreen from './components/MainMenuScreen';
import SmallAbout from './components/SmallAbout';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (


          <div>
            <Hero />
            <MainMenuScreen />
            <SmallAbout />
            <Footer />
          </div>


    );
  }
}

export default App;
