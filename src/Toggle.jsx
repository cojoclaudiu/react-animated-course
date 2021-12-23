import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { color, y } = useSpring({
    // opacity: isToggled ? 0 : 1,
    color: isToggled ? 'tomato' : 'green',
    y: isToggled ? 0 : -50
  });

  return (
    <div>
      <animated.h1 style={{ transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`), color }}>Hello</animated.h1>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
};

export default Toggle;
