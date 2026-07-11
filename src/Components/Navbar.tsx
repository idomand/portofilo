import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiClose, mdiMenu } from "@mdi/js";

export default function Navbar() {
  const { pathname } = useLocation();
  const isLinksPage = pathname === "/links";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const close = () => setIsOpen(false);

  return (
    <>
      <MenuToggle
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <Icon path={isOpen ? mdiClose : mdiMenu} size={1} />
      </MenuToggle>

      <Backdrop $isOpen={isOpen} onClick={close} />

      <NavbarWrapper $isOpen={isOpen}>
        <NavLink to="/" onClick={close}>
          Home
        </NavLink>
        {!isLinksPage && (
          <>
            <NavLink to="/projects" onClick={close}>
              Projects
            </NavLink>
            <NavLink to="/links" onClick={close}>
              Links
            </NavLink>
            <EmailLink2 href="mailto:idomand@gmail.com" target="_blank">
              <span>Let’s chat</span>
              <Icon path={mdiEmailOutline} size={0.5} />
            </EmailLink2>
          </>
        )}
      </NavbarWrapper>
    </>
  );
}

const MenuToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1.3px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  z-index: 20;
  transition: 0.3s;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blue};
  }

  @media (${({ theme }) => theme.devices.break2}) {
    display: flex;
  }
`;

const Backdrop = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (${({ theme }) => theme.devices.break2}) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    transition: opacity 0.3s ease;
    z-index: 10;
  }
`;

const NavbarWrapper = styled.section<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 80%;
  flex-direction: column;
  align-items: flex-end;

  z-index: 15;
  @media (${({ theme }) => theme.devices.break1}) {
    left: 80%;
    align-items: flex-end;
  }

  @media (${({ theme }) => theme.devices.break2}) {
    top: 0;
    left: auto;
    right: 0;
    bottom: 0;
    width: min(75vw, 260px);
    padding: 88px 20px 24px;
    align-items: stretch;
    background: ${({ theme }) => theme.DarkBlue};
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.35);
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
    transition: transform 0.3s ease;
    overflow-y: auto;
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

  @media (${({ theme }) => theme.devices.break2}) {
    width: 100%;
    box-sizing: border-box;
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

  @media (${({ theme }) => theme.devices.break2}) {
    width: 100%;
  }
`;
