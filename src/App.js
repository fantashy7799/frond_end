import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Login from './router/Login';
import News from './router/News';
import Media from './router/Media';
import gridPhoto from './image/gridPhoto.jpeg';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      {!isLogin && 
        <img src={gridPhoto} alt="Logo" />
      }
      
      <footer>
        <ul className=''>
          <li>
            <Link to={'/news'}>
              <button id='button news'>news</button>
            </Link>
          </li>
          <li>
            <Link to={'media'}>
              <button id='button media'>media</button>
            </Link>
          </li>
        </ul>
      </footer>

      <Routes>
        <Route path='/' element={<Login onSetLogin = {setIsLogin} />} />
        <Route path='/news' element={<News />} />
        <Route path='/media' element={<Media />} />
      </Routes>

      {}
    </div>
  );
}

export default App;
