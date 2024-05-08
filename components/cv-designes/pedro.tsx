'use client';
import useCVFormStore from '@/stores/cv-form-data-store';
import { forwardRef } from 'react';

const Pedro = forwardRef<HTMLDivElement>((props, ref) => {
  const { cvFormData } = useCVFormStore();
  console.log(cvFormData);
  return (
    <section className="col-span-2 flex" id="classic-one" ref={ref}>
      {/* New Template Goes here */}
    </section>
  );
});
Pedro.displayName = 'Pedro';
export default Pedro;
