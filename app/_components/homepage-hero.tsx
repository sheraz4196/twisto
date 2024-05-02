import { Button } from '@/components/ui/button';
import { sendSubscriberData } from '@/lib/send-email';
export default function HomePageHero() {
  const send = async () => {
    'use server';
    console.log('called');
    await sendSubscriberData({
      email: 'sheraz.dev121@gmail.com',
      subject: 'New Email',
      text: 'Mail received',
    });
  };
  return (
    <form className="flex items-center justify-center bg-primary-600/50 text-center text-zinc-700">
      <div className="grid h-screen place-items-center border-x-2 border-zinc-700 px-2 md:px-4 lg:px-8">
        <div className="lg:max-w-3xl">
          <div className="flex flex-col gap-4 lg:gap-8">
            <p className="text-xs font-medium lg:text-sm">Community awaits you</p>
            <h1 className="text-5xl font-semibold tracking-tight lg:text-6xl">
              Activate Your Message Community
            </h1>
            <p className="text-sm lg:text-base">
              Physiological respiration involves the mechanisms that ensure that the composition of
              the functional residual capacity is kept constant, and equilibrates with the gases
              dissolved in the pulmonary capillary blood, and thus throughout the body.
            </p>
            <Button type="submit" className="bg-accent-700 hover:bg-green-500" formAction={send}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
