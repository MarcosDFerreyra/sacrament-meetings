import { redirect } from "next/navigation";

export default async function CurrentMeeting() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dayOfWeek);

    const isoDate = sunday.toISOString().split('T')[0]; // 'YYYY-MM-DD'

    const res = await fetch(`/api/meetings?date=${isoDate}`);
    const meetings = await res.json();

    if (meetings.length > 0) {
        redirect(`/meetings/${meetings[0].id}`);
    }

    redirect('/meetings');
}