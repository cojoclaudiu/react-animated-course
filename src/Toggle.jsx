import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: 'C',
      key: 1
    },
    {
      letter: 'l',
      key: 2
    },
    {
      letter: 'a',
      key: 3
    },
    {
      letter: 'u',
      key: 4
    },
    {
      letter: 'd',
      key: 5
    },
    {
      letter: 'i',
      key: 6
    },
    {
      letter: 'u',
      key: 7
    }
  ]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 style={props} key={key}>
          {item.letter}
        </animated.h1>
      ))}
      <button onClick={() => setItems([{ letter: 'C', key: 1 }])}>Toggle</button>
    </div>
  );
};

export default Toggle;
