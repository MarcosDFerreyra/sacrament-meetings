"use client"

import { createMeeting, type State } from "@/lib/actions";
import { useActionState } from 'react';

const initialState: State = { message: null, errors: {} }
const inputClass = "w-full border border-gray-300 bg-white p-2";

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
    return (
        <div id={id} aria-live="polite" aria-atomic="true">
            {errors?.map((error) => (
                <p key={error} className="mt-1 text-sm text-red-600">{error}</p>
            ))}
        </div>
    );
}

export default function NewMeetingPage() {
    const [state, formAction, isPending] = useActionState(createMeeting, initialState);
    return (
        <form action={formAction} className="mx-auto my-12 flex max-w-xl flex-col gap-4 rounded-lg bg-gray-100 p-6">

            <div>
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" required className={inputClass} aria-describedby="date-error" />
                <FieldError id="date-error" errors={state.errors?.date} />
            </div>

            <div>
                <label htmlFor="meetingType">Meeting Type</label>
                <select id="meetingType" name="meetingType" className={inputClass} aria-describedby="meetingType-error">
                    <option value="regular">Regular</option>
                    <option value="testimony">Testimony</option>
                    <option value="stake">Stake</option>
                    <option value="general">General</option>
                </select>
                <FieldError id="meetingType-error" errors={state.errors?.meetingType} />
            </div>

            <div>
                <label htmlFor="presiding">Presiding</label>
                <input id="presiding" name="presiding" required className={inputClass} aria-describedby="presiding-error" />
                <FieldError id="presiding-error" errors={state.errors?.presiding} />
            </div>

            <div>
                <label htmlFor="conducting">Conducting</label>
                <input id="conducting" name="conducting" required className={inputClass} aria-describedby="conducting-error" />
                <FieldError id="conducting-error" errors={state.errors?.conducting} />
            </div>

            <div>
                <label htmlFor="announcements">Announcements (one per line)</label>
                <textarea id="announcements" name="announcements" rows={3} className={inputClass} aria-describedby="announcements-error" />
                <FieldError id="announcements-error" errors={state.errors?.announcements} />
            </div>

            <fieldset className="grid grid-cols-[6rem_1fr] gap-2">
                <legend className="mb-1">Opening Hymn</legend>
                <div>
                    <label htmlFor="openingHymnNumber" className="text-sm">Number</label>
                    <input id="openingHymnNumber" name="openingHymnNumber" type="number" min="1" required className={inputClass} aria-describedby="openingHymnNumber-error" />
                    <FieldError id="openingHymnNumber-error" errors={state.errors?.openingHymnNumber} />
                </div>
                <div>
                    <label htmlFor="openingHymnTitle" className="text-sm">Title</label>
                    <input id="openingHymnTitle" name="openingHymnTitle" required className={inputClass} aria-describedby="openingHymnTitle-error" />
                    <FieldError id="openingHymnTitle-error" errors={state.errors?.openingHymnTitle} />
                </div>
            </fieldset>

            <div>
                <label htmlFor="openingPrayer">Opening Prayer</label>
                <input id="openingPrayer" name="openingPrayer" required className={inputClass} aria-describedby="openingPrayer-error" />
                <FieldError id="openingPrayer-error" errors={state.errors?.openingPrayer} />
            </div>

            <div>
                <label htmlFor="wardBusiness">Ward Business (one per line)</label>
                <textarea id="wardBusiness" name="wardBusiness" rows={3} className={inputClass} aria-describedby="wardBusiness-error" />
                <FieldError id="wardBusiness-error" errors={state.errors?.wardBusiness} />
            </div>

            <div className="flex items-center gap-2">
                <input id="stakeBusiness" name="stakeBusiness" type="checkbox" className="h-5 w-5" />
                <label htmlFor="stakeBusiness">Stake Business</label>
            </div>

            <fieldset className="grid grid-cols-[6rem_1fr] gap-2">
                <legend className="mb-1">Sacrament Hymn</legend>
                <div>
                    <label htmlFor="sacramentHymnNumber" className="text-sm">Number</label>
                    <input id="sacramentHymnNumber" name="sacramentHymnNumber" type="number" min="1" required className={inputClass} aria-describedby="sacramentHymnNumber-error" />
                    <FieldError id="sacramentHymnNumber-error" errors={state.errors?.sacramentHymnNumber} />
                </div>
                <div>
                    <label htmlFor="sacramentHymnTitle" className="text-sm">Title</label>
                    <input id="sacramentHymnTitle" name="sacramentHymnTitle" required className={inputClass} aria-describedby="sacramentHymnTitle-error" />
                    <FieldError id="sacramentHymnTitle-error" errors={state.errors?.sacramentHymnTitle} />
                </div>
            </fieldset>

            <div>
                <label htmlFor="speakers">Speakers (one per line: Name - Topic)</label>
                <textarea id="speakers" name="speakers" rows={3} placeholder="Sister Chen - The Sacrament" className={inputClass} aria-describedby="speakers-error" />
                <FieldError id="speakers-error" errors={state.errors?.speakers} />
            </div>

            <fieldset className="grid grid-cols-[6rem_1fr] gap-2">
                <legend className="mb-1">Closing Hymn</legend>
                <div>
                    <label htmlFor="closingHymnNumber" className="text-sm">Number</label>
                    <input id="closingHymnNumber" name="closingHymnNumber" type="number" min="1" required className={inputClass} aria-describedby="closingHymnNumber-error" />
                    <FieldError id="closingHymnNumber-error" errors={state.errors?.closingHymnNumber} />
                </div>
                <div>
                    <label htmlFor="closingHymnTitle" className="text-sm">Title</label>
                    <input id="closingHymnTitle" name="closingHymnTitle" required className={inputClass} aria-describedby="closingHymnTitle-error" />
                    <FieldError id="closingHymnTitle-error" errors={state.errors?.closingHymnTitle} />
                </div>
            </fieldset>

            <div>
                <label htmlFor="closingPrayer">Closing Prayer</label>
                <input id="closingPrayer" name="closingPrayer" required className={inputClass} aria-describedby="closingPrayer-error" />
                <FieldError id="closingPrayer-error" errors={state.errors?.closingPrayer} />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                {isPending ? "Saving..." : "Save Meeting"}
            </button>
            {state.message ? <p className="rounded bg-red-50 p-2 text-sm text-red-700">{state.message}</p> : null}
        </form>
    );
}