import React from "react";

const VideoCart = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className="m-2 p-2 w-72 rounded-lg shadow-lg cursor-pointer">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="py-2">
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCart;
