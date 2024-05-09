import { create } from 'zustand';

interface CVTemplateState {
  cvTemplate: string;
  setCVTemplate: (template: string) => void;
}

const useCVTemplateStore = create<CVTemplateState>((set) => ({
  cvTemplate: 'ClassicI',
  setCVTemplate: (template) => set({ cvTemplate: template }),
}));

export default useCVTemplateStore;
