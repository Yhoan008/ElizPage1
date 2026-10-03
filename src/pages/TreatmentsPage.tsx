import { treatments } from "../data/treatments";

export function TreatmentsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <a href="#home" className="text-sm text-sagedeep hover:underline">← Back home</a>
      <h1 className="font-display text-5xl text-pine mt-6">Treatments</h1>
      <p className="mt-4 text-coffee/60 max-w-xl">
        Choose the area you would like to explore. Each page explains the issue, what to expect and how hypnotherapy can support your process.
      </p>

      <h2 className="mt-14 font-display text-2xl text-sagedeep">Emotional challenges</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {treatments.filter(t => t.group === "emotional").map(t => (
          <a key={t.slug} href={`#/treatment/${t.slug}`} className="bg-beige rounded-3xl p-7 border border-sand/60 hover:shadow-md transition block">
            <h3 className="font-display text-xl">{t.name}</h3>
            <p className="mt-2 text-sm text-coffee/65 leading-relaxed">{t.desc}</p>
            <span className="inline-block mt-5 text-sm text-sagedeep">Learn more →</span>
          </a>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl text-sagedeep">Habits & other personal goals</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {treatments.filter(t => t.group === "habits").map(t => (
          <a key={t.slug} href={`#/treatment/${t.slug}`} className="bg-beige rounded-3xl p-7 border border-sand/60 hover:shadow-md transition block">
            <h3 className="font-display text-xl">{t.name}</h3>
            <p className="mt-2 text-sm text-coffee/65 leading-relaxed">{t.desc}</p>
            <span className="inline-block mt-5 text-sm text-sagedeep">Learn more →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
