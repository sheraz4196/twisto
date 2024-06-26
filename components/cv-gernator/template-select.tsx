'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CVTemplates } from '@/constants';
import useCVTemplateStore from '@/stores/cv/cv-template-store';
export default function TemplateSelect() {
  const { setCVTemplate } = useCVTemplateStore();
  return (
    <Select onValueChange={(value) => setCVTemplate(value)}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        {CVTemplates.map((template, index) => (
          <SelectItem value={template} key={index}>
            {template}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
