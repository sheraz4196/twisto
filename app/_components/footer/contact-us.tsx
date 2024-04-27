import Link from "next/link";

export default function ContactUs() {
  const ContUsLinks = [
    {
      heading: "Email",
      value: "sheraz.dev121@gmail.com",
      link: "#",
    },
    {
      heading: "Phone",
      value: "+92 221 234 78 12",
      link: "",
    },
  ];
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h5 className="text-2xl font-bold text-zinc-6 00">Contact Us</h5>
      <ol className="flex flex-col gap-2 lg:gap-4">
        {ContUsLinks.map((contact, index) => (
          <li
            key={index}
            className="flex items-center gap-4 text-xs lg:text-sm"
          >
            <p className="font-semibold">{contact.heading}:</p>
            <Link href={contact.link} className="font-medium">
              {contact.value}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
