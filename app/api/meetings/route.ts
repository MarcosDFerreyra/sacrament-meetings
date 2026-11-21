import { NextRequest, NextResponse } from "next/server";
import { getMeetings } from "@/lib/meeting-db";

export function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');

    const meetings = getMeetings(date ?? undefined);
    return NextResponse.json(meetings)
}