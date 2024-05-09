'use client';
import { forwardRef } from 'react';

const Pedro = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className="col-span-2 flex" id="classic-one" ref={ref}>
      {/* New Template Goes here */}
    </section>
  );
});
Pedro.displayName = 'Pedro';
export default Pedro;
