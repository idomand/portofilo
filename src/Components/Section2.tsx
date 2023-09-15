import { styled } from "styled-components";
import { Div, DivRight, Section } from "./common/Container";
import { Header2, ListItem, UL } from "./common/Text";
import { BasicLink } from "./common/Links";

const WhyNo = styled.div``;
const WhyYes = styled.div`
  display: flex;
  justify-content: space-around;
  @media (${({ theme }) => theme.devices.break1}) {
    flex-direction: column;
  }
`;

const Div2 = styled(Div)`
  max-width: 100%;
  @media (${({ theme }) => theme.devices.break1}) {
    margin-bottom: 15px;
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

export default function Section2() {
  return (
    <Section>
      <WhyNo>
        <Header2>What you Should not know about me</Header2>
        <Div2>
          <UL>
            <ListItem>Will finish the coffee in the office</ListItem>
            <ListItem>Will finish the glühwein at the christmas party</ListItem>
            <ListItem>
              Will try to get the company to adopt a dog friendly work
              environment just because it’s fun (and I don’t even have a dog)
            </ListItem>
            <ListItem>Can't stop asking why</ListItem>
            <ListItem>Insatiable hunger to learn</ListItem>
            <ListItem>Good at syntax errors</ListItem>
            <ListItem>Use of tabs and spaces</ListItem>
            <ListItem>Argumentative (Was a lawyer)</ListItem>
          </UL>
        </Div2>
      </WhyNo>
      <Header2>What you Should know about me</Header2>
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
            <ListItem>Proficient in JavaScript and typescript</ListItem>
            <ListItem>Experience in React.js including v18</ListItem>
            <ListItem>Next.js, Redux - Intermediate</ListItem>
            <ListItem>CSS - proficient</ListItem>
            <ListItem>Node.js - FamiListItemar</ListItem>
            <ListItem>Git, Magento, ListItemnux - Basic</ListItem>
          </UL>
          <GitHubLink>See Github</GitHubLink>
        </DivRight>
      </WhyYes>
    </Section>
  );
}
