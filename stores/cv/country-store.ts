import { CountriesData } from '@/types/types';
import { create } from 'zustand';
type CountryStore = {
  selectedCountry: CountriesData | null;
  setSelectedCountry: (country: CountriesData) => void;
};
const useCountryStore = create<CountryStore>((set) => ({
  selectedCountry: null,
  setSelectedCountry: (country: CountriesData) => set({ selectedCountry: country }),
}));

export default useCountryStore;
