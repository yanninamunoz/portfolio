import React from "react";
import Input from "../input";
import Button from "../buttons";
import { Line, Container } from "./styles";
import { faUserCircle, faAt, faPhoneSquareAlt, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

const Form = () => {
  const fields = [
    { id: 1, type: "text", name: "Fullname", icon: faUserCircle },
    { id: 2, type: "email", name: "Email", icon: faAt },
    { id: 3, type: "number", name: "Phone number", icon: faPhoneSquareAlt},
    { id: 4, type: "textarea", name: "Message", icon: faEnvelopeSquare },
  ];

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
      {fields.map((i) => {
        return (
          <>
            <Input color="primary" type={i.type} placeholder={i.name} name={i.name} icon={i.icon} size="lg" />
            <Line />
          </>
        );
      })}
      <Button color="secondary" type="submit" value="Send" text={button} />
    </Container>
  );
};

export default Form;
