import React from "react";
import styled from "styled-components";

const StoryContainer = styled.div`
  width: 100%;
`;

export default function Story() {
  return (
    <StoryContainer>
      <h1>Titulo</h1>
      <p>fecha</p>
      <p>usuario dueño</p>
      <p>asbtract</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>Galeria de la historia</p>
    </StoryContainer>
  );
}
