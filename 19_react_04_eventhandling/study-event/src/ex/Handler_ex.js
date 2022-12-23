import React from "react";

class Handle_ex extends React.Component{
  state = {
    content: "Hello World!",
  }
  
  render() {
    const {content} = this.state;

    return (
      <div>
        <h1>{content}</h1>
        <button onClick={() => this.setState({content: "Goodbye World!"})}>버튼</button>
      </div>
    )
  }
}

export default Handle_ex;