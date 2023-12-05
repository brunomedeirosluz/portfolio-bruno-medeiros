import './Sobre.css';
import imagem from '../../Images/eu.png'

function Sobre() {
    return (
        <section className='sobre'>
            <div>
                <img className='imagem-eu' src={imagem} alt="" />
            </div>
            <div className='tracking-in-expand'>
                <h1>
                    <span>Olá,</span><br />
                    <span>Meu nome é</span><br />
                    <span>Bruno de Medeiros</span><br />
                    <span>E eu sou </span>
                    <span> Desenvolvedor Web </span><br />
                    <span>Full Stack</span><br />
                </h1>
            </div>
        </section>
    )
}

export default Sobre;
