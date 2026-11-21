import { NextResponse } from "next/server";
import { getMeetingById } from "@/lib/meeting-db";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id: idParams } = await params;
    const id = Number(idParams)

    if (Number.isNaN(id)) {
        return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
    }
    const meeting = getMeetingById(id)
    if (!meeting)
        return NextResponse.json({ error: "Meeting not found" }, { status: 404 })
    return NextResponse.json(meeting)
}