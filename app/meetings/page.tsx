
import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meeting-db";

export default async function MeetingsPage(props: { searchParams?: Promise<{ query?: string; page?: string }>}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const meetings  = await getMeetings(query, currentPage)
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold text-brand mb-4">All Meetings</h1>
            {meetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
        </div>
    );
}