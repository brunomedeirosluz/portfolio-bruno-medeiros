import Eu from "../../Images/eu.png";
import "./About.css";

function About() {
  return (
    <div className="background">
      <img className="eu" src={Eu} alt="minha-foto" />
      <p>Meu nome é Bruno de Medeiros Luz, tenho 28 anos e estou atualmente em transição de carreira. Por mais de 5 anos desempenhei a função de Gerente de Loja, o que me proporcionou um vasto aprendizado em diversas áreas, incluindo gestão de pessoas, comunicação e proatividade.
        <br></br><br></br>
        Atualmente, estou dedicando ao curso de Desenvolvimento Web Full Stack na Trybe, com previsão de conclusão para Abril/2024. Além disso, estou prestes a finalizar o primeiro período do Bacharelado em Sistemas de Informação.
        <br></br><br></br>
        Possuo conhecimentos sólidos em Front-End, com experiência em tecnologias como HTML, CSS, JavaScript, TypeScript, React, Jest, além de algumas bibliotecas e frameworks.
        <br></br><br></br>
        Neste momento, estou me aprofundando no estudo de Back-End, Docker, MySql e NodeJs.
        Demonstro grande facilidade em assimilar novas tecnologias e colaborar eficazmente em equipes de trabalho.</p>
    </div>
  );
}

export default About;
