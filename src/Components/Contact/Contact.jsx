import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="name-form">Formulário para Contato:</h1>
      <form
        action="https://formsubmit.co/brunomedeirosluz@gmail.com" 
        method="POST"
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Nome" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <textarea name="about" placeholder="Sobre" required />
        <button type="submit">Send</button>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:5173/" />
      </form>
    </div> 
  );
}

export default Contact;