import { create } from "zustand";

type State = {
  isSidebarOpen: boolean;
  isHovered: boolean;
};

type Action = {
  toggleSidebar: () => void;
  setHoverState: (isHovered: boolean) => void;
};
export const useLayoutStore = create<State & Action>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isHovered: false,
  setHoverState: (isHovered) => set({ isHovered }),
}));
