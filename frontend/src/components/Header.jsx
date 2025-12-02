import React, { useEffect, useState } from "react";
import { IoIosCall, IoMdCart } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { FaFacebook, FaInstagram, FaUser, FaHeart } from "react-icons/fa";
import API from "../utils/api";
import { Link } from "react-router-dom";

const Header = () => {
  const [site, setSite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    API.get("/site")
      .then((res) => {
        if (!mounted) return setSite(res.data);
      })
      .catch((e) => {
        console.log("Header fetch error", e);
        if (mounted) setError("Unable to load site info");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <div className="hidden md:flex justify-between items-center p-1">
        <div className="flex items-center gap-4 p-2">
          <p className="flex items-center gap-2 text-sm">
            <span>
              <IoIosCall />
            </span>
            {site?.phone}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <span>
              <FaLocationDot />
            </span>
            {site?.address}
          </p>
        </div>

        <div className="flex items-center gap-4 p-2">
          <IoIosColorPalette
            size={20}
            className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer"
          />
          <FaFacebook
            size={20}
            className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer"
          />
          <FaInstagram
            size={20}
            className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer"
          />
          <FaXTwitter
            size={20}
            className="text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer"
          />
        </div>
      </div>

      <div className="flex justify-between items-center bg-primary md:mx-2 p-4 md:rounded-xl">
        <div className="flex items-center gap-3">
          <span className="px-2 py-4 font-extrabold text-secondary text-2xl md:text-3xl tracking-widest">
            Buyzo
          </span>
        </div>

        <nav className="flex gap-4 text-bg">
          {site?.menus.map((m) => (
            <Link key={m.id} to={m.path}>
              {m.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative flex items-center bg-secondary p-2 rounded-full">
            <IoMdCart size={22} className="text-accent" />
            <span className="-top-2 -right-2 absolute flex justify-center items-center bg-accent px-2 py-0.5 rounded-full min-w-5 min-h-5 font-bold text-bg text-xs">
              0
            </span>
          </div>
          <div className="relative flex items-center bg-gray-100 p-2 rounded-full">
            <FaHeart size={20} className="text-accent" />
            <span className="-top-2 -right-2 absolute flex justify-center items-center bg-accent px-2 py-0.5 rounded-full min-w-5 min-h-5 font-bold text-bg text-xs">
              0
            </span>
          </div>
          <div className="bg-gray-100 p-2 rounded-full">
            <FaUser size={20} className="text-accent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
