import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function CVGenerator() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-2 p-2 text-center text-zinc-700 md:gap-4 md:p-4 lg:max-w-5xl lg:gap-8 lg:p-8">
        <h1 className="text-xl font-bold md:text-3xl lg:text-6xl">
          Craft Your <span className="text-primary-600">Perfect CV,</span>
          Step by Step
        </h1>
        <p className="text-xs text-zinc-700 sm:text-sm lg:text-base">
          Crafting a standout CV has never been easier! Follow these simple steps to create a
          compelling and job-winning resume tailored to your skills and experience. Whether
          you&apos;re a seasoned professional or just starting your career journey, our step-by-step
          guide will help you showcase your strengths and land your dream job.
        </p>
        <div className="flex items-center justify-center gap-4 font-semibold">
          <Button className="flex items-center gap-4">
            <p>Let&apos;s Craft Your CV</p>
            <ArrowRight className="h-4 w-4 text-current" />
          </Button>
          <Link href={'/'}>
            <Button variant={'destructive'}>Back To Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
