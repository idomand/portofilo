import { styled } from "styled-components";
import { Div, DivRight, Section } from "./common/Container";
import { Header2, ListItem, UL } from "./common/Text";
import { BasicLink } from "./common/Links";

export default function AboutMe() {
  return (
    <Section>
      <Header2>What you should know about me</Header2>
      <WhyYes>
        <Div>
          <UL>
            <ListItem>Berlin based with family reunification visa.</ListItem>
            <ListItem>Excellent evaluations from previous jobs.</ListItem>
            <ListItem>Team player.</ListItem>
            <ListItem>People person.</ListItem>
            <ListItem>Insatiable hunger to learn.</ListItem>
            <ListItem>
              Strategic mindset and multidisciplinary background.
            </ListItem>
          </UL>
          <CVLink>Download CV</CVLink>
        </Div>
        <DivRight>
          <UL>
            <ListItem>Proficient in JavaScript and TypeScript</ListItem>
            <ListItem>Experience in both React and Vue</ListItem>
            <ListItem>
              Worked in enterprise codebases using Next.js, Redux and Pinia
            </ListItem>
            <ListItem>
              Great at making designers dream in Figma into a reality with:{" "}
              <br /> CSS | Tailwind | SCSS | styled-components{" "}
            </ListItem>
          </UL>
          <GitHubLink>See GitHub</GitHubLink>
        </DivRight>
      </WhyYes>
    </Section>
  );
}

const WhyYes = styled.div`
  display: flex;
  justify-content: space-around;
  @media (${({ theme }) => theme.devices.break1}) {
    flex-direction: column;
  }
`;

const CVLink = styled(BasicLink).attrs(() => {
  return {
    target: "_blank",
    href: "/Ido_Mandelman_CV.pdf",
  };
})``;
const GitHubLink = styled(BasicLink).attrs(() => {
  return {
    href: "https://github.com/idomand",
  };
})``;
