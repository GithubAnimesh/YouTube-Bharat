import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="py-2 px-5 m-2 rounded-lg bg-slate-200">{name}</button>
    </div>
  );
};

export default Button;
