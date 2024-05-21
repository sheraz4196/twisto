'use client';
import { forwardRef } from 'react';
import Image from 'next/image';
import useCVThemeStore from '@/stores/cv/cv-theme-store';
const MonochromeMajesty = forwardRef<HTMLDivElement>((props, ref) => {
  const { cvTheme } = useCVThemeStore();
  return (
    <section
      className={`${cvTheme === 'Azure-Aura' ? 'theme-Azure-Aura' : ''}
       ${cvTheme === 'Crimson-Crest' ? 'theme-Crimson-Crest' : ''} 
       ${cvTheme === 'Indigo-Influence' ? 'theme-Indigo-Influence' : ''}
       ${cvTheme === 'Sapphire-Spectra' ? 'theme-Sapphire-Spectra' : ''}
       ${cvTheme === 'Emerald-Eclipse' ? 'theme-Emerald-Eclipse' : ''}
       ${cvTheme === 'Ruby-Radiance' ? 'theme-Ruby-Radiance' : ''}
       ${cvTheme === 'Topaz-Terra' ? 'theme-Topaz-Terra' : ''}
       ${cvTheme === 'Opal-Oasis' ? 'theme-Opal-Oasis' : ''}
       ${cvTheme === 'Graphite-Glimmer' ? 'theme-Graphite-Glimmer' : ''}
       ${cvTheme === 'Amber-Aether' ? 'theme-Amber-Aether' : ''}
       col-span-2 flex flex-col items-center justify-center`}
      id="monochrome-majesty"
      ref={ref}
    >
      <div className="bg-skin-fill text-skin-base flex flex-col p-6 lg:p-8">
        <div className="border-skin-lines  flex flex-row items-start justify-between border-b-2 border-solid pb-8">
          <div className="flex flex-row items-center gap-6">
            <div className="rounded-full">
              <Image src={'/client.jpg'} width={150} height={150} alt={`client-image`} />
            </div>
            <div>
              <h1 className="text-xl font-semibold lg:text-3xl">John Doe</h1>
              <p className="text-sm font-semibold lg:text-lg">Frontend Developer at Twitter</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs lg:gap-2 lg:text-base">
            <p>21/A John Avenue, 3rd street near Alfa Mall</p>
            <p>Johndoe@gmail.com</p>
            <p>www.johndoe.com</p>
          </div>
        </div>
        <div className="col-span-3 flex flex-row">
          <div className="p-8"></div>
          <div className="border-skin-lines flex flex-col gap-10 border-l-2 border-r-2 border-solid p-8 pb-12">
            <div>
              <p className="text-xl font-semibold lg:text-2xl">Education</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold lg:text-lg">University of The Edinburg</p>
              <p>Degree / minor/ program</p>
              <p>Years attended</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-lg font-semibold lg:text-2xl">
                <p>Work Experiences</p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex grid-cols-3 flex-col gap-3 lg:grid lg:gap-0">
                  <div>
                    <p className="text-base font-semibold lg:text-xl">Twitter HQ</p>
                    <p>2025-2030</p>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    <div className="text-base font-semibold lg:text-xl">Frontend Developer</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu feugiat
                      turpis viverra. Vivamus odio ornare adipiscing convallis odio eget amet id
                      mus. Sit quam quis fermentum viverra viverra purus arcu odio. Sed dignissim
                      vel tristique pharetra quis luctus.
                    </div>
                  </div>
                </div>
                <div className="flex grid-cols-3 flex-col gap-3 lg:grid lg:gap-0">
                  <div>
                    <p className="text-base font-semibold lg:text-xl">Twitter HQ</p>
                    <p>2025-2030</p>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    <div className="text-base font-semibold lg:text-xl">Frontend Developer</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu feugiat
                      turpis viverra. Vivamus odio ornare adipiscing convallis odio eget amet id
                      mus. Sit quam quis fermentum viverra viverra purus arcu odio. Sed dignissim
                      vel tristique pharetra quis luctus.
                    </div>
                  </div>
                </div>
                <div className="flex grid-cols-3 flex-col gap-3 lg:grid lg:gap-0">
                  <div>
                    <p className="text-base font-semibold lg:text-xl">Twitter HQ</p>
                    <p>2025-2030</p>
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    <div className="text-base font-semibold lg:text-xl">Frontend Developer</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu feugiat
                      turpis viverra. Vivamus odio ornare adipiscing convallis odio eget amet id
                      mus. Sit quam quis fermentum viverra viverra purus arcu odio. Sed dignissim
                      vel tristique pharetra quis luctus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-semibold lg:text-2xl">Contact</div>
              <div className="flex flex-col gap-2">
                <div className="flex">
                  <span className="font-semibold">Email:</span> johndoe@gmail.com
                </div>
                <div className="flex">
                  <span className="font-semibold">Portfolio:</span> johndoe.com
                </div>
                <div className="flex">
                  <span className="font-semibold">LinkedIn:</span> John Doe
                </div>
                <div className="flex">
                  <span className="font-semibold">Twitter:</span> @johndoe
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-semibold lg:text-2xl">Skills</div>
              <div className="pl-5">
                <ul className="list-disc">
                  <li>Graphic Design</li>
                  <li>UI Design</li>
                  <li>Prototyping</li>
                  <li>Userbility Testing</li>
                  <li>e.t.c</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl font-semibold lg:text-2xl">Tools </div>
              <div className="pl-5">
                <ul className="list-disc">
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Indesign</li>
                  <li>Vscode</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl font-semibold lg:text-2xl">Technologies </div>
              <div className="pl-5">
                <ul className="list-disc">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl font-semibold lg:text-2xl">Achievement</div>
              <div className="pl-5">
                <ul className="list-disc">
                  <li>Runner Up in 2020 Hashnode Hackathon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-skin-lines relative -top-6 border-b-2 border-solid"></div>
      </div>
    </section>
  );
});
MonochromeMajesty.displayName = 'MonochromeMajesty';
export default MonochromeMajesty;
