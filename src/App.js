import logo from './logo.svg';
import './App.css';
import App2 from './App2';
import Compo1 from './compo/Compo1';
import Compo2 from './compo/Compo2';
import './test.css';//외부 css 파일 import 

function App() {
  const name = "호현";
  const data = 'Compo1';
  let num = 10;
  function chNum(){
    num = 30;
  };
  return (
    
    //JSX 문법 -> Javascript 와 HTML을 같이 사용할 수 있는 문법
    //규칙1 : 꼭 html 구조는 한가지 태그로 묶여있어야 한다
    //규칙2 : 모든 태그는 여는태그와 닫는 태그 둘 다 존재하여야 한다 
    // <h1>HELLO REACT <br></br>
    // 오늘도 파이팅!</h1>

    //빈태그(Fragment) 로도 사용이 가능하다!
    //규칙4. class를 지정해줄때는 className 이라는 키워드를 사용한다
    <>
     <h1 className = "first">HELLO REACT</h1>
     <h1 style={{color:"red", backgroundColor:"black"}}>월요일 파이팅!</h1>
     {/*
    변수를 사용할때는 {변수명} 으로 사용한다 
     JSX 문법 안에서는 사용할 수 있는 javascript 문법이 제한 되어있다
     삼항 연산자는 가능하다 
     name에 있는 값이 "승환"-> 나의 이름은 승환
     name에 있는 값이 다른 내용이라면 -> 나의 이름은 영표
      */}
     <h1 style={{color:"red"}}>{name === "명현" ? (`나의 이름은 ${name}`) : ("나의 이름은 영표")}입니다</h1>
     <h1>나의 이름은 {name =="승환" ? name :"영표"}입니다</h1>
     <App2></App2>
      {data == 'compo1' ? <Compo1></Compo1>:<Compo2></Compo2>}
      <h1>{num}</h1>
      <button onClick={chNum}>숫자 바꾸기</button>
     {/* <Compo1></Compo1>
     <Compo2></Compo2> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
