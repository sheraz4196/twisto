import Image from 'next/image';
export default function Testimonials() {
  return (
    <div className="flex h-screen justify-center bg-blue-200/50 p-4  md:p-6 lg:p-8">
      <div className="grid max-w-3xl place-items-center gap-4 text-blue-950 lg:max-w-4xl lg:gap-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight lg:text-4xl">
            Here is what our Clients are saying About us
          </h1>
        </div>
        <div className="grid grid-cols-4 items-center gap-4 rounded-xl bg-white p-4 text-left text-zinc-700 md:p-6 lg:gap-5 lg:p-8">
          <div className="">
            <Image
              src={'/client.jpg'}
              alt="Client-Review"
              className="h-auto w-auto rounded-full"
              width={312}
              height={160}
            />
          </div>
          <div className="col-span-3 flex flex-col gap-2 text-base">
            <div>
              <h2 className="text-lg font-semibold lg:text-xl">Hannah Schmitt</h2>
            </div>
            <div className="font-medium">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec
                turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat
                duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec
                turpis orci lectus maecenas. Suspendisse
              </p>
            </div>
            <div className="font-light ">
              <p>May 8, 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
