import './Sobre.css';
import imagem from '../../Images/eu.svg'

function Sobre() {
    return (
    <section className='sobre'>
      <div>
      <h1>
        <span>Hi 👋,</span><br />
        <span>My name is</span><br />
        <span className='name'>Bruno Medeiros</span><br />
        <span>I am a </span> 
        <span className='name'> full stack </span><br />
        <span> web developer</span><br />
      </h1>
      </div>
      <div>
        <img src={imagem} alt="" />
      </div>
    </section>
    )
}

export default Sobre;