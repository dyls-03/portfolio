// src/app/mountaineering/page.tsx
export default function MountaineeringPage() {
    const trips = [
      {
        name: "Ben Nevis Winter Ascent",
        location: "Scotland",
        date: "Feb 2025",
        highlights: "Whiteout conditions, used crampons and ice axe.",
      },
      // add more
    ];
  
    return (
      <section className="space-y-6">
        <h1 className="text-3xl font-semibold">Mountaineering</h1>
        <p className="text-slate-300">
          A log of climbs, scrambles, and mountaineering trips I’ve done.
        </p>
  
        <div className="space-y-4">
          {trips.map((trip) => (
            <article
              key={trip.name}
              className="rounded-xl border border-slate-800 p-4"
            >
              <h2 className="text-xl font-medium">{trip.name}</h2>
              <p className="text-sm text-slate-400">
                {trip.location} · {trip.date}
              </p>
              <p className="mt-2 text-sm text-slate-200">{trip.highlights}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
  