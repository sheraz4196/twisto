'use client';
import ClassicOne from '@/components/cv-designes/classic-one';
import MonochromeMajesty from '@/components/cv-designes/monochrome-majesty';
import Pedro from '@/components/cv-designes/pedro';
import CVGeneratorHeader from '@/components/cv-gernator/cv-Generator-header';
import CreateCVForm from '@/components/forms/create-cv-form';
import useCVTemplateStore from '@/stores/cv/cv-template-store';

export default function CreateCV() {
  const { cvTemplate } = useCVTemplateStore();
  console.log('Here', cvTemplate);
  return (
    <div className="grid grid-cols-3">
      <CVGeneratorHeader />
      <CreateCVForm />
      {cvTemplate === 'Pedro' && <Pedro />}
      {cvTemplate === 'ClassicI' && <ClassicOne />}
      {cvTemplate === 'Monochrome Majesty' && <MonochromeMajesty />}
    </div>
  );
}
