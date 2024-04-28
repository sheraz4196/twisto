import ContactUs from "./footer/contact-us";
import Subscribe from "./footer/subscribe";

export default function Footer() {
  return (
    <footer className="flex items-center p-2 md:p-4 justify-between  lg:p-8 gap-2 md:gap-4 lg:gap-8 border-t border-primary-600">
      <div className="flex flex-col gap-4 lg:gap-8">
        {/* Logo Placeholder */}
        <div className="h-16 bg-yellow-500 w-48" />
        <p className="col-start-1 text-zinc-600 text-xs lg:text-base">
          &copy; 2024, all rights reserved.
        </p>
        
        <ContactUs />
      </div>
      <Subscribe />
    </footer>
  );
}
