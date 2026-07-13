import suco from '../imagens/morango.png'
import '../styles/section.css'
import frutasVermelhas from '../imagens/frutas-vermelhas.png'
import lemon from '../imagens/lemon.png'
import tropical from '../imagens/tropical.png'
import blue from '../imagens/blue.png'
import maracuja from'../imagens/maracuja.png'

function Section() {
  return (
     
    <section className="section">
      <h2 className="section-title">Conheça nosso menu</h2>

      <div className="card-grid">
        <article className="card">
          <img src={suco} alt="imagem ilustrativa de um suco" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Morango</h3>
            <p className="card-text"> 
                  Gelo saborizado de morango
                  100 ml de vodka ou cachaça (500 ml)
                  150 ml de vodka ou cachaça (700 ml)
                  Completar com energético</p>
            <span className="card-price">R$ 35,00</span>
          </div>
        </article>

        <article className="card">
          <img src={frutasVermelhas} alt="imagem ilustrativa de um suco" className="card-image" />
          <div className="card-content">
            <h3 className="card-title"> Frutas Vermelhas</h3>
            <p className="card-text">Gelo saborizado de frutas vermelhas
                    100 ml de gin (500 ml)
                    150 ml de gin (700 ml)
                    Completar com energético de frutas vermelhas</p>
            <span className="card-price">R$ 35,00</span>
          </div>
        </article>
            <article className="card">
          <img src={lemon} alt="imagem ilustrativa de um suco" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Citrus Power</h3>
            <p className="card-text">
                  Gelo saborizado de limão
                  100 ml de gin (500 ml)
                  150 ml de gin (700 ml)
                  Completar com energético citrus</p>
            <span className="card-price">R$ 35,00</span>
          </div>
        </article>

  <article className="card">
          <img src={tropical} alt="imagem ilustrativa de um suco" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Tropical Energy</h3>
            <p className="card-text">
                 
                      Gelo saborizado de maracujá
                      100 ml de vodka (500 ml)
                      150 ml de vodka (700 ml)
                      Completar com energético tropical
              </p>
            <span className="card-price">R$ 35,00</span>
          </div>
        </article>

 <article className="card">
          <img src={blue} alt="imagem ilustrativa de um suco" className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Fusca Azul</h3>
            <p className="card-text">
                 
                                    
                  Gelo saborizado de blue curaçau ou limão
                  100 ml de vodka (500 ml)
                  150 ml de vodka (700 ml)
                  Completar com energético
              </p>
            <span className="card-price">R$ 35,00</span>
          </div>
        </article>

      <article className="card">
          <img src={maracuja} alt="imagem ilustrativa de um suco" className="card-image" />
          <div className="card-content">
            <h3 className="card-title"> Maracujá</h3>
            <p className="card-text">
                 
                                    
                                
                  Gelo saborizado de maracujá
                  100 ml de cachaça Japinga (500 ml)
                  150 ml de cachaça Japinga (700 ml)
                  Completar com energético tropical ou tradicional
              </p>
            <span className="card-price">R$ 35,00</span>
          </div>
        </article>


      </div>
    </section>
  )
}

export default Section
