import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount } from '../modules/counter';
export const Counter = () => {
  const [amount, setAmount] = useState(0);
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();
  const addCounter = () => {
    dispatch(increment());
  }
  const subCounter = () => {
    dispatch(decrement());
  }
  const addCounterByAmount = () => {
    dispatch(incrementByAmount({amount}));
  }
  const handleChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setAmount(num);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={addCounter}>(+1)</button>
      <button onClick={subCounter}>(-1)</button>
      <input onChange={handleChange} value={amount}/>
      <button onClick={addCounterByAmount}>加算</button>
    </div>
  )
}
