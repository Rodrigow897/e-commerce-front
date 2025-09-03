import React, { useState } from 'react';
import './App.css';
import Logo from './assets/logo.svg';
import Lupa from './assets/lupa.svg';

function App() {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <div id="cabecalho">
        <h3 id="titulo">Confira Nossos Produtos</h3>
      </div>

      <div id="search-box">
        <nav className={`rotating-nav ${navActive ? 'active' : ''}`}>
          <button
            className="nav-toggle"
            onClick={() => setNavActive(prev => !prev)}
            aria-expanded={navActive}
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined">
              shopping_cart
            </span>
          </button>

          <ul className="nav-items">
            <li><a href="#">Cadastrar Produtos</a></li>
            <li><a href="#">Ver todos os Produtos</a></li>
          </ul>
        </nav>

        <p>Produtos</p>
        <p>contate-nos</p>

        <div id="input-box">
          <input id="input" type="text" placeholder="pesquise aqui" />
          <button id="btn-pesquisar">
            <img src={Lupa} alt="buscar" />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
