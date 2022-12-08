import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/home"

// {} <= 중괄호 안에 있는 내용은 문자열 X 표현식으로 지급됨.
// Props : 컴포넌트의 외부에서 사용하는 입력값입니다.  
// 컴포넌트 (사용자 정의 태그)
function Header(props){
  console.log('props', props, props.title)
  return<header>
  <h1><a href="/">{props.title}</a></h1>
</header>
}
function Nav(props){
  const lis = []
  for(let i = 0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}
function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'js', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title="WEB" className="a"></Header>
      <Nav topics={topics}></Nav>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <home />
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
