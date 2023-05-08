import { useLayoutStore } from "@/store/layout-store";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";
import styles from "./menu-item.module.css";

interface Props {
  children: React.ReactNode;
  isActive?: boolean;
  isFolded?: boolean;
  href: string;
  icon?: string;
}
const MenuItem = ({ children, ...props }: Props) => {
  return (
    <Link
      href={props.href}
      className={
        "text-teal-50 font-bold rounded p-4 mb-2 flex flex-row items-center justify-start" +
        (props.isActive
          ? "bg-black bg-opacity-20"
          : "bg-transparent hover:bg-black hover:bg-opacity-10 " +
            styles.menuItem)
      }
    >
      {props.icon && <Icon icon={props.icon} />}
      {!props.isFolded && (
        <span className={props.icon && "ml-1"}>{children}</span>
      )}
    </Link>
  );
};

export default MenuItem;
