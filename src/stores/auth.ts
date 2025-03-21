import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type userType = {
  email: string;
  password: string;
};
interface IStore {
  profileData: Record<string, any> | null;
  userLogin: userType | null;
  addProfileData: (value: Record<string, any> | null) => void;
  addUserLogin: (value: userType) => void;
  removeUserData: () => void;
}

export const useAuthStore = create<IStore>()(
  persist(
    (set) => ({
      profileData: null,
      userLogin: null,
      addUserLogin: (value) => set(() => ({ userLogin: value })),
      addProfileData: (value) => set(() => ({ profileData: value })),
      removeUserData: () => set(() => ({ userLogin: null })),
    }),
    {
      name: "profile-data",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
