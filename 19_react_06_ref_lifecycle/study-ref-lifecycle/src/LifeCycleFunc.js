import {useState, useEffect} from 'react';

// 자식 컴포넌트
const MyComponent = (props) => {
  const {number} = props;
  const [text, setText] = useState('');

  useEffect(() => {
    // Mount 시점에 실행
    console.log('⭕ mount!');

    // Unmount 시점에 실행
    // : effect 함수에서 함수를 리턴할 때
    return () => {
      console.log('❌ unmount!')
    };
  }, []);

  // Mount & Update 시점에 실행
  useEffect(() => {
    console.log('🔥 update!')
  }) 

  // text가 바뀔 때(Update)만 실행
  useEffect(() => {
    console.log('🌸 only text state update! >>>', text);
  }, [text])

  return (
    <>
      <p>My Component {number}</p>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </>
  )
}

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible] = useState(true)

  const changeNubmerState = () => {
    setNumber(number + 1);
  }

  const changeVisiblaState = () => {
    setVisible(!visible)
  }

  return(
    <>
    <h1>함수형 컴포넌트에서 라이프 사이클 이해하기</h1>
    <button onClick={changeNubmerState}>Plus</button>
    <button onClick={changeVisiblaState}>ON/OFF</button>
    {visible && <MyComponent number={number}/>}
    </>
  )
}

export default LifeCycleFunc