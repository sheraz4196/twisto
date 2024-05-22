import { getAllCountries } from '@/lib/countries-data';
import { Button } from '../ui/button';
import CountryDropDown from './country-dropdown';
export default async function CountrySelect() {
  const Countries = await getAllCountries();
  return (
    <>
      {/* {Countries && <div className="text-7xl">{JSON.stringify(Countries)}</div>} */}
      <CountryDropDown countries={Countries} />
    </>
  );
}
