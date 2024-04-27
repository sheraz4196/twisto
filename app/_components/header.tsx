import Navbar from "./header/navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-2 md:p-4 lg:p-8 bg-white border-b border-primary-600">
      {/* Logo Placeholder */}
      <div className="w-16 h-16 bg-primary-600" />
      <Navbar />
      <div className="w-16 h-16 bg-primary-600" />
    </header>
  );
}
