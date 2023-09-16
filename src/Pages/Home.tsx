import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import { MainWrapper } from "../Components/common/Container";

export default function Home() {
  return (
    <MainWrapper>
      <Section1 />
      <Section2 />
    </MainWrapper>
  );
}
