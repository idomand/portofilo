import { styled } from "styled-components";

export const Section = styled.section`
  margin-bottom: 48px;
  @media (${({ theme }) => theme.devices.break1}) {
    margin: 0 12px;

    /* margin-bottom: 10px; */
  }
`;

export const Div = styled.div`
  background-color: white;
  padding: 36px;
  border-radius: 24px;
  @media (${({ theme }) => theme.devices.break1}) {
    padding: 24px;
    margin: 0 12px;
  }
`;
