import { styled } from "styled-components";
import { Header3, ListItem, UL } from "./common/Text";
import recipeRefinerPicture from "../assets/reciperefiner.png";
import { ProjectLink } from "./common/Links";
import {
  Div,
  DivRight,
  ProjectContentWrapper,
  ProjectWrapper,
} from "./common/Container";
import { ProjectImg, ProjectPicture } from "./common/pictures";

export default function RecipeRefinerProject() {
  return (
    <ProjectWrapper>
      <ProjectTitle>Recipe Refiner</ProjectTitle>
      <ProjectPicture>
        <ProjectImg alt="RecipeRefiner project" src={recipeRefinerPicture} />
      </ProjectPicture>
      <ProjectContentWrapper>
        <Div>
          <Header3>WHY</Header3>
          <UL>
            <ListItem>
              Recipe sites are buried under ads and long intros — I wanted a
              clean, readable version.
            </ListItem>
            <ListItem>
              Paste a recipe URL and get just the ingredients and instructions.
            </ListItem>
            <ListItem>
              Built as a collaboration with a fellow developer, working across a
              full stack.
            </ListItem>
          </UL>
          <ProjectLink_Live>Live Site</ProjectLink_Live>
        </Div>
        <DivRight>
          <Header3>HOW</Header3>
          <UL>
            <ListItem>Django backend with a React frontend.</ListItem>
            <ListItem>
              Uses the recipe-scrapers Python library to extract ingredients and
              instructions from any recipe page.
            </ListItem>
            <ListItem>Saves the last 20 recipes for registered users.</ListItem>
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
    href: "https://reciperefiner.onrender.com/",
  };
})``;

const ProjectLink_Repo = styled(ProjectLink).attrs(() => {
  return {
    href: "https://github.com/danab9/RecipeRefiner",
  };
})``;
