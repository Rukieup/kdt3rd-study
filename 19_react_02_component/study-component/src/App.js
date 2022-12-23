import './App.css';
import Button from './button';
import ClassComponent from './ClassComponent';
import FoodComponent from './FoodComponent';
import FuncComponent from './FuncComponent';
import BookComponent from './BookComponent';
import TextComponent from './TextComponent';

function App() {


  return (
    <div className="App">
      <ClassComponent name="KDT3rd" students={100}/>
      <hr />
      <FuncComponent name="KDT3기" students={25}/>
      <hr />

      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.daum.net">다음</Button>
      <Button></Button>
      <hr />

      <FoodComponent content="뿌링클" />    
      <FoodComponent /> 
      <hr />

      <h1>이번주 베스트셀러</h1>
      <BookComponent title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500원" type="자기계발서"/>
      <hr />

      <TextComponent text="App 컴포넌트에서 넘겨준 text props입니다" valid={function valid() {
        console.log('콘솔 띄우기 성공!')
        }}>
      </TextComponent>
      
      </div>
  );
}

export default App;
