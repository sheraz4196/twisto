import ClassicOne from '@/components/cv-designes/classic-one';
import Pedro from '@/components/cv-designes/pedro';
import CreateCVForm from '@/components/forms/create-cv-form';

export default function CreateCV() {
  return (
    <div className="grid grid-cols-3">
      <CreateCVForm />
      <Pedro />
    </div>
  );
}
