import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-6 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold">Sacrament Meeting Planner</h1>
        <p className="text-lg">
          Plan, review and print sacrament meeting programs for the current and past weeks.
        </p>
        <Image
          className="w-full h-auto"
          src="/salon.png"
          alt="church room, with chairs and a podium"
          width={908}
          height={542}
        />
      </main>
    </div>
  );
}
