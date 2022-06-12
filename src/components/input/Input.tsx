import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Control, FieldValues, useController } from "react-hook-form";

const StyledInput = styled.input`
  border-radius: 6px;
  width: 100%;
  padding: 12px 14px;
  background: hsla(0, 0%, 100%, 0.01);
  border: 1px solid #656293;
  /* margin: 10px 0; */
  color: #fff;
  font-size: 1.8rem;
  &:focus {
    border: 1px solid #8a3cff;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<FieldValues, any>;
}

const Input = ({ name, control, ...otherProps }: InputProps) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return <StyledInput id={name} {...field} {...otherProps} />;
};

export default Input;
