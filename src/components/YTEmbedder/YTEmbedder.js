import YouTube from "react-youtube";

function YTEmbedder({ videoId, isResizing = false, isDragging = false, className, ...props }) {
  const options = {
    height: "100%",
    width: "50%",
    frameBorder: "0",
    playerVars: {
      mute: 1,
      modestbranding: 1,
      enablejsapi: 1,
    },
  };

  return (
    <YouTube
      className="min-h-inherit"
      containerClassName={`${className}`}
      opts={options}
      videoId={videoId}
      id={videoId}
    />
  );
}

export default YTEmbedder;
