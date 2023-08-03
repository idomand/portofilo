import { styled } from "styled-components";
import { Div, Section } from "../styles/common/Container";
import { Header3, ListItem, UL } from "../styles/common/Text";
import { BasicLink } from "../styles/common/Links";

type Props = {};

const Section2Wrapper = styled(Section)`
  /* margin-top: 48px; */
`;

const WhyNo = styled.div``;
const WhyYes = styled.div`
  display: flex;
  justify-content: space-around;

  @media (${({ theme }) => theme.devices.break1}) {
    flex-direction: column;
  }
`;

const Div2 = styled(Div)`
  @media (${({ theme }) => theme.devices.break1}) {
    margin-bottom: 15px;
  }
`;

const Div3 = styled(Div)`
  margin-left: 24px;
  @media (${({ theme }) => theme.devices.break1}) {
    margin-left: 12px;
  }
`;

const CVLink = styled(BasicLink).attrs(() => {
  return {
    target: "_blank",
  };
})``;
const GitHubLink = styled(BasicLink).attrs(() => {
  return {
    href: "https://github.com/idomand",
  };
})``;

export default function Section2({}: Props) {
  return (
    <Section2Wrapper>
      <WhyNo>
        <Header3>What you Should not know about me</Header3>
        <Div>
          <UL>
            <ListItem>will finish the coffee in the office</ListItem>
            <ListItem>
              will finish the glühwein at the christmas party.
            </ListItem>
            <ListItem>
              will try to get the company to adopt a dog friendly work
              environment just because it’s fun (and I don’t even have a dog)
            </ListItem>
            <ListItem>Can't stop asking why</ListItem>
            <ListItem>Insatiable hunger to learn</ListItem>
            <ListItem>Good at syntax errors</ListItem>
            <ListItem>Use of tabs and spaces</ListItem>
            <ListItem>Argumentative (Was a lawyer)</ListItem>
          </UL>
        </Div>
      </WhyNo>
      <Header3>What you Should know about me</Header3>
      <WhyYes>
        <Div2>
          <UL>
            <ListItem>Berlin based with family reunification visa</ListItem>
            <ListItem>Excellent evaluations from previous jobs</ListItem>
            <ListItem>Team player</ListItem>
            <ListItem>People person</ListItem>
            <ListItem>Insatiable hunger to learn</ListItem>
            <ListItem>
              Strategic mindset and multidiscipListItemnary background
            </ListItem>
          </UL>
          <CVLink>Download CV</CVLink>
        </Div2>
        <Div3>
          <UL>
            <ListItem>Proficient in JavaScript and typescript</ListItem>
            <ListItem>Experience in React.js including v18</ListItem>
            <ListItem>Next.js, Redux - Intermediate</ListItem>
            <ListItem>CSS - proficient</ListItem>
            <ListItem>Node.js - FamiListItemar</ListItem>
            <ListItem>Git, Magento, ListItemnux - Basic</ListItem>
          </UL>
          <GitHubLink>See Github</GitHubLink>
        </Div3>
      </WhyYes>
    </Section2Wrapper>
  );
}
