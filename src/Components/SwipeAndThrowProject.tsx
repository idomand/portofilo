import { styled } from "styled-components";
import { Header3, ListItem, UL } from "./common/Text";
import swipeAndThrowPicture from "../assets/swipe-and-throw.jpeg";
import { ProjectLink } from "./common/Links";
import {
  Div,
  DivRight,
  ProjectContentWrapper,
  ProjectWrapper,
} from "./common/Container";
import { ProjectImg, ProjectPicture } from "./common/pictures";

export default function SwipeAndThrowProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle>Swipe-and-throw</ProjectTitle>
      <ProjectPicture>
        <SmallProjectImg
          alt="SwipeAndThrow project"
          src={swipeAndThrowPicture}
        />
      </ProjectPicture>
      <ProjectContentWrapper>
        <Div>
          <Header3>WHY</Header3>
          <UL>
            <ListItem>
              Cleaning up a camera roll in the stock gallery is tedious — I
              wanted it quick and low-friction.
            </ListItem>
            <ListItem>
              A Tinder-style swipe interface for fast keep-or-discard decisions,
              one photo at a time.
            </ListItem>
            <ListItem>A chance to explore native mobile development.</ListItem>
          </UL>
          <ProjectLink_Live>Live Site</ProjectLink_Live>
        </Div>
        <DivRight>
          <Header3>HOW</Header3>
          <UL>
            <ListItem>
              Built with Expo (SDK 57) and Expo Router for file-based routing.
            </ListItem>
            <ListItem>
              React Native + React 19, written in TypeScript (strict mode).
            </ListItem>
            <ListItem>
              Reanimated and Gesture Handler power the swipe gestures.
            </ListItem>
            <ListItem>Currently in early development, Android first.</ListItem>
          </UL>
          <ProjectLink_Repo>Repo</ProjectLink_Repo>
        </DivRight>
      </ProjectContentWrapper>
    </ProjectWrapper>
  );
}

const ProjectTitle = styled(Header3)`
  margin-bottom: 16px;
`;

const SmallProjectImg = styled(ProjectImg)`
  max-width: 150px;
  @media (${({ theme }) => theme.devices.break1}) {
    max-width: 75px;
  }
`;

const ProjectLink_Live = styled(ProjectLink).attrs(() => {
  return {
    href: "https://expo.dev/accounts/idomand/projects/swipeAndThrow/builds/c2dc7806-5630-4fa3-864e-012c86c57487",
  };
})``;

const ProjectLink_Repo = styled(ProjectLink).attrs(() => {
  return {
    href: "https://github.com/idomand/swipeAndThrow",
  };
})``;
