import ClassicOne from '@/components/cv-designes/classic-one';
import MonochromeMajesty from '@/components/cv-designes/monochrome-majesty';
import Pedro from '@/components/cv-designes/pedro';
import CreateCVForm from '@/components/forms/create-cv-form';

export default function CreateCV() {
  return (
    <div className="grid grid-cols-3">
      <CreateCVForm />
      <MonochromeMajesty />
    </div>
  );
}
