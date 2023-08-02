import { styled } from "styled-components";

export const Header1 = styled.h1`
  font-size: 3em;
  text-align: center;
  color: ${({ theme }) => theme.LightBlue};
  font-weight: 700;
  @media (max-width: 640px) {
    font-size: 2em;
  }
`;

export const Header2 = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 700;

  color: ${({ theme }) => theme.LightBlue};
  @media (max-width: 640px) {
    font-size: 1.5em;
  }
`;

export const Header3 = styled.h3`
  margin: 0 0 48px 0;
  font-weight: 700;

  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.205px;
  letter-spacing: 0.16px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.4px;
`;
export const ListItem = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.4px;
`;
