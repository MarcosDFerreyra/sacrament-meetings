'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', label: 'Home' }

];

const linkClasses = 'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-2" aria-label="Primary">
            {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;

                return (
                    <Link
                        key={href}
                        href={href}
                        className={`${linkClasses} ${isActive ? 'bg-white/20 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'}`}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}