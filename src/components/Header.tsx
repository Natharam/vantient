import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { RootState } from "../store/store";

function Header() {
  const { user, isLoggedIn } = useAppSelector((state: RootState) => state.user);
  
  return (
    <header className="flex w-full items-center bg-white px-6">
      <div className="w-full">
        <div className="relative -mx-4 flex items-center justify-between w-full">
          <div className="w-full max-w-full px-4 text-left">
            <Link to="/">
              <div className="block py-5 whitespace-nowrap w-max">Vantient’s Brands Listing</div>
            </Link>
          </div>
          <div className="flex w-full items-center justify-end px-4">
            <div className="text-dark hover:text-primary flex py-2 text-base lg:ml-12 flex justify-center items-center cursor-pointer">
              <FaSearch /> <div className="ml-2">Search</div>
            </div>
            <div className="text-dark hover:text-primary flex py-2 text-base lg:ml-12 lg:inline-flex cursor-pointer">
              Duplicate ... |
            </div>
          </div>
          <div className="hidden flex justify-end pr-16 sm:flex lg:pr-0">
            {!isLoggedIn ? (
              <Link to="/subscribe" className="text-dark hover:text-primary py-3 text-base font-medium">
                Subscribe
              </Link>
            ) : (
              <div className="text-dark hover:text-primary py-3 text-base font-medium">
                {JSON.stringify(user)}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
