import { useRef } from 'react';

const RefSmaple2 = () => {
 const id = useRef(1); // 기본 값 1 설정

 const plusId = () => {
  id.current += 1;
  console.log(id.current)
 }
  return (
    <>
     <h1>Ref Sapmple 로컬 변수</h1>
     <h2>{id.current}</h2>
     <button onClick={plusId}>Plus Ref</button>
    </>
  );
};

export default RefSmaple2;