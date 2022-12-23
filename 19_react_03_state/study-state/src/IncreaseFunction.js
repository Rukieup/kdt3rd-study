import { useState } from 'react';

const IncreaseFunction = (props) => {
  const [number, SetNumber] = useState(0);
  const increase = () => SetNumber(number + 1);
  const decrease = () => SetNumber(number - 2);
  return(
    <>
    <h1>{number}</h1>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    </>
  )
}

export default IncreaseFunction;