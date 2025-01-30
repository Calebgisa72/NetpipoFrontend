import React from "react";
import SideNavLink from "./SideNavLink";
import { useDispatch } from "react-redux";
import { setviewMenuBar } from "../Redux/Reducers/appReducer";
import {
  Bookmark,
  Flame,
  Globe,
  House,
  ListMusic,
  Settings,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (location: string) => {
    navigate(`${location}`);
    dispatch(setviewMenuBar(false));
  };
  return (
    <div className="py-10 flex flex-col items-center w-[11.5rem] h-full bg-foreground shadow-xl shadow-[#A1FF00]/40">
      <h1 className="text-2xl italic mb-10 text-primary">NetPipo</h1>
      <div className="flex flex-col gap-4">
        <SideNavLink
          onClick={() => handleNavigate("/home")}
          to="/home"
          name="Home"
        >
          <House
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink
          onClick={() => handleNavigate("/home")}
          to="/browse"
          name="Browse"
        >
          <Globe
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink
          onClick={() => handleNavigate("/trending")}
          to="/trending"
          name="Trending"
        >
          <Flame
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink
          onClick={() => handleNavigate("/saved")}
          to="/saved"
          name="Saved"
        >
          <Bookmark
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink
          onClick={() => handleNavigate("/playlist")}
          to="/playlist"
          name="Playlist"
        >
          <ListMusic
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
      </div>
      <div className="mt-auto flex flex-col gap-4">
        <SideNavLink
          onClick={() => handleNavigate("/settings")}
          to="/settings"
          name="Settings"
        >
          <Settings
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
        <SideNavLink
          onClick={() => handleNavigate("/profile")}
          to="/profile"
          name="My Profile"
        >
          <User
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
          />
        </SideNavLink>
      </div>
    </div>
  );
};

export default Sidebar;
