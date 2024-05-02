import TestimonialsCarousel from '@/components/homepage/testtimonials-slider';
export default function Testimonials() {
  const dummyData = [
    {
      imgUrl: '/client.jpg',
      name: 'John Doe',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae velit sodales, luctus odio at, faucibus nunc. In quis nunc a risus suscipit fermentum vel non lacus. Donec nec fermentum ex, nec mattis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
      date: 'April 12, 2024',
    },
    {
      imgUrl: '/client.jpg',
      name: 'Jane Smith',
      review:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ultricies aliquam odio, eget auctor ante tincidunt nec. Proin in convallis quam. Nullam lacinia tortor ac libero tristique fermentum. Cras sit amet purus at lacus ultricies condimentum nec ut tortor.',
      date: 'March 25, 2024',
    },
    {
      imgUrl: '/client.jpg',
      name: 'Alice Johnson',
      review:
        'Vestibulum sollicitudin risus ut justo consequat, eu efficitur ipsum ullamcorper. Mauris non odio varius, cursus lectus ut, vestibulum enim. Nam feugiat nisl non justo varius, ac faucibus mi aliquam. Sed id dolor id magna pretium rhoncus.',
      date: 'February 18, 2024',
    },
  ];

  return (
    <div className="flex justify-center p-4 md:p-6 lg:p-8">
      <div className="grid max-w-3xl place-items-center gap-4 text-zinc-700 lg:max-w-4xl lg:gap-8">
        <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
          Here is what our Users are saying About us
        </h1>
        <TestimonialsCarousel data={dummyData} />
      </div>
    </div>
  );
}
