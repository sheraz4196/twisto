"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const Tabs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <nav>
      <ol className="flex gap-4">
        {Tabs.map((Tab, index) => (
          <li key={index}>
            <Link
              href={Tab.link}
              className={`text-base text-zinc-900  px-4 py-2 rounded-md border ${
                pathname === Tab.link
                  ? "bg-primary-400 font-bold border-zinc-900"
                  : "bg-primary-200 font-semibold border-zinc-500"
              }`}
            >
              {Tab.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
