import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdClose } from "react-icons/md";

const Header = ({ sidebar, handleToggleSidebar }) => {
  return (
    <div className="border border-dark header">
      {sidebar ? (
        <MdClose
          className="header__menu"
          size={26}
          onClick={() => handleToggleSidebar()}
        />
      ) : (
        <FaBars
          className="header__menu"
          size={26}
          onClick={() => handleToggleSidebar()}
        />
      )}
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="logo"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src="/avatar.png" alt="avatar" className="header__avatar" />
      </div>
    </div>
  );
};

export default Header;
