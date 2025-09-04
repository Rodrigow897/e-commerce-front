import React, { useState } from 'react';
import './App.css';
import Fone from './assets/fone.png'
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
              menu
            </span>
          </button>

          <ul className="nav-items">
            <li><a href="#">Cadastrar Produtos</a></li>
            <li><a href="#">Ver todos os Produtos</a></li>
            <li><a href="#">Cadastrar categorias</a></li>
          </ul>
        </nav>

        <button className='btn'>Promoções</button>
        <button className='btn'>Eletrônicos</button>
        <button className='btn'>Limpeza</button>
        <button className='btn'>Livros</button>
        

        <div id="input-box">
          <input id="input" type="text" placeholder="pesquise aqui" />
          <button id="btn-pesquisar">
            <img src={Lupa} alt="buscar" />
          </button>
        </div>
      </div>

      <div className="product-grid">
        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>

        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>


        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>



        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>



        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>


        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>

        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>

        <div className="product-card">
          <img src={Fone} alt="Product 1" className='product-img' />
          <h3>Nome do produto</h3>
          <p>$199.99</p>
          <button className='add-to-cart' data-id="1" data-name="Nome do produto" data-price="199.99">Add ao Carrinho</button>
        </div>
      </div>
    </>
  );
}

export default App;
