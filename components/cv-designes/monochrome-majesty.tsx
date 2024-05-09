'use client';
import { forwardRef } from 'react';

const MonochromeMajesty = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section className="col-span-2 flex" id="classic-one" ref={ref}>
      {/* New Template Goes here */}
    </section>
  );
});
MonochromeMajesty.displayName = 'MonochromeMajesty';
export default MonochromeMajesty;
