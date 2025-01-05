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
  ];
  return (
    <div className="flex justify-center">
      {lists.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
