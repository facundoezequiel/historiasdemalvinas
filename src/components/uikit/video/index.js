import React from "react";
import { VideoContainer } from "./styled";
import ReactPlayer from "react-player/lazy";

export default function Video({ url, size }) {
  return (
    <VideoContainer size={size}>
      <ReactPlayer
        url={url}
        config={{
          youtube: {
            playerVars: { showinfo: 0, frameborder: 0, rel: 0 },
          },
        }}
      />
    </VideoContainer>
  );
}
