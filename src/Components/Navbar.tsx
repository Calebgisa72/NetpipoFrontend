import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiSearch2Line } from "react-icons/ri";
import { setSearch, setviewMenuBar } from "../Redux/Reducers/appReducer";
import { ArrowLeft } from "lucide-react";
import { RootState } from "../Redux/store";
import { useNavigate } from "react-router-dom";
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [serchItem, setSerchItem] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tab, viewMenuBar } = useSelector((state: RootState) => state.app);
  const handleSearch = () => {
    if (!serchItem.trim()) return;
    dispatch(setSearch(serchItem));
    setSerchItem("");
  };

  return (
    <div className="w-full h-16 px-6 flex items-center justify-between gap-4">
      {tab && (
        <div className="hidden sz:flex gap-3 items-center justify-center">
          <ArrowLeft
            className="text-muted w-[21px] cursor-pointer"
            strokeWidth={1.7}
            onClick={() => {
              navigate(-1);
            }}
          />
          <p>{tab}</p>
        </div>
      )}
      <div
        onClick={() => dispatch(setviewMenuBar(!viewMenuBar))}
        data-testid="menu-icon"
        className="sm:py-1 flex sz:hidden py-[5px] px-1 sm:px-2 cursor-pointer items-center bg-background-dark rounded-[8px]"
      >
        <IoMenu size={25} className="text-description" />
      </div>
      <div
        data-testid="search-bar"
        className="ml-auto w-[18.75rem] bg-background-dark text-muted h-[2.25rem] flex px-[0.25rem] overflow-hidden rounded-[0.5rem]"
      >
        <input
          type="text"
          placeholder="Search"
          value={serchItem}
          onChange={(e) => setSerchItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-[90%] bg-background-dark h-full outline-none py-2 pr-[0.5rem] pl-[0.375rem]"
          data-testid="search-input"
        />
        <div className="h-full flex items-center justify-center">
          <RiSearch2Line
            onClick={handleSearch}
            size={1.3125 * 16}
            className="text-primary hover:text-background cursor-pointer"
            data-testid="search-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
