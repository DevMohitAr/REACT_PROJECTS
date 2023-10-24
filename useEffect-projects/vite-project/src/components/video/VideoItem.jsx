import React from "react";
import { useGlobalContext } from "./VideoContext";
export const VideoItem = ({ videoId, title, poster, src }) => {
  const { playingVideoId, setPlayingVideoId } = useGlobalContext();

  const videoIsActive = playingVideoId === videoId;
  const videoRef = React.useRef();
  const handleTogglePlay = () => {
    if (!videoIsActive) {
      setPlayingVideoId(videoId);
    } else {
      setPlayingVideoId(null);
    }
  };
  React.useEffect(() => {
    if (videoIsActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [videoIsActive]);

  return (
    <li>
      <h3>{title}</h3>
      <article>
        <video poster={poster} ref={videoRef}>
          <source src={src} type="video/mp4" />
        </video>
        <button
          title={videoIsActive ? "Pause" : "Play"}
          onClick={handleTogglePlay}
        >
          {videoIsActive ? "⏸" : "▶"}
        </button>
      </article>
    </li>
  );
};
