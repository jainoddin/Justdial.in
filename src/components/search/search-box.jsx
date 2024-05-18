import "./search-box.css";
import { useState } from "react";
import { InputBox } from "../inputBox/inputBox";
import video from '../assets/videos.mp4'

export const Search = () => {
  const [search, setSearch] = useState(false);

  const changeSearch = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 250) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  };

  window.addEventListener("scroll", changeSearch);

  return (
    <div className="search-box">    
      <video src={video} autoPlay loop muted></video>
      <div className="search-main">
        <div className="headline">
          <h1>Find your place for together</h1>
        </div>
        <div className={search ? "search-box-main active" : "search-box-main"}>
          <div className="serach-input-middle">
            <InputBox></InputBox>
          </div>
        </div>
      </div>
    </div>
  );
};
