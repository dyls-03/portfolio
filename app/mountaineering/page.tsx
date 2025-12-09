// src/app/mountaineering/page.tsx
import Image from "next/image";
import mountains from "@/data/mountains.json";

const EVEREST_HEIGHT = 8848;
const MY_HIGHEST = 1245;

export default function MountaineeringPage() {
  const progress = Math.min(
    100, (MY_HIGHEST / EVEREST_HEIGHT) * 100
  );

  return (
    <section className="px-6 md:px-10 lg:px-16 py-12 space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-50">
          Mountaineering Log
        </h1>
        <p className="mt-2 text-sm text-slate-400 max-w-2xl">
          A running record of summits, routes, and trips I&apos;ve done.
        </p>
      </div>

      <br/>

      <div className="space-y-2">
        <div className="flex items-baseline justify-between text-sm font-mono">
          <span className="text-slate-300">
            Progress towards <span className="text-orange-500">Everest</span>
          </span>
          <span className="text-slate-400">
            {MY_HIGHEST} m / {EVEREST_HEIGHT} m (
            {progress.toFixed(1)}%)
          </span>
        </div>

        <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full rounded-full bg-orange-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-400 border-b border-slate-800">
              <th className="py-3 pl-4 pr-4 font-medium">Mountain</th>
              <th className="py-3 px-4 font-medium">Route</th>
              <th className="py-3 px-4 font-medium">Height (m)</th>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium">Ascent Type</th>
              <th className="py-3 px-4 font-medium">Company</th>
              <th className="py-3 px-4 font-medium">Notes</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800">
            {mountains.map((ascent, index) => (
              <tr key={index} className="hover:bg-slate-900/60">
                {/* Mountain column */}
                <td className="py-3 pl-4 pr-4 align-top">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://flagcdn.com/48x36/${ascent.countryCode}.png`}
                      alt={`${ascent.region} flag`}
                      width={48}
                      height={36}
                      className="h-8 w-8 rounded-full object-cover border border-slate-700"
                    />
                    <div>
                      <div className="font-semibold text-slate-100">
                        {ascent.mountain}
                      </div>
                      <div className="text-xs text-slate-400">
                        {ascent.region}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Route */}
                <td className="py-3 px-4 align-top text-slate-200">
                  {ascent.route}
                </td>

                {/* Height */}
                <td className="py-3 px-4 align-top text-slate-200">
                  {ascent.heightM}
                </td>

                {/* Date */}
                <td className="py-3 px-4 align-top text-slate-200 whitespace-nowrap">
                  {ascent.date}
                </td>

                {/* Ascent Type */}
                <td className="py-3 px-4 align-top">
                  <span className="inline-flex rounded-full bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 border border-slate-700">
                    {ascent.ascentType}
                  </span>
                </td>

                {/* Company */}
                <td className="py-3 px-4 align-top text-slate-200">
                  {ascent.company}
                </td>

                {/* Notes */}
                <td className="py-3 px-4 align-top text-slate-300 max-w-xs">
                  {ascent.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}