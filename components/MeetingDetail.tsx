import type { SacramentMeeting } from "@/lib/types";


export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <section className="w-full max-w-3xl space-y-6 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="space-y-3 text-sm text-zinc-700">
                <p><span className="font-semibold text-zinc-950">Type:</span> <span className="capitalize">{meeting.meetingType}</span></p>
                <p><span className="font-semibold text-zinc-950">Date:</span> {meeting.date}</p>
                <p><span className="font-semibold text-zinc-950">Presiding:</span> {meeting.presiding}</p>
                <p><span className="font-semibold text-zinc-950">Conducting:</span> {meeting.conducting}</p>
                <p><span className="font-semibold text-zinc-950">Announcements:</span> {meeting.announcements?.join(', ') || 'None'}</p>
                <p><span className="font-semibold text-zinc-950">Opening prayer:</span> {meeting.openingPrayer}</p>
                <p><span className="font-semibold text-zinc-950">Closing prayer:</span> {meeting.closingPrayer}</p>
                <p><span className="font-semibold text-zinc-950">Stake business:</span> {meeting.stakeBusiness ? 'Yes' : 'No'}</p>
            </div>

            <div className="border-t border-zinc-200 pt-5">
                <h2 className="mb-3 text-lg font-semibold text-zinc-950">Hymns</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 marker:text-zinc-400">
                    <li>Opening: {meeting.openingHymn.number} - {meeting.openingHymn.title}</li>
                    <li>Sacrament: {meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}</li>
                    <li>Closing: {meeting.closingHymn.number} - {meeting.closingHymn.title}</li>
                </ul>
            </div>

            <div className="border-t border-zinc-200 pt-5">
                <h2 className="mb-3 text-lg font-semibold text-zinc-950">Ward business</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 marker:text-zinc-400">
                    {meeting.wardBusiness.map((item, index) => (
                        <li key={index}>{item.description}</li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-zinc-200 pt-5">
                <h2 className="mb-3 text-lg font-semibold text-zinc-950">Speakers</h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 marker:text-zinc-400">
                    {meeting.speakers.map((speaker, index) => (
                        <li key={index}>
                            {speaker.name} - {speaker.type === 'musical-number' ? 'Musical number' : speaker.topic}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}