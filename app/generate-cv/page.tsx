import DisplayPanel from './_components/display-panel';
import CreateCVForm from './form/create-cv-form';

export default function CVGenerator() {
  return (
    <div>
      <CreateCVForm />
      <DisplayPanel />
    </div>
  );
}
