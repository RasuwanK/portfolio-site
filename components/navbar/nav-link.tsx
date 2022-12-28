import { ReactNode } from 'react'
import Link from 'next/link';

interface NavLinkProps {
  children: ReactNode;
  to: string;
}

export default function NavLink({ children, to }: NavLinkProps) {
  return (
    <Link
      href={to}
      className="text-light-blue hover:underline"
    >
      {children}
    </Link>
  )
}
