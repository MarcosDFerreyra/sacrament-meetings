import Link from "next/link";

export default function NotFound() {
    return (
        <main className="mx-auto max-w-xl p-6 text-center">
            <h2 className="text-2xl font-bold">Meeting not found</h2>
            <p className="my-4">The meeting you are looking for does not exist.</p>
            <Link href="/meetings" className="underline">Back to meetings</Link>
        </main>
    );
}