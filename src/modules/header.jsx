import fundo from '../imagens/bebida.png'
import '../styles/header.css'
import chapeu from '../imagens/chapeu.png'

function Header() {
  function openSaibaMais(){
    const el = document.getElementById('sobre');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      
      window.open(window.location.origin + '/#sobre', '_blank', 'noopener,noreferrer');
    }
  }
  return (
    <header className="header">
   
      
      <div className='titulo-chapeu-container'>
        <div>
          <h1 className='titulo-header1'> Conheça um pouco
             da nossa história.
          </h1>
          <button className='btn' onClick={openSaibaMais}>Saiba mais</button>
        </div>
        <img src={chapeu} alt="" className='chapeu' />
      </div>
       
    </header>
        
  )
}

export default Header
