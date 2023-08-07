import { styled } from "styled-components";

export const ProjectPicture = styled.picture`
  margin: 0 auto;
`;
export const ProjectImg = styled.img`
  width: 100%;
  max-width: 600px;
  @media (${({ theme }) => theme.devices.break1}) {
    max-width: 300px;
  }
`;
