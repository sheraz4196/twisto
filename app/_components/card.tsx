import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  title: string;
  description: string;
  imgUrl?: string;
  navigate?: string;
  navigateText?: string;
};
export default function Card({ title, description, imgUrl, navigate, navigateText }: CardProps) {
  return (
    <div className="flex flex-col rounded-md border lg:gap-4">
      {imgUrl && <Image title={title} src={imgUrl} alt={title} width={200} height={200} />}
      <h3 className="bg-accent-900 p-2 text-base font-bold text-zinc-200 lg:text-2xl">{title}</h3>
      <p className="px-2 lg:px-5">{description}</p>
      {navigate && navigateText && (
        <Button>
          <Link href={navigate}>{navigateText}</Link>
        </Button>
      )}
    </div>
  );
}
