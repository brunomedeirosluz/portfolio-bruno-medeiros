import { useState } from "react";
import closeImg from "../../Images/close.svg"
import gif from "../../Images/success.gif"
import "./Contact.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormSubmit = true;

    if (isFormSubmit) {
      setIsAlertVisible(true);

      setName("");
      setEmail("");
      setAbout("");

      setTimeout(() => {
        setIsAlertVisible(false);
      }, 4000);
    }
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="contact-container">
      <h1 className="name-form">Formulário para Contato:</h1>
      <form
        action="https://formsubmit.co/brunomedeirosluz@gmail.com"
        method="POST"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="about"
          placeholder="Sobre"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required />
        <button type="submit">Enviar</button>
        <input type="hidden" name="_captcha" value="false" />
      </form>
      {isAlertVisible && (
        <div className="custom-alert">
          <img className="gif" src={gif} alt="gif de sucesso" />
          <p>E-mail enviado com sucesso! Em breve entrarei em contato.</p>
          <button onClick={closeAlert} className="close-button">
            <img src={closeImg} alt="svg de fechar" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;