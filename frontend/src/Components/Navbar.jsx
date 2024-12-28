import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(0);

  const scrollTo = (scrollValue) => {
    window.scrollTo({
      top: scrollValue,
      behavior: "smooth",
    });
  };

  // Scroll to the specified position when the `scroll` state changes
  useEffect(() => {
    if (scroll !== 0) {
      scrollTo(scroll);
    }
  }, [scroll]);

  return (
    <div className="max-w-screen-2xl flex items-center justify-center container p-4 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-48 p-2 shadow"
          >
            <li>
              <a onClick={() => setScroll(600)}>Skills</a>
            </li>
            <li>
              <a onClick={() => setScroll(1350)}>Projects</a>
            </li>
            <li>
              <a onClick={() => setScroll(2200)}>Contact me</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <a onClick={() => setScroll(600)}>Skills</a>
          </li>
          <li>
            <a onClick={() => setScroll(1350)}>Projects</a>
          </li>
          <li>
            <a onClick={() => setScroll(2200)}>Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
