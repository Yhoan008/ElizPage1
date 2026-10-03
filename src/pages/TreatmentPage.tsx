import { treatments } from "../data/treatments";

export function TreatmentPage({ slug }: { slug: string }) {
  const t = treatments.find(x => x.slug === slug);

  if (!t) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-pine">Treatment not found</h1>
        <a href="#/treatments" className="inline-block mt-6 rounded-full bg-pine text-cream px-8 py-4">Back to treatments</a>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <a href="#/treatments" className="text-sm text-sagedeep hover:underline">← All treatments</a>
      <h1 className="font-display text-5xl text-pine mt-6">{t.name}</h1>
      <p className="mt-4 text-lg text-coffee/60">{t.desc}</p>

      <div className="mt-12 bg-beige rounded-[2.5rem] p-10 border border-sand/60 space-y-10">
        <div>
          <h2 className="font-display text-2xl text-pine">Understanding it</h2>
          <p className="mt-3 text-coffee/75 leading-relaxed">{t.overview}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-pine">How hypnotherapy can help</h2>
          <ul className="mt-4 space-y-3">
            {t.helps.map(h => (
              <li key={h} className="flex gap-3 text-coffee/75">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />{h}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl text-pine">What to expect</h2>
          <p className="mt-3 text-coffee/75 leading-relaxed">{t.expect}</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="#booking" className="inline-block rounded-full bg-pine text-cream px-8 py-4 hover:bg-sagedeep transition">Book a consultation</a>
        <p className="mt-4 text-sm text-coffee/55">A first conversation is free and comes with no commitment.</p>
      </div>
    </section>
  );
}
