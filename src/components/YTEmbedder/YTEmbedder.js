import YouTube from "react-youtube";

function YTEmbedder({ videoId, isResizing = false, isDragging = false, className, ...props }) {
  const options = {
    height: "100%",
    width: "99.9%",
    frameBorder: "0",
    playerVars: {
      autoplay: 1,
      mute: 1,
      modestbranding: 1,
      enablejsapi: 1,
    },
  };

  return (
    <YouTube
      className="min-h-inherit rounded-t"
      containerClassName={`${className}`}
      opts={options}
      videoId={videoId}
      id={videoId}
    />
  );
}

export default YTEmbedder;
