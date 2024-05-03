'use client';
import useCVFormStore from '@/stores/cv-form-data-store';
import Image from 'next/image';

export default function ClassicOne() {
  const { cvFormData } = useCVFormStore();
  console.log(cvFormData);
  return (
    <section className="grid grid-cols-5">
      <div className="col-span-2 flex flex-col gap-4 bg-slate-800 px-2 py-4 text-zinc-100 lg:gap-8 lg:p-8 lg:px-4">
        <div className="flex items-center justify-center">
          <Image
            className="h-auto w-auto"
            src={'/client.jpg'}
            width={150}
            height={150}
            alt={`${cvFormData.firstName} ${cvFormData.lastName} Photo`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold lg:text-3xl">Contact</h3>
          <div className="h-1 w-16 bg-zinc-100" />
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Phone:</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.phoneNumber}</p>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
    </section>
  );
}
