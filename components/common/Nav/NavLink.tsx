import { ComponentPropsWithoutRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {}

export function NavLink({ children, href }: NavLinkProps) {
  const router = useRouter();

  const sharedStyles = `tcp-text-3xl duration-200`;

  const styles =
    router.asPath === href || router.asPath.includes(href as string)
      ? `${sharedStyles} text-tcp-yellow`
      : `${sharedStyles} hover:text-tcp-yellow`;

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
