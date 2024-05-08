import { getAllCountries } from '@/lib/countries-data';
import HomePageHero from './_components/homepage-hero';
import Testimonials from './_components/testimonials';
export default async function Home() {
  const countries = await getAllCountries();
  return (
    <div className="bg-primary-50">
      <HomePageHero />
      <Testimonials />
    </div>
  );
}
