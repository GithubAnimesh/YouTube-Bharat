import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const lists = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Valentines",
    "Technology",
    "Travel",
    "Education",
    "Sports",
    "Science",
  ];
  return (
    <div className="flex justify-center">
      {lists.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
