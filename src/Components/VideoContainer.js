import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCart from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCart key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
