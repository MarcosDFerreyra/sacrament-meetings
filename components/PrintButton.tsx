'use client';

export default function PrintButton() {
    return (
        <button type="button" className="print:hidden rounded-md bg-brand px-4 py-2 text-sm font-bold text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" onClick={() => window.print()}>
            Print program
        </button>
    );
}