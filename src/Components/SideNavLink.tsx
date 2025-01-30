import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  name?: string;
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export default function SideNavLink({
  to,
  onClick,
  children,
  name,
  className = "",
  ...props
}: Props) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) =>
        `relative flex items-center gap-10 w-[9rem] h-10 rounded-lg px-4 transition-all
         ${
           isActive
             ? "bg-primary/10 text-primary font-medium"
             : "text-muted hover:bg-gray-800"
         }`
      }
      {...props}
    >
      <div
        className={`absolute left-0 h-full w-[4px] rounded-r-full transition-all ${
          to === window.location.pathname ? "bg-primary" : "bg-transparent"
        }`}
      ></div>

      <div className="flex ml-1 items-center gap-3">
        {children}
        {name && <span className="cursor-pointer">{name}</span>}
      </div>
    </NavLink>
  );
}
