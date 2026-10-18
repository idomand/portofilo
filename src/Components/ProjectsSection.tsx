import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Header2 } from "./common/Text";
import SwipeAndThrowProject from "./SwipeAndThrowProject";
import RecipeRefinerProject from "./RecipeRefinerProject";
import StayInTouchProject from "./StayInTouchProject";
import styled from "styled-components";
import { Section } from "./common/Container";

export default function ProjectsSection() {
  const { hash, key } = useLocation();
  const sectionRef = useRef<HTMLElement>(null);

  // React Router does not scroll to a hash. `key` changes on every navigation,
  // so clicking "Projects" again after scrolling away still works.
  useEffect(() => {
    if (hash === "#projects") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, key]);

  return (
    <Section3Wrapper id="projects" ref={sectionRef}>
      <Wrapper>
        <Header2>Get to know me with just 3 projects:</Header2>
        <StayInTouchProject />
        <SwipeAndThrowProject />
        <RecipeRefinerProject />
      </Wrapper>
    </Section3Wrapper>
  );
}

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
