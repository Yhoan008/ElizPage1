import { articles } from "../data/articles";

export function BlogPage({ slug }: { slug: string }) {
  const a = articles.find(x => x.slug === slug);

  if (!a) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl text-pine">Article not found</h1>
        <a href="#/blogs" className="inline-block mt-6 rounded-full bg-pine text-cream px-8 py-4">Back to blog</a>
      </section>
    );
  }

  return (
    <article className="max-w-2xl mx-auto px-6 py-20">
      <a href="#/blogs" className="text-sm text-sagedeep hover:underline">← All articles</a>
      <p className="mt-8 text-xs uppercase tracking-widest text-sagedeep">{a.category} · {a.date} · {a.readTime}</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl text-pine leading-tight">{a.title}</h1>
      <p className="mt-6 text-lg text-coffee/60 leading-relaxed">{a.excerpt}</p>
      <div className="mt-10 space-y-6 text-coffee/75 leading-relaxed">
        {a.body.map((p, i) => <p key={i}>{p}</p>)}
      </div>
      <div className="mt-14 text-center bg-beige rounded-[2.5rem] p-10 border border-sand/60">
        <h2 className="font-display text-2xl text-pine">Ready to explore this for yourself?</h2>
        <a href="#booking" className="inline-block mt-6 rounded-full bg-pine text-cream px-8 py-4 hover:bg-sagedeep transition">Book a consultation</a>
      </div>
    </article>
  );
}
