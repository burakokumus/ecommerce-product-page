"use client";

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const plusPressed = () => {
    setCount(count + 1);
  }

  const minusPressed = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="bg-blue-light-grayish flex flex-row justify-between px-6 rounded-lg h-12 items-center">
      <p className="font-bold text-orange-primary text-3xl" onClick={minusPressed}>-</p>
      <p className="font-bold">{count}</p>
      <p className="font-bold text-orange-primary text-3xl" onClick={plusPressed}>+</p>
    </div>
  );
};

export default Counter;