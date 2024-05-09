'use client';
import useCVFormStore from '@/stores/cv-form-data-store';
import { forwardRef } from 'react';

const Pedro = forwardRef<HTMLDivElement>((props, ref) => {
  const { cvFormData } = useCVFormStore();
  console.log(cvFormData);
  return (
    <section className="col-span-2 flex justify-center" id="classic-one" ref={ref}>
      <div className="flex flex-row justify-center  gap-6 border-t-4 border-solid  border-black p-8 text-start lg:gap-10">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold lg:text-4xl">Your Name</h1>
            <p className="text-xl font-semibold lg:text-2xl">Senior Product Designer</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="tracking-widest text-zinc-700">EXPERIENCE</div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-bold lg:text-lg">Senior UI/UX Product Designer</p>
                <p>Enterprise name</p>
                <p className="text-zinc-500">Aug 2018 - Present - 1 year, Paris</p>
                <p>
                  Directly collaborated with CEO and Product team to prototype, design and deliver
                  the UI and UX experience with a lean design process: research, design, test, and
                  iterate.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold lg:text-lg">UI/UX Product Designer</p>
                <p>Enterprise name</p>
                <p className="text-zinc-500">Aug 2013 - Aug 2018 - 5 years, Paris</p>
                <p>
                  Lead the UI design with the accountability of the design system, collaborated with
                  product and development teams on core projects to improve product interfaces and
                  experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold lg:text-lg">UI Designer</p>
                <p>Enterprise name</p>
                <p className="text-zinc-500">Aug 2012 - jul 2013 - 1 year, Paris</p>
                <p>
                  Designed mobile UI applications for Orange R&D departement, BNP Paribas, La Poste,
                  Le Cned...
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold lg:text-lg">Graphic Designer</p>
                <p>Enterprise name</p>
                <p className="text-zinc-500">Sept 2010 - jul 2012 - 2 years, Paris</p>
                <p>
                  Designed print and web applications for Pau Brasil, Renault,Le théatre du Mantois,
                  La mairie de Mantes la Ville...
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="uppercase tracking-widest text-zinc-700">education</p>
                </div>
                <div>
                  <p className="font-bold lg:text-lg">Bachelor European in Graphic Design</p>
                  <p>School name</p>
                  <p className="text-zinc-500">2009 - 2010, Bagnolet</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold lg:text-lg">BTS Communication Visuelle option Multimédia</p>
                <p>School name</p>
                <p className="text-zinc-500">2007 - 2009, Bagnolet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10">
          <div>
            <img src="/client.jpg" alt="" className="" />
          </div>
          <div className="flex flex-col gap-6 text-zinc-700 lg:gap-8">
            <div>
              <p>yourmail@gmail.com</p>
              <p>+33 6 33 33 33 33</p>
              <p>Vernouillet</p>
            </div>
            <div>
              <p className="font-bold">Industry Knowledge</p>
              <p>Product Design</p>
              <p>User Interface</p>
              <p>User Experience</p>
              <p>Interaction Design</p>
              <p>Wireframing</p>
              <p>Rapid Prototyping</p>
              <p>Design Research</p>
            </div>
            <div>
              <p className="font-bold">Tools & Technologies</p>
              <p>
                Figma, Sketch, Protopie, Framer, Invision, Abstract, Zeplin, Google Analytics,
                Amplitude, Fullstory...
              </p>
            </div>
            <div>
              <p className="font-bold">Other Skills</p>
              <p>HTML, CSS, jQuery</p>
            </div>
            <div>
              <p className="font-bold">Languages</p>
              <p>French (native)</p>
              <p>English (professionnal)</p>
            </div>
            <div>
              <p className="font-bold">Social</p>
              <p>yoursite.com</p>
              <p>linkedin.com/in/yourname</p>
              <p>dribbble.com/yourname</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Pedro.displayName = 'Pedro';
export default Pedro;
