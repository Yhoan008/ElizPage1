import { articles } from "../data/articles";

export function BlogsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <a href="#home" className="text-sm text-sagedeep hover:underline">← Back home</a>
      <h1 className="font-display text-5xl text-pine mt-6">Blog</h1>
      <p className="mt-4 text-coffee/60 max-w-xl">
        Articles about hypnotherapy, emotional wellbeing and the inner work of transformation.
      </p>

      <div className="mt-14 divide-y divide-sand">
        {articles.map(a => (
          <a key={a.slug} href={`#/blog/${a.slug}`} className="group block py-8">
            <p className="text-xs uppercase tracking-widest text-sagedeep">{a.category} · {a.date} · {a.readTime}</p>
            <h2 className="mt-3 font-display text-2xl text-coffee group-hover:text-pine transition">{a.title}</h2>
            <p className="mt-3 text-coffee/65 leading-relaxed">{a.excerpt}</p>
            <span className="inline-block mt-4 text-sm text-sagedeep group-hover:underline">Read article →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
