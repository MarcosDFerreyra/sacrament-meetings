import Link from 'next/link';

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 py-8">
            <nav className="flex gap-4 mb-4 print:hidden">
                <Link href="/meetings">All Meetings</Link> 
                <Link href="/meetings/current">Current Meeting</Link> 
            </nav>
            {children}
        </section>
    );
}