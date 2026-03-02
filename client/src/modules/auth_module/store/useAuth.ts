import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: string;
  branch: string;
};

type authState = {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
};
export const useAuthStore = create<authState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setAuth: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
    }),
    { name: "kickslogix-storage" },
  ),
);
