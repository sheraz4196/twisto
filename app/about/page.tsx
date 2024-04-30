import Image from 'next/image';
export default function About() {
  return (
    <div className="flex min-h-screen justify-center bg-cyan-800 p-5  md:p-6 lg:p-10">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
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
        <div className="flex max-w-lg items-center gap-4 sm:flex-col-reverse lg:max-w-2xl lg:flex-row lg:gap-8">
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
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
