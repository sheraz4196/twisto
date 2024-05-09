'use client';
import useCVFormStore from '@/stores/cv/cv-form-data-store';
import Image from 'next/image';
import { forwardRef } from 'react';

const ClassicOne = forwardRef<HTMLDivElement>((props, ref) => {
  const { cvFormData } = useCVFormStore();
  console.log(cvFormData);
  return (
    <section className="col-span-2 flex" id="classic-one" ref={ref}>
      <div
        className="flex flex-col justify-between gap-8  bg-slate-800 px-8 py-4 text-zinc-100"
        id="print"
      >
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
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Email::</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.email}</p>
          </div>
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Address:</h5>
            <p className="h-auto max-w-full break-all">
              {cvFormData.address}, {cvFormData.city}, {cvFormData.postalCode}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold lg:text-3xl">Education</h3>
          <div className="h-1 w-16 bg-zinc-100" />
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Degree:</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.degree}</p>
          </div>
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Graduated On:</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.graduationDate}</p>
          </div>
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Graduated From:</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.institutionName}</p>
          </div>
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Major Field of study:</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.majorFieldOfStudy}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold lg:text-3xl">Languages:</h3>
          <div className="h-1 w-16 bg-zinc-100" />
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Languages:</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.languages}</p>
          </div>
          <div>
            <h5 className="text-base font-bold lg:text-2xl">Proficiency Level:</h5>
            <p className="h-auto max-w-full break-all">{cvFormData.proficiencyLevel}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-4xl justify-center bg-white text-zinc-700">
        <div className="flex w-full flex-col gap-8 p-8">
          <header>
            <h1 className="flex w-full flex-col text-6xl font-bold">
              <span className="w-full">{cvFormData.firstName}</span>
              <span className="w-full">{cvFormData.lastName}</span>
            </h1>
            <h5 className="text-xl font-medium">{cvFormData.bio}</h5>
          </header>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold lg:text-3xl">Profile</h3>
            <div className="h-1 w-16 bg-zinc-700" />
            <p className="break-all text-xl">{cvFormData.goals}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold lg:text-3xl">Experiences</h3>
            <div className="h-1 w-16 bg-zinc-700" />
            <div className="flex items-center gap-8">
              <div className="flex flex-col gap-2 text-lg font-medium">
                <p>
                  {cvFormData.yearOfEmployment} - {cvFormData.yearOfResign}
                </p>
                <p>{cvFormData.companyName}</p>
              </div>
              <div className="flex flex-1 flex-col gap-2 text-lg font-medium">
                <h3 className="text-xl font-bold">{cvFormData.jobTitle}</h3>
                <p className="break-all">{cvFormData.responsibilitiesAndAchievements}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Skills</h3>
            <div className="h-1 w-16 bg-zinc-700" />
            <div className="flex  gap-4">
              <h3 className="text-2xl font-semibold">Technical Skills:</h3>
              <p className="flex-1 break-all">{cvFormData.technicalSkills}</p>
            </div>
            <div className="flex  gap-4">
              <h3 className="text-2xl font-semibold">Soft Skills:</h3>
              <p className="flex-1 break-all">{cvFormData.softSkills}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold lg:text-3xl">Certifications or Licenses</h3>
            <div className="h-1 w-16 bg-zinc-700" />
            <div className="flex  items-center gap-4">
              <h3 className="text-2xl font-semibold">Certificate / Licenses:</h3>
              <p className="flex-1 break-all">{cvFormData.certification}</p>
            </div>
            <div className="flex  items-center gap-4">
              <h3 className="text-2xl font-semibold">Issuing Organization:</h3>
              <p className="flex-1 break-all">{cvFormData.issuingOrganization}</p>
            </div>
            <div className="flex  items-center gap-4">
              <h3 className="text-2xl font-semibold">Issued On:</h3>
              <p className="flex-1 break-all">{cvFormData.certificationEarnedDate}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold">Additional</h3>
            <div className="h-1 w-16 bg-zinc-700" />
            <div className="flex  gap-4">
              <h3 className="text-2xl font-semibold">Hobbies:</h3>
              <p className="flex-1 break-all">{cvFormData.hobbies}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
ClassicOne.displayName = 'ClassicOne';
export default ClassicOne;
