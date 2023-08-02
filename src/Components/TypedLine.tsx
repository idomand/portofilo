import React from "react";
import { styled } from "styled-components";
// @ts-ignore
import Typed from "typed.js";
import { SubTitle } from "../styles/common/Text";

const TypedLineWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: flex-start;
  color: black;
  align-items: center;
`;

const TypedText = styled(SubTitle)`
  color: black;
  font-size: 0.8;
`;

export default function TypedLine() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I do Frontend!",
        "I do UX/UI",
        "I do React.js",
        "I do TypeScript",
        "I do Next.js",
        "I do CSS, SASS, Tailwind and Styled-Components",
        "I do Everything everywhere all at once!",
      ],
      typeSpeed: 50,
      smartBackspace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <TypedLineWrapper>
      <TypedText ref={el} />
    </TypedLineWrapper>
  );
}
