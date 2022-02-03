import YouTube from "react-youtube";

function YTEmbedder({
  videoId,
  isResizing = false,
  isDragging = false,
  className,
  containerClassName,
  ...props
}) {
  const options = {
    height: "100%",
    width: "100%",
    frameBorder: "0",
    playerVars: {
      mute: 1,
      modestbranding: 1,
      enablejsapi: 1,
    },
  };

  return (
    <YouTube
      className={`${className} min-h-inherit rounded-sm`}
      containerClassName={`${containerClassName}`}
      opts={options}
      videoId={videoId}
      id={videoId}
    />
  );
}

export default YTEmbedder;
