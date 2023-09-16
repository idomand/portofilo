import { styled } from "styled-components";
import { Header3, ListItem, UL } from "./common/Text";
import stayInTouchPicture from "../assets/stayintouch.png";
import { ProjectLink } from "./common/Links";
import {
  Div,
  DivRight,
  ProjectContentWrapper,
  ProjectWrapper,
} from "./common/Container";
import { ProjectImg, ProjectPicture } from "./common/pictures";

const ProjectTitle = styled(Header3)`
  margin-bottom: 16px;
`;

const ProjectLink_Live = styled(ProjectLink).attrs(() => {
  return {
    href: "https://stay-in-touch.vercel.app/",
  };
})``;

const ProjectLink_Repo = styled(ProjectLink).attrs(() => {
  return {
    href: "https://github.com/idomand/stayInTouch",
  };
})``;

export default function StayInTouchProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle>Stay-in-touch</ProjectTitle>
      <ProjectPicture>
        <ProjectImg alt="Stay-In-Touch project" src={stayInTouchPicture} />
      </ProjectPicture>
      <ProjectContentWrapper>
        <Div>
          <Header3>WHY</Header3>
          <UL>
            <ListItem>
              Seeing how some technologies can make people feel isolated, I
              wanted to create something to bring people closer together.
            </ListItem>
            <ListItem>
              This is a small app to help us stay in touch with friends and
              family.
            </ListItem>
            <ListItem>
              Also, I Love typescript and next.JS and I wanted to created a
              basic design system for myself
            </ListItem>
          </UL>
          <ProjectLink_Live>Live Site</ProjectLink_Live>
        </Div>
        <DivRight>
          <Header3>HOW</Header3>
          <UL>
            <ListItem>
              This project is a PWC so it can be used like a native app.
            </ListItem>
            <ListItem>
              Writing in TypeScript and Next.js for better maintainability.
            </ListItem>
            <ListItem>
              Styled-Components was chosen for its Component-based approach and
              it’s built in theme support
            </ListItem>
            <ListItem>
              Firebase was used for secure authentication and built-in database.
            </ListItem>
          </UL>
          <ProjectLink_Repo>Repo</ProjectLink_Repo>
        </DivRight>
      </ProjectContentWrapper>
    </ProjectWrapper>
  );
}
