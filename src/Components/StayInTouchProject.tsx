import React from "react";
import { styled } from "styled-components";
import { Header3, ListItem, UL } from "../styles/common/Text";
import stayInTouchPicture from "../assets/stayintouch.png";
type Props = {};

const StayInTouchProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProjectSubSection = styled.div`
  max-width: 33%;
`;

const ProjectPicture = styled.picture`
  margin: 0 auto 16px;
`;

export default function StayInTouchProject({}: Props) {
  return (
    <>
      <ProjectPicture>
        <img src={stayInTouchPicture} />
      </ProjectPicture>
      <StayInTouchProjectWrapper>
        <ProjectSubSection>
          <Header3>what</Header3>
          <UL>
            <ListItem>
              Seeing how some technologies can make people feel isolated, I
              wanted to create something to bring people closer together.
            </ListItem>
            <ListItem>
              This is a small app to help us stay in touch with friends and
              family.
            </ListItem>
            <ListItem>LINK_to_LIVE_SITE</ListItem>
          </UL>
        </ProjectSubSection>
        <ProjectSubSection>
          <Header3>how</Header3>
          <UL>
            LINK_TO_CODE_BASE
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
        </ProjectSubSection>
        <ProjectSubSection>
          <Header3>why</Header3>
          <UL>
            <ListItem>
              Seeing how some technologies can make people feel isolated, I
              wanted to create something to bring people closer together.
            </ListItem>
            <ListItem>
              This is a small app to help us stay in touch with friends and
              family.
            </ListItem>
          </UL>
        </ProjectSubSection>
      </StayInTouchProjectWrapper>
    </>
  );
}
