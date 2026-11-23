"use client";

import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <main className="mx-auto max-w-xl p-6 text-center">
            <h2 className="text-2xl font-bold">Something went wrong</h2>
            <p className="my-4">{error.message}</p>
            <button onClick={reset} className="rounded bg-blue-600 px-4 py-2 text-white">Try Again</button>
            <Link href="/meetings" className="ml-4 underline">Back to meetings</Link>
        </main>
    );
}