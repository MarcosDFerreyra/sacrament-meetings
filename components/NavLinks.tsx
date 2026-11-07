'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkClasses = 'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';
const activeClasses = 'bg-white/20 text-white';
const inactiveClasses = 'text-blue-100 hover:bg-white/10 hover:text-white';

export default function NavLinks() {
    // Current URL, for example "/" or "/meetings/3"
    const pathname = usePathname();

    // Is each link active?
    const isHome = pathname === '/';
    const isMeetings = pathname.startsWith('/meetings');

    return (
        <nav className="flex items-center gap-2" aria-label="Primary">
            <Link
                href="/"
                className={`${linkClasses} ${isHome ? activeClasses : inactiveClasses}`}
                aria-current={isHome ? 'page' : undefined}
            >
                Home
            </Link>

            <Link
                href="/meetings"
                className={`${linkClasses} ${isMeetings ? activeClasses : inactiveClasses}`}
                aria-current={isMeetings ? 'page' : undefined}
            >
                Meetings
            </Link>
        </nav>
    );
}