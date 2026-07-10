import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";

export default function Navbar() {
  const { pathname } = useLocation();
  const isLinksPage = pathname === "/links";

  return (
    <NavbarWrapper>
      <NavLink to="/">Home</NavLink>
      {!isLinksPage && (
        <>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/links">Links</NavLink>
          <EmailLink2 href="mailto:idomand@gmail.com" target="_blank">
            <span>Let’s chat</span>
            <Icon path={mdiEmailOutline} size={0.5} />
          </EmailLink2>
        </>
      )}
    </NavbarWrapper>
  );
}

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
  text-align: center;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blue};
  }
`;

const EmailLink2 = styled.a`
  margin-top: 8px;
  padding: 8px 12px;
  width: 110px;
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  border: 1.3px solid ${({ theme }) => theme.white};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  border-radius: 80px;
  line-height: 20px;
  text-decoration: none;
  transition: 0.3s;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blue};
  }
`;
