import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { Control, FieldValues, useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LabelError from "components/label/LabelError";

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
  name: string;
  control: Control<FieldValues, any>;
  error: any;
}

const AuthInput = ({ name, control, label, error, ...otherProps }: AuthInputProps) => {
  const { t } = useTranslation();
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <StyledAuthInput>
      <span>{t(label)}</span>
      <input {...otherProps} {...field} />
      <LabelError>{t(error?.message)}</LabelError>
    </StyledAuthInput>
  );
};

export default AuthInput;
