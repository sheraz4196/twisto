import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ToolkitHero() {
  return (
    <section className="background-one flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 p-2 text-center text-zinc-700 md:gap-4 md:p-4 lg:max-w-5xl lg:gap-8 lg:p-8">
        <h1 className="text-xl font-bold md:text-3xl lg:text-6xl">
          Your <span className="text-primary-600">Professional Toolkit</span> is here.
        </h1>
        <p className="text-xs text-zinc-700 sm:text-sm lg:text-base">
          Welcome to your ultimate business toolkit! Whether you&apos;re aiming to grow your
          business, land your dream job, or create professional business receipts, you&apos;ve come
          to the right place. Our comprehensive suite of tools empowers you to generate stunning
          CVs, design eye-catching business cards, and produce polished receipts effortlessly.
          Let&apos;s elevate your professional image and streamline your workflow together. Explore
          our toolkit and take the next step towards success!
        </p>
        <div className="flex items-center justify-center gap-4 font-semibold">
          <Link href={'/toolkit/intro'}>
            <Button className="flex items-center gap-4">
              <p>Get Started</p>
              <ArrowRight className="h-4 w-4 text-current" />
            </Button>
          </Link>
          <Link href={'/about'}>
            <Button variant={'destructive'}>Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
