import { Icon } from "@iconify/react";

const MenuTitle = ({ isFolded }: { isFolded: boolean }) => {
  return (
    <h1
      className={
        "text-teal-50 font-extrabold text-xl flex mb-10 " +
        (isFolded ? "justify-center" : "justify-start")
      }
    >
      <Icon icon="solar:moon-bold" width="30" height="30" />
      {!isFolded && "Moonshot"}
    </h1>
  );
};

export default MenuTitle;
