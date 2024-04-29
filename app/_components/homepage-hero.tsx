import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
export default function HomePageHero() {
  return (
    <div className="flex h-screen items-center justify-center bg-primary-600/50 p-4 text-center md:p-6 lg:p-8">
      <div className="grid h-screen place-items-center border-x-2 border-black sm:px-4 md:px-8 lg:px-20">
        <div className="sm:max-w-xl lg:max-w-3xl">
          <div className="flex flex-col gap-4 text-zinc-700 lg:gap-8">
            <p>Community awaits you</p>
            <h3 className="text-5xl font-semibold tracking-tight sm:px-10 lg:px-20 lg:text-6xl">
              Activate Your Message Community
            </h3>
            <p className="text-sm lg:text-base">
              Physiological respiration involves the mechanisms that ensure that the composition of
              the functional residual capacity is kept constant, and equilibrates with the gases
              dissolved in the pulmonary capillary blood, and thus throughout the body.
            </p>
            <Link href={'/'}>
              <Button className="bg-accent-700 hover:bg-green-500">Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
