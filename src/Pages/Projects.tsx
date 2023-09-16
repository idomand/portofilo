import { Header2 } from "../Components/common/Text";
import GermanGameProject from "../Components/GermanGameProject";
import StayInTouchProject from "../Components/StayInTouchProject";
import styled from "styled-components";
import { MainWrapper, Section } from "../Components/common/Container";

const Wrapper = styled.div`
  max-width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section3Wrapper = styled(Section)`
  --skew-angle: -4deg;
  padding: 2rem 0;
  margin-top: 3rem;
  position: relative;
  isolation: isolate;
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

export default function Projects() {
  return (
    <MainWrapper>
      <Section3Wrapper>
        <Wrapper>
          <Header2>Get to know me with just 2 projects:</Header2>
          <GermanGameProject />
          <StayInTouchProject />
        </Wrapper>
      </Section3Wrapper>
    </MainWrapper>
  );
}
