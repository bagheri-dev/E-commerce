import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";

const Header: React.FC = () => {
  return (
    <header className="bg-[#0B5351]">
      <div className="py-3 text-white container mx-auto">
        <div className="flex items-center justify-between mx-3">
          <div className="flex flex-col md:flex-row items-center gap-x-3">
            <img className="size-16" src="/images/logo.png" alt="E-Commerce" />
            <p className="font-bold sm:text-xl">E-Commerce</p>
          </div>
          <div>
            <nav>
              <ul className="flex items-center gap-x-3 sm:gap-x-10 sm:text-xl">
                <li>Home</li>
                <li className="flex items-center gap-x-1"><PiShoppingCartSimple className="size-7"/>Carts <span>0</span></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
