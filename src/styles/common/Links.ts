import { styled } from "styled-components";

export const EmailLink: any = styled.a.attrs(() => {
  return {
    target: "_blank",
    href: "mailto:idomand@gmail.com",
  };
})`
  background-color: ${({ theme }) => theme.mainCTA};
  color: ${({ theme }) => theme.white};
  border: 1.3px solid ${({ theme }) => theme.white};
  border-radius: 80px;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding: 16px 24px;
  text-decoration: none;
  transition: 0.3s;
  max-width: 180px;
  display: inline-block;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.mainCTA};
    color: ${({ theme }) => theme.mainCTA};
  }
  @media (${({ theme }) => theme.devices.break1}) {
    font-size: 20px;
    padding: 14px 22px;
  }
  @media (${({ theme }) => theme.devices.break2}) {
    font-size: 16px;
    padding: 10px 18px;
  }
`;

export const BasicLink: any = styled.a.attrs(() => {
  return {
    target: "_blank",
  };
})`
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  border: 1.3px solid ${({ theme }) => theme.white};
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  border-radius: 80px;
  line-height: 20px;
  padding: 16px 24px;
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
  margin-top: 36px;
  margin-left: 40px;
  width: fit-content;
  cursor: pointer;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blue};
  }
  @media (${({ theme }) => theme.devices.break1}) {
    /* width: 100px;
    max-width: 100px;
    height: 40px; */
  }
  @media (${({ theme }) => theme.devices.break2}) {
    font-size: 16px;
    padding: 10px 18px;
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
`;
