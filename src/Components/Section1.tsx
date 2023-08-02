import { styled } from "styled-components";
import { Title } from "../styles/common/Text";
import TypedLine from "./TypedLine";

const Section1Wrapper = styled.section`
  max-width: 900px;
  margin: auto;
`;

const SiteHeader = styled(Title)`
  color: #2c677c;
  margin: 20px 0 48px 0;
  text-align: left;
  font-size: 57px;
`;

export const BasicLink = styled.a.attrs(() => {
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
  display: inline-block;
  &:hover,
  &:active {
    background: ${({ theme }) => theme.white};
    border: 1.3px solid ${({ theme }) => theme.mainCTA};
    color: ${({ theme }) => theme.mainCTA};
  }
  @media (${({ theme }) => theme.devices.break1}) {
    width: 100px;
    max-width: 100px;
    height: 40px;
  }
`;
export default function Section1() {
  function letsChatFunc() {}

  return (
    <Section1Wrapper>
      <TypedLine />
      <div>
        <SiteHeader>I am Ido. I do Frontend</SiteHeader>
        <BasicLink onClick={letsChatFunc}>Let’s chat </BasicLink>
      </div>
    </Section1Wrapper>
  );
}
