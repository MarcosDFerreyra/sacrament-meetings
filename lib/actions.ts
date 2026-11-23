"use server"

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addMeeting, updateMeetingDb, deleteMeetingDb} from './meeting-db';

const MeetingFormSchema = z.object({
    date: z.string().date('Enter a valid date.'),
    meetingType: z.enum(['testimony', 'regular', 'stake', 'general'], 'Select a valid meeting type.'),
    presiding: z.string().min(2, 'Presiding is required.'),
    conducting: z.string().min(2, 'Conducting is required.'),
    openingPrayer: z.string().min(2, 'Opening prayer is required.'),
    closingPrayer: z.string().min(2, 'Closing prayer is required.'),
    openingHymnNumber: z.coerce.number().int().positive('Enter a hymn number.'),
    openingHymnTitle: z.string().min(3, 'Enter the hymn title.'),
    sacramentHymnNumber: z.coerce.number().int().positive('Enter a hymn number.'),
    sacramentHymnTitle: z.string().min(3, 'Enter the hymn title.'),
    closingHymnNumber: z.coerce.number().int().positive('Enter a hymn number.'),
    closingHymnTitle: z.string().min(3, 'Enter the hymn title.'),
    announcements: z.string().optional(),
    wardBusiness: z.string().optional(),
    speakers: z.string().optional(),
    stakeBusiness: z.boolean(),
});


export type State = {
    errors?: {
        date?: string[];
        meetingType?: string[];
        presiding?: string[];
        conducting?: string[];
        openingPrayer?: string[];
        closingPrayer?: string[];
        openingHymnNumber?: string[];
        openingHymnTitle?: string[];
        sacramentHymnNumber?: string[];
        sacramentHymnTitle?: string[];
        closingHymnNumber?: string[];
        closingHymnTitle?: string[];
        announcements?: string[];
        wardBusiness?: string[];
        speakers?: string[];
        stakeBusiness?: string[];
    };
    message?: string | null;
};

const toLines = (text?: string) =>
    (text ?? '').split('\n').map(l => l.trim()).filter(Boolean);

export async function createMeeting(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = MeetingFormSchema.safeParse({
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        openingPrayer: formData.get('openingPrayer'),
        closingPrayer: formData.get('closingPrayer'),
        openingHymnNumber: formData.get('openingHymnNumber'),
        openingHymnTitle: formData.get('openingHymnTitle'),
        sacramentHymnNumber: formData.get('sacramentHymnNumber'),
        sacramentHymnTitle: formData.get('sacramentHymnTitle'),
        closingHymnNumber: formData.get('closingHymnNumber'),
        closingHymnTitle: formData.get('closingHymnTitle'),
        announcements: formData.get('announcements'),
        wardBusiness: formData.get('wardBusiness'),
        speakers: formData.get('speakers'),
        stakeBusiness: formData.get('stakeBusiness') === 'on',
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to create project.',
        };
    }

    const d = validatedFields.data;

    try {
        await addMeeting({
            date: d.date,
            meetingType: d.meetingType,
            presiding: d.presiding,
            conducting: d.conducting,
            openingPrayer: d.openingPrayer,
            closingPrayer: d.closingPrayer,
            openingHymn: { number: d.openingHymnNumber, title: d.openingHymnTitle },
            sacramentHymn: { number: d.sacramentHymnNumber, title: d.sacramentHymnTitle },
            closingHymn: { number: d.closingHymnNumber, title: d.closingHymnTitle },
            announcements: toLines(d.announcements),
            wardBusiness: toLines(d.wardBusiness).map(description => ({ description })),
            // Formato por línea: "Nombre - Tema"
            speakers: toLines(d.speakers).map(line => {
                const [name, topic = ''] = line.split(' - ');
                return { name: name.trim(), topic: topic.trim(), type: 'speaker' as const };
            }),
            stakeBusiness: d.stakeBusiness,
        });
    } catch(error) {
        console.error(error);
        return {
            
            message: 'Database Error: Failed to create project.',
        };

    }
    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function updateMeeting(id: string, prevState: State, formData: FormData): Promise<State>  {

    const validatedFields = MeetingFormSchema.safeParse({
        date: formData.get('date'),
        meetingType: formData.get('meetingType'),
        presiding: formData.get('presiding'),
        conducting: formData.get('conducting'),
        openingPrayer: formData.get('openingPrayer'),
        closingPrayer: formData.get('closingPrayer'),
        openingHymnNumber: formData.get('openingHymnNumber'),
        openingHymnTitle: formData.get('openingHymnTitle'),
        sacramentHymnNumber: formData.get('sacramentHymnNumber'),
        sacramentHymnTitle: formData.get('sacramentHymnTitle'),
        closingHymnNumber: formData.get('closingHymnNumber'),
        closingHymnTitle: formData.get('closingHymnTitle'),
        announcements: formData.get('announcements'),
        wardBusiness: formData.get('wardBusiness'),
        speakers: formData.get('speakers'),
        stakeBusiness: formData.get('stakeBusiness') === 'on',
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing or invalid fields. Failed to update project.',
        };
    }

    const d = validatedFields.data;

    try {
        await updateMeetingDb(id, {
            date: d.date,
            meetingType: d.meetingType,
            presiding: d.presiding,
            conducting: d.conducting,
            openingPrayer: d.openingPrayer,
            closingPrayer: d.closingPrayer,
            openingHymn: { number: d.openingHymnNumber, title: d.openingHymnTitle },
            sacramentHymn: { number: d.sacramentHymnNumber, title: d.sacramentHymnTitle },
            closingHymn: { number: d.closingHymnNumber, title: d.closingHymnTitle },
            announcements: toLines(d.announcements),
            wardBusiness: toLines(d.wardBusiness).map(description => ({ description })),
            // Formato por línea: "Nombre - Tema"
            speakers: toLines(d.speakers).map(line => {
                const [name, topic = ''] = line.split(' - ');
                return { name: name.trim(), topic: topic.trim(), type: 'speaker' as const };
            }),
            stakeBusiness: d.stakeBusiness,
        });
    } catch {
        return {
            message: 'Database Error: Failed to update project.',
        };

    }
    revalidatePath('/meetings');
    redirect('/meetings');
}

export async function deleteMeeting(id: string) {
    try {
        await deleteMeetingDb(id);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete meeting.');
    }
    revalidatePath("meetings")
    redirect('/meetings');
}