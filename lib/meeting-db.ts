import type { SacramentMeeting } from './types';

const sacramentMeetings: SacramentMeeting[] = [
    {
        id: 1,
        date: '2026-10-11',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Brother Anderson',
        openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
        openingPrayer: 'Brother Miller',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 172, title: 'While of These Emblems We Partake' },
        speakers: [],
        closingHymn: { number: 136, title: 'Because I Have Been Given Much' },
        closingPrayer: 'Sister Garcia',
        announcements: ['Fast and testimony meeting', 'Youth activity: May 15']
    },
    {
        id: 2,
        date: '2026-10-18',
        meetingType: 'stake',
        presiding: 'President Taylor',
        conducting: 'Bishop Smith',
        openingHymn: { number: 1, title: 'The Morning Breaks' },
        openingPrayer: 'Sister Thompson',
        wardBusiness: [{ description: 'Release of former Elders Quorum president' }],
        stakeBusiness: true,
        sacramentHymn: { number: 174, title: 'While of These Emblems We Partake' },
        speakers: [
            { name: 'Elder Roberts', topic: 'Stake conference follow-up', type: 'speaker' },
            { name: 'Sister Martinez', topic: 'Missionary work', type: 'speaker' }
        ],
        closingHymn: { number: 219, title: 'Called to Serve' },
        closingPrayer: 'Brother Clark',
        announcements: ['Stake temple trip: June 6']
    },
    {
        id: 3,
        date: '2026-10-25',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 27, title: 'Come, Come, Ye Saints' },
        openingPrayer: 'Brother Lee',
        wardBusiness: [],
        stakeBusiness: false,
        sacramentHymn: { number: 173, title: "Jesus, Once of Humble Birth" },
        speakers: [
            { name: 'Sister Hall', topic: 'General conference highlights', type: 'speaker' }
        ],
        closingHymn: { number: 85, title: 'How Firm a Foundation' },
        closingPrayer: 'Sister Young',
        announcements: ['General conference viewing party recap']
    },
    {
        id: 4,
        date: '2026-11-01',
        meetingType: 'testimony',
        presiding: 'Bishop Smith',
        conducting: 'Brother Anderson',
        openingHymn: { number: 249, title: 'Called to Serve' },
        openingPrayer: 'Sister Baker',
        wardBusiness: [
            { description: 'Sustaining of new Sunday School teacher' }
        ],
        stakeBusiness: false,
        sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
        speakers: [],
        closingHymn: { number: 259, title: "Let Us All Press On" },
        closingPrayer: 'Brother Garcia',
        announcements: ['Fast and testimony meeting', 'Missionary farewell for Elder Wilson next Sunday']
    },
    {
        id: 5,
        date: '2026-11-08',
        meetingType: 'regular',
        presiding: 'Bishop Smith',
        conducting: 'Brother Jones',
        openingHymn: { number: 2, title: 'The Spirit of God' },
        openingPrayer: 'Sister Herrera',
        wardBusiness: [
            { description: 'Farewell for missionary Elder Wilson' }
        ],
        stakeBusiness: false,
        sacramentHymn: { number: 172, title: 'While of These Emblems We Partake' },
        speakers: [
            { name: 'Sister Castro', topic: 'Gratitude', type: 'speaker' },
            { name: 'Ward Choir', topic: '', type: 'musical-number' },
            { name: 'Elder Wilson', topic: 'Missionary farewell', type: 'speaker' }
        ],
        closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
        closingPrayer: 'Brother Romero',
        announcements: ['Farewell luncheon after meeting']
    }
];

export function getMeetings(date?: string): SacramentMeeting[] {
    if (date) {
        return sacramentMeetings.filter(meeting => meeting.date === date);
    }
    return sacramentMeetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
    return sacramentMeetings.find(meeting => meeting.id === id) ?? null;
}




