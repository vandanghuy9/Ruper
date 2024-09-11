"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@context/UserContext";
import { handleLogout } from "../../authentication/handleAuth";
import { useRouter } from "next/navigation";
import { successNoti } from "@utils/notification/notification";
const tabs = [
  {
    id: "Dashboard",
    text: "Dashboard",
    href: "/user/dashboard",
  },
  {
    id: "Orders",
    text: "Orders",
    href: "/user/orders",
  },
  {
    id: "Addresses",
    text: "Addresses",
    href: "/user/addresses",
  },
  {
    id: "account",
    text: "Account details",
    href: "/user/account",
  },
];

const Navbar = () => {
  const { logout } = useAuth();
  const onLogout = async () => {
    logout();
  };
  return (
    <nav className="my-account-navigation">
      <ul className="nav nav-tabs">
        {tabs.map(({ id, text, href }) => (
          <li key={id}>
            <Link className="nav-link active" href={href} role="tab">
              {text}
            </Link>
          </li>
        ))}
        <li>
          <button
            type="button"
            role="tab"
            className="button button-white"
            onClick={onLogout}
          >
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
