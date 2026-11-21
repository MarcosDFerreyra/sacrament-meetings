
import MeetingCard from "@/components/MeetingCard";
import { MeetingSearch } from "@/components/MeetingSearch";
import { Pagination } from "@/components/Pagination";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meeting-db";



export default async function MeetingsPage(props: { searchParams?: Promise<{ query?: string; page?: string }>}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const meetings = await getMeetings(query, currentPage)
    const totalPages = await getMeetingsTotalPages(query);
    return (
        <div className="space-y-3">
            <h1 className="text-3xl font-bold text-brand mb-4">All Meetings</h1>
            <MeetingSearch/>
            {meetings.map((meeting) => (
                <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
            <Pagination totalPages={totalPages} />
        </div>
    );
}