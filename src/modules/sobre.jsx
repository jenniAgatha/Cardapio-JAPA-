import '../styles/sobre.css'
import logo from '../imagens/logo.png'

function Sobre() {
    return (
        <section id="sobre" className="sobre-section">
            <div className="sobre-container">
                <img src={logo} alt="" className='logo' />
                <h2 className="sobre-title">Sobre nós</h2>

                <p className="titleAbout">
                    A Japinga começou como um pequeno bar familiar e cresceu servindo sabores
                    autênticos e criativos. Aqui você encontra bebidas artesanais feitas com
                    ingredientes selecionados e muita tradição.
                </p>
            </div>
        </section>
    );
}

export default Sobre;