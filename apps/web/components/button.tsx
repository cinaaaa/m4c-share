import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  children: JSX.Element | string;
}

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  background-color: #283648;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  margin-top: 30px;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #38475b;
  }

  &:focus {
    outline: none;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
