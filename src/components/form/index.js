import React from "react";
import Input from "../input";
import Button from "../buttons";
import { Line, Container } from "./styles";
import emailjs from "emailjs-com";

const Form = () => {
  const name = "Fullname";
  const email = "Email";
  const phone = "Phone number";
  const message = "Message";
  const button = "Submit";

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7dgn7z7",
        "template_h70lcjh",
        e.target,
        "user_HgroSBUb6AZuj6XCGE32G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Container onSubmit={sendEmail}>
      <Input type="text" placeholder={name} name={name} />
      <Line />
      <Input type="email" placeholder={email} name={email} />
      <Line />
      <Input type="number" placeholder={phone} name={phone} />
      <Line />
      <Input type="textArea" placeholder={message} name={message} />
      <Line />
      <Button color="secondary" type="submit" value="Send" text={button} />
    </Container>
  );
};

export default Form;
