import { styled } from "styled-components";

export const Header1 = styled.h1`
  color: ${({ theme }) => theme.LightBlue};
  @media (${({ theme }) => theme.devices.break1}) {
  }
  @media (${({ theme }) => theme.devices.break2}) {
  }
`;

export const Header2 = styled.h2`
  margin: 24px 0;
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.205px;
  letter-spacing: 0.16px;
  @media (${({ theme }) => theme.devices.break2}) {
    font-size: 1.5em;
    margin: 12px 0;
  }
`;

export const Header3 = styled.h3`
  margin: 0;
  text-decoration: underline;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 41.205px;
  letter-spacing: 0.16px;
  @media (${({ theme }) => theme.devices.break2}) {
    font-size: 1.5em;
    margin: 12px 0;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.4px;
`;

export const UL = styled.ul`
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.4px;
  margin-bottom: 6px;
`;
