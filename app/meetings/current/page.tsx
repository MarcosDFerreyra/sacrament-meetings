import type { SacramentMeeting } from "@/lib/types";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function CurrentMeeting() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);

    const isoDate = sunday.toISOString().split('T')[0]; // 'YYYY-MM-DD'

    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = host?.startsWith("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/meetings?date=${isoDate}`);
    const meetings: SacramentMeeting[] = await res.json();

    if (meetings.length > 0) {
        redirect(`/meetings/${meetings[0].id}`);
    }

    redirect('/meetings');
}