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
              As working adults, it's easy to wake up and realize you haven't
              talked to a good friend in months.
            </ListItem>
            <ListItem>
              Some technology makes people feel more isolated. I wanted to build
              something that brings them closer.
            </ListItem>
            <ListItem>
              You add the people you care about and choose how often you want to
              talk. with the option of getting personal Email notifications to
              help you remember.
            </ListItem>
            <ListItem>
              Linked friends, the app allow you to link your status with your
              friend so you'll both make sure to Stay In Touch!
            </ListItem>
          </UL>
          <ProjectLink_Live>Live Site</ProjectLink_Live>
        </Div>
        <DivRight>
          <Header3>HOW</Header3>
          <UL>
            <ListItem>
              Full-stack project with auth, a database and a live user base
            </ListItem>
            <ListItem>
              An installable PWA with a hand-written service worker, so it can
              be used like a native app.
            </ListItem>
            <ListItem>
              Built with Next.js 16 (App Router), React 19 and TypeScript, with
              Server Actions for all data writes.
            </ListItem>
            <ListItem>
              Firebase Auth (Google or verified email) with secure session
              cookies.
            </ListItem>
            <ListItem>Neon Postgres with Drizzle ORM.</ListItem>
            <ListItem>
              Styled with Tailwind CSS v4, and available in English and German.
            </ListItem>
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

const ProjectLink_Live = styled(ProjectLink).attrs(() => {
  return {
    href: "https://stay-in-touch.vip/",
  };
})``;

const ProjectLink_Repo = styled(ProjectLink).attrs(() => {
  return {
    href: "https://github.com/idomand/stayInTouch",
  };
})``;
