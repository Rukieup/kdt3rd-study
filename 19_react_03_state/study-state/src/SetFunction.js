import { useState } from 'react';

const SayFunction = () => {
  const [message, setMessage] = useState('Welcome!');
  // 'Welcome!': 상태(state) 

  const onClickEnter = () => setMessage('안녕하세요~')
  const onClickLeave = () => setMessage('안녕히 가세요~')
  
  return(
    <>
    <h1>{message}</h1>
    <button onClick={onClickEnter}>입장</button>
    <button onClick={onClickLeave}>퇴장</button>
    </>
  )
}

export default SayFunction;