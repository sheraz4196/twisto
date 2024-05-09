import { create } from 'zustand';

interface CVThemeStore {
  cvTheme: string;
  setCVTheme: (theme: string) => void;
}

const useCVThemeStore = create<CVThemeStore>((set) => ({
  cvTheme: 'ClassicI',
  setCVTheme: (theme) => set({ cvTheme: theme }),
}));

export default useCVThemeStore;
