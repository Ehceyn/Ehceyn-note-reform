import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: #fff;
  width:60px;
  height:50px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  position:absolute;
  left:150px;
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme} style={{ display: "inline" }}>
      Toggle theme{" "}
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
