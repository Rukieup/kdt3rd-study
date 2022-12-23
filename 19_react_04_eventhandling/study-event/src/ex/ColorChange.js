import {useState} from "react";

const ColorChange = () => {
  const [content, setContent] = useState("검정색 글씨")
  const [color, setColor] = useState({color: "black"})
  const red = () => {
    setContent("빨간색 글씨")
    setColor("red")
  }

  const blue = () => {
    setContent("파란색 글씨")
    setColor("blue")
  }
  
  return(
    <div>
      <h1 style={{color}}>{content}</h1>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </div>
  )
}

export default ColorChange;