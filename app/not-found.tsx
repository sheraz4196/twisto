import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center p-2 text-center md:p-4 lg:p-8">
      <div className="grid place-items-center gap-4 lg:max-w-xl lg:gap-8">
        <Image
          src={'/404.jpg'}
          alt="Error Alien Spaceship"
          className="h-auto w-auto"
          width={312}
          height={160}
        />
        <div className="flex flex-col gap-4 text-zinc-700 lg:gap-8">
          <h3 className="text-5xl font-semibold tracking-tight lg:text-6xl">Page Not Found</h3>
          <p className="text-sm lg:text-base">
            The page you are looking for might have been removed had its name changed or is
            temporarily unavailable.
          </p>
          <Link href={'/'}>
            <Button>Home Page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
