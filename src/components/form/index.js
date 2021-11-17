import React from "react";
import Input from "../input";
import Button from "../buttons";
import { Line, Container } from "./styles";
import { fields } from "./helper";
import emailjs from "emailjs-com";

const Form = () => {
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
            <Input
              color="primary"
              type={i.type}
              placeholder={i.name}
              name={i.name}
              icon={i.icon}
              size="lg"
            />
            <Line />
          </>
        );
      })}
      <Button color="secondary" type="submit" value="Send" text={button} />
    </Container>
  );
};

export default Form;
