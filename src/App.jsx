import './App.css'
import Logo from './assets/logo.svg'
import Lupa from './assets/lupa.svg'

function App() {

  return (
    <>
      <div id='cabecalho' >
        <h3 id='titulo' >Confira Nossos Produtos</h3>
      </div>

      <div id='search-box' >
        <img id='logo' src={Logo} alt="" />
        <p>Produtos</p> <p>contate-nos</p>
        <div id='input-box' >
          <input id='input' type="text" placeholder='pesquise aqui' />
          <button id='btn-pesquisar' > <img src={Lupa} alt="" /></button>
        </div>
      </div>
    </>
  )
}

export default App
