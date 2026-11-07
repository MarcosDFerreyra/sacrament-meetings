import type { SacramentMeeting } from "@/lib/types";
import { headers } from "next/headers";
import MeetingCard from "@/components/MeetingCard";

export default async function MeetingsPage() {
    
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = host?.startsWith("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/meetings`);

    const meetings: SacramentMeeting[] = await res.json();

    return (
        <div>
            <h1>All Meetings</h1>
            {meetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
        </div>
    );
}