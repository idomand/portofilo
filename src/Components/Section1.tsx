import { styled } from "styled-components";
import { Header1 } from "../styles/common/Text";
import TypedLine from "./TypedLine";
import { EmailLink } from "../styles/common/Links";
import { Section } from "../styles/common/Continer";

const Section1Wrapper = styled(Section)`
  max-width: 900px;
  margin: 0 auto 48px;
`;

const SiteHeader = styled(Header1)`
  display: inline-block;
  color: #2c677c;
  margin: 20px 0 48px 0;
  text-align: left;
  font-size: 57px;
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
`;

export default function Section1() {
  function letsChatFunc() {}

  return (
    <Section1Wrapper>
      <TypedLine />
      <div>
        <SiteHeaderFirst>I am Ido.</SiteHeaderFirst>
        <SiteHeaderSecond>I do Frontend</SiteHeaderSecond>
      </div>
      <EmailLink onClick={letsChatFunc}>Let’s chat </EmailLink>
    </Section1Wrapper>
  );
}
