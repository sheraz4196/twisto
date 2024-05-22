import CountrySelect from '@/components/general/country-selector';
import { sendSubscriberData } from '@/lib/send-email';

export default async function Intro() {
  const response = sendSubscriberData({
    subject: 'Test Mail',
    email: 'sheraz.dev121@gmail.com',
    text: 'Hello There',
    html: `<h4 className='text-7xl text-red-400'>Hello</h4>`,
  });
  return (
    <section>
      <CountrySelect />
    </section>
  );
}
