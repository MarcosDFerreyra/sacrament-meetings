import type { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";
import MeetingDetail from "@/components/MeetingDetail";
import { notFound } from "next/navigation";
import PrintButton from "@/components/PrintButton";

export default async function MeetingPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = host?.startsWith("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/meetings/${id}`);

    if (!res.ok) { 
        return notFound();
    }
    const meeting: SacramentMeeting = await res.json();

    return (
        <div className="mx-auto max-w-3xl">
            <div className="mb-4 flex items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-brand">Meeting Details</h1>
                <PrintButton />
            </div>
            <MeetingDetail meeting={meeting} />
        </div>
    );
}