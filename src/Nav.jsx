import React from 'react';
import { animated } from 'react-spring';

export const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Store</a>
        <a href="#">Tutorials</a>
      </nav>
    </animated.div>
  );
};
