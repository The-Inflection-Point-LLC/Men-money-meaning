import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeProps {
    videoId: string;
}

const Youtube = (props: YoutubeProps) => {
    const onPlayerReady: YouTubeProps["onReady"] = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    const opts: YouTubeProps["opts"] = {
        width: "100%",
        height: "400",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return <YouTube videoId={props.videoId} opts={opts} onReady={onPlayerReady} />;
};

export default Youtube;
