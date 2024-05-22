'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useCountryStore from '@/stores/cv/country-store';
import { CountriesData } from '@/types/types';
import Image from 'next/image';
import { Fragment } from 'react';
import { Button } from '../ui/button';
type Props = {
  countries: CountriesData[];
};
export default function CountryDropDown({ countries }: Props) {
  const { selectedCountry, setSelectedCountry } = useCountryStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-72">
        <Button className="flex items-center gap-4">
          <Image
            src={selectedCountry?.flags.svg || ''}
            alt={selectedCountry?.flags.alt || ''}
            width={32}
            height={32}
            className="h-auto max-h-12 w-auto max-w-12"
          />
          <p>{selectedCountry?.name.common}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-96 w-72 overflow-y-auto">
        {countries.map((country, index) => (
          <Fragment key={country.cca2}>
            {index <= countries.length - 1 && index !== 0 && <DropdownMenuSeparator />}
            <DropdownMenuItem
              onSelect={() => setSelectedCountry(country)}
              className="flex items-center gap-4"
            >
              <Image
                src={country.flags.svg}
                alt={country.flags.alt}
                width={20}
                height={20}
                className="h-auto max-h-12 w-auto max-w-12"
              />

              <p>{country.name.common}</p>
            </DropdownMenuItem>
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
