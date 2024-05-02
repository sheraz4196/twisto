import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TestimonialsCarouselProps } from '@/types/types';

export default function TestimonialsCarousel({ data }: { data: TestimonialsCarouselProps[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-4 items-center gap-4 rounded-xl border border-primary-500 bg-primary-50 p-4 text-left text-zinc-700 md:p-6 lg:gap-5 lg:p-8">
              <div className="flex items-center justify-center">
                <Image
                  src={item.imgUrl}
                  alt={`${item.name} Photo`}
                  className="h-auto w-auto rounded-full"
                  width={312}
                  height={160}
                />
              </div>
              <div className="col-span-3 flex flex-col gap-2 text-base">
                <div>
                  <h2 className="text-xl font-bold lg:text-2xl">{item.name}</h2>
                </div>
                <div className="text-sm lg:text-base">
                  <p>{item.review}</p>
                </div>
                <div className="text-xs font-light lg:text-sm">
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
