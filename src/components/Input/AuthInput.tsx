import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledAuthInput = styled.div`
  input {
    border-radius: 6px;
    width: 100%;
    padding: 12px 14px;
    background: hsla(0, 0%, 100%, 0.01);
    border: 1px solid #656293;
    margin: 10px 0;
    color: #fff;
    font-size: 1.8rem;
    &:focus {
      border: 1px solid #8a3cff;
    }
  }
`;

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const AuthInput = ({ label, ...otherProps }: AuthInputProps) => {
  return (
    <StyledAuthInput>
      <span>{label}</span>
      <input {...otherProps} />
    </StyledAuthInput>
  );
};

export default AuthInput;
