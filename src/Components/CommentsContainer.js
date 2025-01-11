import React from "react";
import Comment from "./Comment";
import commentsData from "../utils/mockData";

const CommentLists = ({ data }) => {
  return data.map((comment, index) => (
    <div>
      {/*Using index as key just we dont have unique key.*/}
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentLists data={comment.replies} />{" "}
        {/*This is component recursion, I have created N lavel nesting here*/}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentLists data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
