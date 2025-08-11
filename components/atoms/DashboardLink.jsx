"use client";
import Link from "next/link";
import { useState } from "react";

const DashboardLink = ({
  active = false,
  label = "Label",
  heroIcon,
  subMenu = [],
  route = "#",
  handleClick = () => {},
}) => {
  const [isSubMenOpen, setIsSubMenuOpen] = useState(false);

  // Dropdown toggle karne ke liye
  const toggleSubMenu = (e) => {
    if (subMenu.length > 0) {
      e.preventDefault(); // route pe click nahi hona jab dropdown toggle ho
      setIsSubMenuOpen((prevState) => !prevState);
    } else {
      handleClick();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <li className="flex w-full items-center justify-between">
        <Link
          href={route}
          onClick={toggleSubMenu}
          className={`${
            active ? "bg-darkyellow/90 text-light" : "bg-transparent text-dark"
          } flex w-full flex-row items-center justify-between rounded-md px-3 py-2.5 transition-all duration-200 hover:bg-lightyellow/10 hover:text-darkyellow`}
        >
          <span className="text-md flex items-center gap-1.5">
            <i className={`${heroIcon} ri-lg`}></i>
            <span className="font-medium capitalize">{label}</span>
          </span>

          {subMenu.length > 0 && (
            <span className="text-sm font-medium capitalize">
              <i
                className={`${
                  active ? "text-text" : ""
                } ${
                  isSubMenOpen ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"
                } ri-lg`}
              ></i>
            </span>
          )}
        </Link>
      </li>

     {subMenu.length > 0 && (
  <div className={`flex-col gap-1 ${isSubMenOpen ? "flex" : "hidden"}`}>
    {subMenu.map((item, index) => (
      <Link
        key={index}
        href={item.route}
        className="ms-4 flex w-[85%] flex-row items-center rounded-md px-1.5 py-2 bg-transparent text-dark font-medium transition-all duration-200 hover:bg-lightyellow/10 hover:text-darkyellow"
        onClick={() => setIsSubMenuOpen(false)}
      >
        <i className={`${item.icon} ri-lg font-light pr-2`}></i>
        <span className="text-sm font-medium capitalize">{item.label}</span>
      </Link>
    ))}
  </div>
)}

    </div>
  );
};

export default DashboardLink;
