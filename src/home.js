import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/xxx">찾을 수 없는 페이지</Link></li>
      </ul>
    </div>
  );
}

export default Home;