import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RiSearch2Line } from "react-icons/ri";
import { setSearch } from "../Redux/Reducers/appReducer";

const Navbar = () => {
  const [serchItem, setSerchItem] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!serchItem.trim()) return;
    dispatch(setSearch(serchItem));
    setSerchItem("");
  };

  return (
    <div className="w-full h-16 px-6 flex items-center justify-end">
      <div
        data-testid="search-bar"
        className="w-[18.75rem] bg-muted text-foreground h-[2.25rem] flex px-[0.25rem] overflow-hidden rounded-[0.5rem]"
      >
        <input
          type="text"
          placeholder="Search"
          value={serchItem}
          onChange={(e) => setSerchItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-[90%] bg-muted h-full outline-none py-2 pr-[0.5rem] pl-[0.375rem]"
          data-testid="search-input"
        />
        <div className="h-full flex items-center justify-center">
          <RiSearch2Line
            onClick={handleSearch}
            size={1.3125 * 16}
            className="text-background-dark hover:text-primary cursor-pointer"
            data-testid="search-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
