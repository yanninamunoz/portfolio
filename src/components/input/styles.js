import styled, { css } from "styled-components";
import { colors } from "../../global/colors";

export const StyledInput = css`
  background-position: 10px center;
  background-repeat: no-repeat;
  background-size: 3%;
  border: 1px solid #ccc;
  text-indent: 20px;
  width: 45em;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

export const Email = styled.input`
  padding: 10px 10px 10px 20px;
  height: 44px;
  ${StyledInput};
  background-image: url(https://img.icons8.com/ios-filled/452/apple-mail.png);
`;

export const Number = styled.input`
  padding: 10px 10px 10px 20px;
  height: 44px;
  ${StyledInput};
  background-image: url(https://pngimg.com/uploads/phone/phone_PNG48961.png);
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: 1em 2em 2em 3em;
  height: 5em;
  ${StyledInput};
  background-image: url(https://e7.pngegg.com/pngimages/210/377/png-clipart-conversation-text-computer-icons-message-cool-icon-cdr-white.png);
`;

export const Text = styled.input`
  padding: 10px 10px 10px 20px;
  height: 44px;
  ${StyledInput};
  background-image: url(https://img.icons8.com/material/452/name--v1.png);
`;
