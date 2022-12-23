import './App.css'

function App() {

  let name = '냐옹이'
  let animal = 'cat'
  let txt = ''
  let a = 7
  let b = 5

  const test = {
    backgroundColor: 'yellow',
    color: 'orange',
    margin: '10px',
    fontSize: '30px',
    textAlign: 'center',
  }

  const input = {
    margin: '10px',
    textAlign: 'center',
    width: '100px',
  }

  const red = {
    backgroundColor: 'red',
    height: '100px',
    width: '100px',
  }

  const orange = {
    backgroundColor: 'orange',
    height: '200px',
    width: '100px',
  }

  const yellow = {
    backgroundColor: 'yellow',
    height: '300px',
    width: '100px',
  }

  const green = {
    backgroundColor: 'green',
    height: '400px',
    width: '100px',
  }

  const blue = {
    backgroundColor: 'blue',
    height: '500px',
    width: '100px',
  }

  const navy = {
    backgroundColor: 'navy',
    height: '600px',
    width: '100px',
  }

  const purple  = {
    backgroundColor: 'purple',
    height: '700px',
    width: '100px',
  }
  
  return (
    <div>
      <h2>제 반려동물의 이름은 {name} 입니다.</h2>
      <h2> {name}는 {animal}입니다.</h2>
      <p>{3 + 5 == 8 ? '정답입니다' : '오답입니다'}</p>
      <p>{a > b && 'a가 b보다 큽니다'}</p>
      <br />
      <div style={test}>Hello world</div>
      <div style={{
        textAlign: 'center',
      }}>
        <label htmlFor="id">아이디 :</label>
        <input style={input} name='id'/><br />
        <label htmlFor="pw">비밀번호 :</label>
        <input style={input} name='pw'/>
      </div>
      
      <div style = {{
        display: 'flex',
      }}>
        <div style={red}></div>
        <div style={orange}></div>
        <div style={yellow}></div>
        <div style={green}></div>
        <div style={blue}></div>
        <div style={navy}></div>
        <div style={purple}></div>
      </div>


      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4"></div>
      <div className="div5"></div>
      <div className="eye1"></div>
      <div className="eye2"></div>
    </div>
  )
}

export default App
