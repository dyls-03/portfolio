import { getAgeText } from "@/utils/calcAge";

export default function Home() {
  const uptime = getAgeText();

  return (
    <section className="py-20">    
        <div className="mx-auto max-w-7xl px-6 lg:px-11 xl:px-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16">

      {/* LEFT SIDE */}
      <div className="md:flex-[1.2] space-y-4">

      <p className="text-white text-xl">Hello there,</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-white">I&apos;m</span>
          <span className="text-orange-500"> Dylan Val</span>
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:flex-[0.8] flex md:justify-end justify-center">
        <div className="bg-black/30 p-5 rounded-xl border border-slate-800 text-sm font-mono text-slate-300 max-w-[470px] w-full">
          
          <div className="flex justify-between mb-3 whitespace-nowrap">
            <span className="text-orange-500 blinking">Uptime:</span>
            <span className="text-right">{uptime}</span>
          </div>

          <div className="flex justify-between mb-3 whitespace-nowrap">
            <span className="text-orange-500 blinking">Current Location:</span>
            <span className="text-right">UK</span>
          </div>

          <br/>

          <div className="flex justify-between mb-3 whitespace-nowrap">
            <span className="text-orange-500 blinking">Work:</span>
            <span className="text-right">STFC - UKRI</span>
          </div>

          <div className="flex justify-between whitespace-nowrap">
            <span className="text-orange-500 blinking">Role:</span>
            <span className="text-right">Graduate Software Engineer</span>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
