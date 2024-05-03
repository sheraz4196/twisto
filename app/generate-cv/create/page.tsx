import ClassicOne from '@/components/cv-designes/classic-one';
import CreateCVForm from '@/components/forms/create-cv-form';

export default function CreateCV() {
  return (
    <div className="grid grid-cols-3">
      <CreateCVForm />
      <div className="flex  justify-center">
        <ClassicOne />
      </div>
    </div>
  );
}
