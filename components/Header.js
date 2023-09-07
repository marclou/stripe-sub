import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import config from "@/config";

const links = [
  {
    href: "/#pricing",
    label: "Pricing",
  },
  {
    href: "/#testimonials",
    label: "Reviews",
  },
];

const Header = () => {
  return (
    <header className="bg-base-200">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center ">
        <Link
          className="flex items-center gap-2 shrink-0 "
          href="/"
          title={`${config.appName} hompage`}
        >
          <Image
            src={logo}
            alt={`${config.appName} logo`}
            className="w-8"
            placeholder="blur"
            priority={true}
          />
          <span className="font-extrabold text-lg">{config.appName}</span>
        </Link>
        <div className="w-full flex items-center pl-12 md:pl-24 gap-4 md:gap-12">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="link link-hover"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
