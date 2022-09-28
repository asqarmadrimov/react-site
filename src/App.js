import './App.css';

import MAXLOFT from './imges/MAXLOFT.png'

function App() {
  return (
    <div className="App">
      <div className='container header'>
        <a href='#'>
          <img src={MAXLOFT}/>
        </a>
        <nav className='header-nav'>
          <ul className='header-list'>
            <li className='header-item'>
              <a className='header-link' href='#'>
                О компании
              </a>
            </li>
            
            <li className='header-item'>
              <a className='header-link' href='#'>
                Каталог
              </a>
            </li>

            <li className='header-item'>
              <a className='header-link' href='#'>
                Приемущества
              </a>
            </li>

            <li className='header-item'>
              <a className='header-link' href='#'>
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        <button className='header-button'>
          Оставить заявку
        </button>
      </div>
    </div>
  );
}

export default App;
