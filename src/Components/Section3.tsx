import { styled } from "styled-components";
import { Section } from "../styles/common/Container";

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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          reprehenderit quis maiores culpa ipsam totam reiciendis! Pariatur
          culpa eligendi accusamus odit sit molestias expedita quae. Est eius
          placeat officia voluptate.
        </p>
      </Wrapper>
    </Section3Wrapper>
  );
}
