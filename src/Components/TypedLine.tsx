import React from "react";
import { styled } from "styled-components";
// @ts-ignore
import Typed from "typed.js";

const TypedLineWrapper = styled.div`
  text-align: left;
  display: flex;
  justify-content: flex-start;
  color: black;
  align-items: center;
  margin-top: 18px;
`;

const TypedText = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 0.8em;
  color: black;
  @media (${({ theme }) => theme.devices.break2}) {
    font-size: 1em;
  }
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
        "I do Frontend!",
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
