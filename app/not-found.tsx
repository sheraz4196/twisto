export default function NotFound() {
  return <div className="grid place-items-center h-auto p-5">
    <div className="grid place-items-center gap-10 sm:gap-8 md:gap-10 lg:gap-10 xl:gap-10 2xl:gap-10 text-center">
      <div className="sm:h-28 sm:w-60 md:h-32 md:w-72">
        <img src="Error Alien Spaceship.jpg" alt="Error 404" />
        </div>
        <div className="grid place-items-center text-center">
          <div className="grid place-items-center gap-5">
          <h3 className="text-6xl font-normal tracking-tight font-sans leading-10 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl">Page Not Found</h3>
          <p className=" leading-6 text-base text-slate-950 font-normal mt-2 font-sans 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base sm:w-80 md:w-96 lg:w-96 xl:w-96 2xl:w-96 sm:mt-0 ">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <div className="px-5 text-base py-2 bg-primary-700 text-zinc-200 rounded-full sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-5 lg:py-2 xl:px-5 xl:py-2 2xl:px-5 2xl:py-2 sm:text-xs md:text-base lg:text-base xl:text-base 2xl:text-base">
          <button>Home Page</button>
          </div>
          </div>
        </div>
    </div>
  </div>;
}