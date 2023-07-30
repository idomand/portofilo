import { styled } from "styled-components";

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: ${({ theme }) => theme.LightBlue};

  @media (max-width: 640px) {
    font-size: 2em;
  }
`;
