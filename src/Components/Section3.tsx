import { styled } from "styled-components";
import { Section } from "../styles/common/Container";
import { Header2 } from "../styles/common/Text";
import StayInTouchProject from "./StayInTouchProject";

const Section3Wrapper = styled(Section)`
  --skew-angle: -4deg;
  padding: 2rem 0;
  margin-top: 3rem;
  position: relative;
  isolation: isolate;
  /* background-color: white; */
  position: relative;
  isolation: isolate;
  &::after {
    content: "";
    background: white;
    position: absolute;
    z-index: -1;
    inset: 0;
    transform: skewY(var(--skew-angle));
  }
`;
const Wrapper = styled.div`
  max-width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
type Props = {};

export default function Section3({}: Props) {
  return (
    <Section3Wrapper>
      <Wrapper>
        <Header2>Get to know me with just 2 projects:</Header2>
        <StayInTouchProject />
      </Wrapper>
    </Section3Wrapper>
  );
}
