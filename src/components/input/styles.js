import styled, { css } from "styled-components";
import { colors } from "../../global/colors";

export const StyledInput = css`
  background-position: 10px center;
  background-repeat: no-repeat;
  background-size: 4%;
  border: 1px solid #ccc;
  text-indent: 20px;
  width: 35em;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

export const Email = styled.input`
  padding: 10px 10px 10px 20px;
  height: 44px;
  ${StyledInput};
  background-image: url(https://i.pinimg.com/originals/23/98/2d/23982d31ee932c26a021b175c47bb157.png);
`;

export const Number = styled.input`
  padding: 10px 10px 10px 20px;
  height: 44px;
  ${StyledInput};
  background-image: url(https://toppng.com/uploads/preview/hone-icon-png-font-awesome-phone-icon-11562921308wudexcjc0l.png);
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: 1em 2em 2em 3em;
  height: 5em;
  ${StyledInput};
  background-image: url(https://image.flaticon.com/icons/png/512/15/15992.png);
`;

export const Text = styled.input`
  padding: 10px 10px 10px 20px;
  height: 44px;
  ${StyledInput};
  background-image: url(https://img.icons8.com/pastel-glyph/2x/person-male--v3.png);
`;
