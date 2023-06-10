import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className='navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='/'>Catálogo</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='dados'>Novo</a>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LivroLista/>} />
          <Route path="dados" element={<LivroDados/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
