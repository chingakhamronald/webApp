import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IStore {
  profileData: Record<string, any> | null;
  addProfileData: (value: Record<string, any> | null) => void;
  removeProfileData: () => void;
}

export const useAuthStore = create<IStore>()(
  persist(
    (set) => ({
      profileData: null,
      addProfileData: (value) => set(() => ({ profileData: value })),
      removeProfileData: () => set(() => ({ profileData: null })),
    }),
    {
      name: "profile-data",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
