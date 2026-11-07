import type { SacramentMeeting } from "@/lib/types";

import Link from "next/link";


export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <Link
            href={`/meetings/${meeting.id}`}
            className="flex w-full items-center justify-between gap-4 border border-zinc-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <p className="whitespace-nowrap text-sm font-medium text-zinc-900">Date: {meeting.date}</p>
            <p className="whitespace-nowrap text-sm text-zinc-600">
                Type: <span className="capitalize">{meeting.meetingType}</span>
            </p>
        </Link>
    )
}