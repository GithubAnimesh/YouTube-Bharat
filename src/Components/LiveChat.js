import React, { useEffect, useState } from "react";
import ChatMassage from "./ChatMassage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomName } from "../utils/mockData";
import { getRandomComment } from "../utils/mockData";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomComment(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full h-[500px] border ml-2 p-2 border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMassage key={index} name={c.name} massage={c.message} />
        ))}
      </div>
      <form
        className="border border-black w-full ml-2 p-2"
        onSubmit={(e) => {
          console.log("API called", liveMessage);
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Animesh",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="mx-3"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-cyan-300 rounded-sm p-1">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
