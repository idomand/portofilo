import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {};

const NavbarWrapper = styled.section`
  margin: 16px 0 24px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 5%;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;
  @media (${({ theme }) => theme.devices.break1}) {
    left: 85%;
    align-items: flex-end;
  }
`;

const NavLink = styled(Link)`
  width: 110px;
  background-color: ${({ theme }) => theme.LightBlue};
  color: ${({ theme }) => theme.white};
  border: 1.3px solid ${({ theme }) => theme.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border-radius: 80px;
  line-height: 20px;
  padding: 8px 12px;
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
  margin-top: 16px;
  width: fit-content;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.LightBlue};
    color: ${({ theme }) => theme.LightBlue};
  }
`;

export default function Navbar({}: Props) {
  return (
    <NavbarWrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </NavbarWrapper>
  );
}
