import CountrySelect from '@/components/general/country-selector';
import { sendSubscriberData } from '@/lib/send-email';

export default async function Intro() {
  const response = sendSubscriberData({
    subject: 'Test Mail',
    email: 'sheraz.dev121@gmail.com',
    text: 'Hello There',
    html: `<h4 style="font-size: 3.75rem; color: #f87171;">Hello</h4>`,
  });

  return (
    <section>
      <CountrySelect />
    </section>
  );
}
