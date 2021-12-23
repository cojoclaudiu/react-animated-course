import React from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

const App = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  return (
    <animated.div style={fade} className="App">
      <header className="App-header">
        <img src={logo} className="logo" />
        <button className="menu-button">Menu</button>
      </header>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
};

export default App;
