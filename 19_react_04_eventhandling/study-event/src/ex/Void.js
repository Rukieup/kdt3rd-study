import { useState } from "react";

const Void = () => {
  // 다른 버전
  // const [content, setContent] = useState("사라져라")
  // const [content2, setContent2] = useState("안녕하세요")
  
  // const changeContent = () => {
  //   if(content2){
  //     setContent("보여라")
  //     setContent2("")
  //   } else {
  //     setContent("사라져라")
  //     setContent2("안녕하세요")
  //   }
  // }
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {/* <button onClick={changeContent}>{content}</button>
      <h1>{content2}</h1> */}
 
      <h1>{visible && '안녕하세요'}</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? '사라져라' : '보여라'}
      </button>
    </div>
  )
}

export default Void;