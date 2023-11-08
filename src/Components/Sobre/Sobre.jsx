import './Sobre.css';
import imagem from '../../Images/eu.svg'

function Sobre() {
    return (
        <section className='sobre'>
            <div>
                <img className='imagem-eu' src={imagem} alt="" />
            </div>
            <div className='tracking-in-expand'>
                <h1>
                    <span>Oi 👋,</span><br />
                    <span>Meu nome é</span><br />
                    <span className='name'>Bruno de Medeiros</span><br />
                    <span>E eu sou </span>
                    <span className='name'> full stack </span><br />
                    <span>web developer</span><br />
                </h1>
            </div>
        </section>
    )
}

export default Sobre;
