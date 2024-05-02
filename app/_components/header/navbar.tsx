'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();
  const Tabs = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Generate CV',
      link: '/generate-cv',
    },
  ];
  return (
    <nav>
      <ol className="flex gap-4">
        {Tabs.map((Tab, index) => (
          <li key={index}>
            <Link
              href={Tab.link}
              className={`rounded-md border  px-4 py-2 text-base text-zinc-900 ${
                pathname === Tab.link
                  ? 'border-zinc-900 bg-primary-400 font-bold'
                  : 'border-zinc-500 bg-primary-200 font-semibold'
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
