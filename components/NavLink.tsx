import { ReactChildren, ReactChild } from "react";

import { useRouter } from "next/router";

type NavLinkProps = { href: string; children: ReactChild | ReactChildren };

function NavLink({ children, href }: NavLinkProps) {
  const router = useRouter();

  const sharedStyles = `underline-offset-4 uppercase text-xl`;

  const styles =
    router.asPath === href || router.asPath.includes(href)
      ? `${sharedStyles} underline`
      : `${sharedStyles} no-underline hover:underline`;

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={styles}>
      {children}
    </a>
  );
}

export default NavLink;
