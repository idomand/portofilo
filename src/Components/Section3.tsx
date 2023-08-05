import { styled } from "styled-components";
import { Section } from "../styles/common/Container";
import { Header3 } from "../styles/common/Text";

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
  max-width: 50rem;
  margin-inline: auto;
  padding-inline: 1rem;
`;
type Props = {};

export default function Section3({}: Props) {
  return (
    <Section3Wrapper>
      <Wrapper>
        <Header3>Get to know me with just 2 projects:</Header3>
      </Wrapper>
    </Section3Wrapper>
  );
}
