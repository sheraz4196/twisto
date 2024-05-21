import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getAllCountries } from '@/lib/countries-data';
import Image from 'next/image';
export default async function CountrySelect() {
  const Countries = await getAllCountries();
  return (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        {Countries.map((country, index) => (
          <SelectItem value={country.cca2} key={index} className=" border-b border-zinc-500 p-1">
            <div className="flex items-center gap-2">
              <div className="h-48 w-48 overflow-hidden">
                <Image src={country.flags.svg} alt={country.flags.alt} width={50} height={50} />
              </div>
              <p className="font-semibold text-zinc-700">{country.name.common}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
