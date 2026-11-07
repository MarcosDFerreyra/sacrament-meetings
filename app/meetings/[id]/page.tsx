import type { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";
import MeetingDetail from "@/components/MeetingDetail";
import { notFound } from "next/navigation";

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
        <div>
            <h1>Meeting Details</h1>
            <MeetingDetail meeting={meeting} />
        </div>
    );
}