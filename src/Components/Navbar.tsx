import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.section`
  /* margin: 16px 0 24px; */
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 80%;
  flex-direction: column;
  /* align-items: flex-start; */
  align-items: flex-end;

  z-index: 5;
  @media (${({ theme }) => theme.devices.break1}) {
    left: 80%;
    align-items: flex-end;
  }

  @media (${({ theme }) => theme.devices.break2}) {
    left: 70%;
    align-items: flex-end;
  }
`;

const NavLink = styled(Link)`
  margin-top: 8px;
  padding: 8px 12px;
  width: 110px;
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  border: 1.3px solid ${({ theme }) => theme.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border-radius: 80px;
  line-height: 20px;
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
  width: fit-content;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blue};
  }
`;

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </NavbarWrapper>
  );
}
