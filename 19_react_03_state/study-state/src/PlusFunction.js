import React from 'react';

class PlusFunction extends React.Component{

  state = {
    number: 0,
  }
  // const [number, SetNumber] = useState(0)
  // const plusTwo = () => SetNumber(number + 2)
  // const minusOne = () => SetNumber(number - 1)

  
  render() {
    const {number} = this.state;

    return(
    <>
      <h1>{number}</h1>
      <button onClick={() => this.setState({number: number + 2})}>+2</button>
      <button onClick={() => this.setState({number: number - 1})}>-1</button>
    </> 
    )
  }
}

export default PlusFunction;