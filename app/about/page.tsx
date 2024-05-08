import CVGeneratorHeader from '@/components/cv-gernator/cv-Generator-header';
import Image from 'next/image';
export default function About() {
  return (
    <div>
      <CVGeneratorHeader />
      <div className="flex min-h-screen justify-center bg-cyan-800 p-5  md:p-6 lg:p-8">
        <div className="flex flex-col gap-6 text-white lg:gap-12">
          <div className="ml-2 text-xl font-medium text-yellow-400/90 lg:text-2xl">
            <h2>
              ~<span className="ml-4 lg:ml-7"> WHO WE ARE</span>
            </h2>
          </div>
          <div className="flex max-w-2xl gap-5 sm:flex-col lg:max-w-5xl  lg:flex-row lg:gap-10">
            <div className="">
              <h1 className=" text-2xl font-bold tracking-tight lg:text-4xl">
                We Help To Get You Well.
              </h1>
              <p className="mt-6 text-lg font-medium lg:mt-12 lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi numquam minima
                beatae voluptatum sapiente! Velit, repellendus. Deleniti, ipsa qui vel reprehenderit
                fugiat numquam quis iste earum iusto ea at.
              </p>
            </div>
            <div className="sm:px-40 lg:px-0">
              <Image
                src={'/patient.png'}
                alt="Client-Review"
                className="h-auto w-screen"
                width={312}
                height={160}
              />
            </div>
          </div>
          <div className="flex max-w-2xl items-center gap-4 sm:flex-col-reverse lg:flex-row lg:gap-8">
            <div className="sm:px-40 lg:px-0">
              <Image
                src={'/hospital.png'}
                alt="Client-Review"
                className="h-auto w-screen"
                width={312}
                height={160}
              />
            </div>
            <div>
              <p className="text-xs font-light lg:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim placeat ad ex
                quae amet, magni accusamus magnam sapiente ratione provident, nostrum deleniti,
                earum fugit id! Dolorem voluptates molestias magni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
