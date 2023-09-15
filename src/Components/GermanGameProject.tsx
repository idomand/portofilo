import { styled } from "styled-components";
import { Header3, ListItem, UL } from "./common/Text";
import GermanGame from "../assets/GermanGame.png";
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
    href: "https://resplendent-cactus-79b384.netlify.app/",
  };
})``;

const ProjectLink_Repo = styled(ProjectLink).attrs(() => {
  return {
    href: "https://github.com/idomand/word-game-3.0",
  };
})``;

export default function GermanGameProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle>German Game</ProjectTitle>
      <ProjectPicture>
        <ProjectImg alt="German Word Game project" src={GermanGame} />
      </ProjectPicture>
      <ProjectContentWrapper>
        <Div>
          <Header3>WHY</Header3>
          <UL>
            <ListItem>
              As a fun way to learn the German articles, I’ve created a small
              game to reinforce the most common words in the german language
            </ListItem>
            <ListItem>Learning Next 13 and Tailwind CSS</ListItem>
            <ListItem>For foreigners mastering German Grammar</ListItem>
          </UL>
          <ProjectLink_Live>Live Site</ProjectLink_Live>
        </Div>
        <DivRight>
          <Header3>HOW</Header3>
          <UL>
            <ListItem>
              This game was create with Typescript and React.js
            </ListItem>
            <ListItem>tailwindCSS was used for the design.</ListItem>
            <ListItem>
              Firebase was used for the authentication and database
            </ListItem>
          </UL>
          <ProjectLink_Repo>Repo</ProjectLink_Repo>
        </DivRight>
      </ProjectContentWrapper>
    </ProjectWrapper>
  );
}
