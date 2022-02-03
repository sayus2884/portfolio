import { forwardRef } from "react";
import YouTube from "react-youtube";

function YTEmbedder(
  {
    videoId,
    isResizing = false,
    isDragging = false,
    className,
    containerClassName,
    index,
    onReady,
    ...props
  },
  ref,
) {
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
      onReady={onReady}
      className={`${className} min-h-inherit rounded-sm`}
      containerClassName={`${containerClassName}`}
      opts={options}
      videoId={videoId}
      id={videoId}
    />
  );
}

export default forwardRef(YTEmbedder);
