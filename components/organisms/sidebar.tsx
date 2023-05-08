"use client";

import Link from "next/link";
import Spacer from "../atomics/spacer";
import MenuItem from "../atomics/menu-item";
import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import MenuTitle from "../atomics/menu-title";
import { useLayoutStore } from "@/store/layout-store";

import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const { isSidebarOpen, isHovered, toggleSidebar, setHoverState } =
    useLayoutStore();
  const isFolded = useMemo(() => {
    return !isSidebarOpen && !isHovered;
  }, [isSidebarOpen, isHovered]);

  return (
    // make aesthetic sidebar that has menu "List", "Create", "Update", "Delete"
    <aside
      className={
        "flex flex-col justify-end items-stretch h-full bg-gradient-to-b from-slate-600 to-slate-400 p-4 relative " +
        (isSidebarOpen ? " w-60 " : " ") +
        (!isFolded && "fixed ") +
        styles.sidebar
      }
    >
      <button
        className={
          "absolute top-2 right-2 p-1 rounded bg-black bg-opacity-20 text-teal-50" +
          (isSidebarOpen ? " rotate-180" : " left-full ml-2")
        }
        onClick={() => toggleSidebar()}
      >
        <Icon
          icon="ic:round-keyboard-double-arrow-right"
          width="30"
          height="30"
        />
      </button>
      <MenuTitle isFolded={!isSidebarOpen} />
      <Spacer direction="vertical" />
      <ul
        onMouseEnter={() => !isSidebarOpen && setHoverState(true)}
        onMouseLeave={() => !isSidebarOpen && setHoverState(false)}
      >
        <MenuItem
          href="/"
          icon="material-symbols:space-dashboard-rounded"
          isFolded={isFolded}
        >
          Dashboard
        </MenuItem>
        <MenuItem
          href="/product"
          icon="heroicons:archive-box-20-solid"
          isFolded={isFolded}
        >
          Products
        </MenuItem>
      </ul>
    </aside>
  );
};
