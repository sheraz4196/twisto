'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CVThemes } from '@/constants';
import useCVThemeStore from '@/stores/cv/cv-theme-store';
export default function ThemeSelect() {
  const { setCVTheme } = useCVThemeStore();
  return (
    <Select onValueChange={(value) => setCVTheme(value)}>
      <SelectTrigger className="w-96">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent>
        {CVThemes.map((theme, index) => (
          <SelectItem value={theme} key={index}>
            {theme}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
