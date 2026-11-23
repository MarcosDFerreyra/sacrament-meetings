import { updateMeeting } from "@/lib/actions";
import { getMeetingById } from "@/lib/meeting-db";
import { notFound } from "next/navigation";
import EditMeetingForm from "@/components/EditForm";


export default async function EditMeetingPage(props: { params: Promise<{ id: string }> }) {
    const {id} = await props.params;
    const meeting = await getMeetingById(Number(id));
    if (!meeting) notFound();
    const updateWithId = updateMeeting.bind(null, id);
    return <EditMeetingForm meeting={meeting} action={updateWithId} />;
}