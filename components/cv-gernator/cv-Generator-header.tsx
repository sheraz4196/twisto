import TemplateSelect from './template-select';

export default function CVGeneratorHeader() {
  return (
    <header className="flex items-center justify-between p-4 lg:p-8">
      <h3 className="text-base font-bold text-zinc-700 lg:text-2xl">
        Manage Your CV template and theme settings.
      </h3>
      <div className="flex items-center gap-4 lg:gap-8">
        <TemplateSelect />
      </div>
    </header>
  );
}
