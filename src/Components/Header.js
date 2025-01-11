import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchSuggetion, setSearchSuggetion] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[inputValue]) {
        getSearchSuggetion(searchCache[inputValue]);
      } else {
        getSearchSuggetion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const getSearchSuggetion = async () => {
    if (!inputValue) return;
    const data = await fetch(YOTUBE_SEARCH_API + inputValue);
    const json = await data.json();
    setSearchSuggetion(json[1]);
    dispatch(cacheResults({ [inputValue]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      {/* Left Section - Logo and Menu Icon */}
      <div className="flex col-span-1 items-center">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer md:h-10"
          alt="hamburger"
          src="https://banner2.cleanpng.com/20180628/zaz/aayj9bx5v.webp"
        />
        <a href="/" className="ml-3">
          <img
            className="h-8 md:h-10"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>

      {/* Center Section - Search Bar */}
      <div className="col-span-10 px-4 md:px-10">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setShowSuggetion(true)}
            onBlur={() => setShowSuggetion(false)}
            placeholder="Search"
            className="w-full md:w-2/3 lg:w-1/2 border-gray-100 px-4 py-2 border rounded-l-full focus:outline-none"
          />
          <button className="bg-gray-100 px-3 py-2 border rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggetion && (
          <div className="absolute bg-white p-2 w-full md:w-2/3 lg:w-1/2 mt-1 shadow-lg rounded-lg z-10">
            <ul>
              {searchSuggetion.map((text, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Section - User Icon */}
      <div className="col-span-1 flex justify-end items-center">
        <img
          className="h-8 w-8 md:h-10 md:w-10 object-cover antialiased"
          alt="user icon"
          src="data:image/jpeg;base64,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"
        />
      </div>
    </div>
  );
};

export default Header;
