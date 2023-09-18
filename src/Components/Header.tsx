import { styled } from "styled-components";
import { Header1 } from "./common/Text";
import TypedLine from "./TypedLine";
import { EmailLink } from "./common/Links";
import { Section } from "./common/Container";

const Section1Wrapper = styled(Section)`
  max-width: 900px;
`;

const SiteHeader = styled(Header1)`
  display: inline-block;
  margin: 20px 0 48px 0;
  text-align: left;
  font-size: 57px;
  @media (${({ theme }) => theme.devices.break1}) {
    margin-bottom: 10px;
    font-size: 45px;
  }
  @media (${({ theme }) => theme.devices.break2}) {
    font-size: 36px;
  }
`;

const SiteHeaderLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (${({ theme }) => theme.devices.break1}) {
    justify-content: flex-start;
  }
  @media (${({ theme }) => theme.devices.break2}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SiteHeaderFirst = styled(SiteHeader)`
  background: linear-gradient(135deg, #43c6ac 0%, #2f7181 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const SiteHeaderSecond = styled(SiteHeader)`
  background: linear-gradient(135deg, #2c677c 0%, #191654 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-left: 17px;

  @media (${({ theme }) => theme.devices.break2}) {
    margin: 0 0 10px 0;
  }
`;

export default function Header() {
  function letsChatFunc() {}

  return (
    <Section1Wrapper>
      <TypedLine />
      <SiteHeaderLine>
        <SiteHeaderFirst>I am Ido.</SiteHeaderFirst>
        <SiteHeaderSecond>I do Frontend</SiteHeaderSecond>
      </SiteHeaderLine>
      <EmailLink onClick={letsChatFunc}>Let’s chat </EmailLink>
    </Section1Wrapper>
  );
}
