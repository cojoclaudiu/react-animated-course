import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import { Nav } from './Nav';
import { Checkout } from './Checkout';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0) scale(1)` : `translate3d(100%, 0, 0) scale(0.6)`
  });
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  return (
    <animated.div style={fade} className="App">
      <header className="App-header">
        <img src={logo} className="logo" />
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Menu
        </button>
        {/* <Nav style={navAnimation} /> */}
      </header>
      <main>
        <Toggle />
        <Checkout isOpen={isNavOpen} />
      </main>
    </animated.div>
  );
};

export default App;
