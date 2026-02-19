"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  // Strip locale prefix to compare
  const segments = pathname.split("/");
  const pathWithoutLocale = "/" + segments.slice(2).join("/");
  const isActive =
    href === "/"
      ? pathWithoutLocale === "/" || pathWithoutLocale === ""
      : pathWithoutLocale.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-sm transition-colors ${
        isActive
          ? "text-neutral-100 font-medium"
          : "text-neutral-500 hover:text-neutral-300"
      }`}
    >
      {children}
    </Link>
  );
}
