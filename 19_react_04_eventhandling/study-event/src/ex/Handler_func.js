import { useState } from "react";

const Handler_func = () => {
  const [content, setContent] = useState("Hello World!");
  const change = () => {
    setContent("Goodbye World!");
  };

  return (
    <div>
      <h1>{content}</h1>
      <button onClick={change}>버튼</button>
    </div>
  );
};

export default Handler_func;
