import YouTube from "react-youtube";

function YTEmbedder({ videoId, isResizing = false, isDragging = false, className, ...props }) {
  const options = {
    height: "100%",
    width: "100%",
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
      className="min-h-inherit"
      containerClassName={`${className} h-full w-full`}
      opts={options}
      videoId={videoId}
      id={videoId}
    />
  );
}

export default YTEmbedder;
