import { useMemo, useState } from "react";
import heroImg from "../assets/Gemini_Generated_Image_7fd5o57fd5o57fd5.jfif";
import aboutImg from "../assets/Gemini_Generated_Image_hnlhqahnlhqahnlh.jfif";
import { treatments } from "../data/treatments";
import { Spiral } from "../components/Spiral";

const emotional = treatments.filter(t => t.group === "emotional");
const habits = treatments.filter(t => t.group === "habits");

const testimonials = [
  { stars: 5, text: "I arrived feeling anxious almost every day. After a few sessions I sleep better and I feel more like myself again.", name: "Mariana R.", context: "Anxiety · 6 sessions" },
  { stars: 5, text: "Eliz is warm and professional. Nothing felt forced — I always felt heard, and that made the process easier.", name: "Carlos P.", context: "Stress · Online sessions" },
  { stars: 5, text: "I finally understood why I kept repeating the same habits. The work felt human, calm and very respectful.", name: "Lucía F.", context: "Habits · In-person sessions" },
  { stars: 5, text: "The first conversation helped me see that this approach could fit my goals. I felt safe from the very beginning.", name: "Daniel M.", context: "Self-confidence · 4 sessions" },
];

const plans = [
  { name: "Initial Consultation", tagline: "Free of charge", price: "$0", items: ["10–20 minute conversation", "Your goals and questions", "No commitment required"], cta: "Book consultation", featured: false },
  { name: "Online Session", tagline: "From anywhere", price: "$65", items: ["60 minutes · Individual session", "Video call from a quiet space", "USD · Online payment"], cta: "Book online", featured: true },
  { name: "In-Person Session", tagline: "In a calm, private space", price: "$75", items: ["60 minutes · Individual session", "Santiago, Chile", "USD or local currency accepted"], cta: "Book in person", featured: false },
];

const faqs = [
  { q: "Do I have to believe in hypnotherapy for it to work?", a: "No. Hypnotherapy is a state of focused relaxation and attention. Curiosity and openness matter more than belief." },
  { q: "Will I lose control during a session?", a: "No. You remain aware and in control at all times. Hypnosis is closer to deep daydreaming than to sleep." },
  { q: "How many sessions will I need?", a: "It depends on your goal. Most people start to notice shifts within a few sessions. We review progress together." },
  { q: "Is online hypnotherapy effective?", a: "Yes — many clients work comfortably online from a quiet, private space." },
];

const timeSlots = ["9:00", "10:30", "12:00", "16:00", "17:30", "19:00"];
const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-clay" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4 fill-current">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export function HomePage() {
  const [ti, setTi] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // booking state
  const [service, setService] = useState("Initial Consultation — 10–20 min");
  const [modality, setModality] = useState("Online");
  const [timezone, setTimezone] = useState("(GMT-3) Santiago");
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [safety, setSafety] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const today = new Date();
  const monthLabel = today.toLocaleString("en-US", { month: "long", year: "numeric" });
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const firstOffset = (new Date(today.getFullYear(), today.getMonth(), 1).getDay() + 6) % 7;
  const calendarDays = useMemo(() => {
    const cells: (number | null)[] = Array(firstOffset).fill(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    return cells;
  }, [firstOffset, daysInMonth]);

  const canConfirm = day !== null && time !== null && name.trim() !== "" && safety;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section id="home" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-16 md:py-24">
        <div>
          <div className="flex items-center gap-3 text-sagedeep mb-6">
            <Spiral className="w-9 h-9" />
            <span className="uppercase tracking-[0.25em] text-xs">Hypnotherapy · Personal transformation</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-coffee">
            Your transformation begins within.
          </h1>
          <p className="mt-6 text-lg text-coffee/70 leading-relaxed max-w-lg">
            Personalized hypnotherapy sessions designed to help you work through the patterns, emotions and habits you want to transform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="rounded-full bg-pine text-cream px-8 py-4 text-center hover:bg-sagedeep transition">Book a consultation</a>
            <a href="#treatments" className="rounded-full border border-sage/50 text-pine px-8 py-4 text-center hover:bg-beige transition">Explore treatments</a>
          </div>
          <p className="mt-6 text-sm text-coffee/60 flex items-center gap-2">
            <Spiral className="w-4 h-4 text-sage" />
            A personalized first conversation to understand your goals and explore the best next step.
          </p>
        </div>
        <div className="relative">
          <Spiral className="absolute -top-10 -right-10 w-40 h-40 text-sage/40 spiral-slow" />
          <Spiral className="absolute -bottom-12 -left-12 w-52 h-52 text-claysoft/60 spiral-slow" />
          <img src={heroImg} alt="Eliz Moreno in a bright, calm studio" className="relative rounded-[2.5rem] shadow-xl w-full object-cover max-h-[560px]" />
        </div>
      </section>

      {/* ---------- TREATMENTS ---------- */}
      <section id="treatments" className="bg-beige py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl text-pine max-w-xl">What would you like to transform?</h2>
            <p className="text-coffee/60 max-w-sm text-sm">The work begins with your goal, not with a technique. Together we choose the path that fits where you are.</p>
          </div>

          <h3 className="mt-14 font-display text-2xl text-sagedeep">Emotional challenges</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {emotional.map(t => (
              <div key={t.name} className="bg-cream rounded-3xl p-7 border border-sand/60 hover:shadow-md transition">
                <Spiral className="w-7 h-7 text-sage" />
                <h4 className="font-display text-xl mt-5">{t.name}</h4>
                <p className="mt-2 text-sm text-coffee/65 leading-relaxed">{t.desc}</p>
                <a href={`#/treatment/${t.slug}`} className="inline-block mt-5 text-sm text-sagedeep underline-offset-4 hover:underline">Learn more →</a>
              </div>
            ))}
          </div>

          <h3 className="mt-14 font-display text-2xl text-sagedeep">Habits & other personal goals</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {habits.map(t => (
              <div key={t.name} className="bg-cream rounded-3xl p-7 border border-sand/60 hover:shadow-md transition">
                <Spiral className="w-7 h-7 text-clay" />
                <h4 className="font-display text-xl mt-5">{t.name}</h4>
                <p className="mt-2 text-sm text-coffee/65 leading-relaxed">{t.desc}</p>
                <a href={`#/treatment/${t.slug}`} className="inline-block mt-5 text-sm text-sagedeep underline-offset-4 hover:underline">Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section id="testimonials" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-pine">What clients are saying</h2>
        <div className="mt-12 relative">
          <figure className="bg-beige rounded-[2.5rem] px-8 py-12 md:px-16 border border-sand/60">
            <div className="flex justify-center"><Stars n={testimonials[ti].stars} /></div>
            <blockquote className="mt-6 font-display text-xl md:text-2xl leading-relaxed text-coffee/85">
              “{testimonials[ti].text}”
            </blockquote>
            <figcaption className="mt-6 text-sm text-coffee/60">
              <span className="font-semibold text-pine">{testimonials[ti].name}</span> · {testimonials[ti].context}
            </figcaption>
          </figure>
          <div className="mt-6 flex items-center justify-center gap-5">
            <button onClick={() => setTi((ti - 1 + testimonials.length) % testimonials.length)} aria-label="Previous" className="w-10 h-10 rounded-full border border-sand text-pine hover:bg-beige transition">‹</button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTi(i)} aria-label={`Go to testimonial ${i + 1}`} className={`w-2 h-2 rounded-full transition ${i === ti ? "bg-pine" : "bg-sand"}`} />
              ))}
            </div>
            <button onClick={() => setTi((ti + 1) % testimonials.length)} aria-label="Next" className="w-10 h-10 rounded-full border border-sand text-pine hover:bg-beige transition">›</button>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="bg-pine text-cream py-20 relative overflow-hidden">
        <Spiral className="absolute -top-16 -left-16 w-64 h-64 text-cream/10 spiral-slow" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 relative">
          <img src={aboutImg} alt="Eliz Moreno in her practice" className="rounded-[2.5rem] w-full object-cover max-h-[520px]" />
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Meet Eliz</h2>
            <div className="mt-6 space-y-4 text-cream/80 leading-relaxed">
              <p>Eliz Moreno is a hypnotherapist and personal transformation guide. For over eight years she has accompanied adults through processes of change, combining hypnotherapy, careful listening and a deeply human approach.</p>
              <p>Her philosophy is simple: real change happens when you feel safe, heard and free of judgment. Sessions are never about forcing — they are about making room for what is already inside you to surface and find a new direction.</p>
              <p>Every process begins with a conversation, so that the path we choose together starts exactly where you are today.</p>
            </div>
            <a href="#booking" className="inline-block mt-8 rounded-full bg-cream text-pine px-8 py-4 hover:bg-sand transition">Learn more about Eliz</a>
          </div>
        </div>
      </section>

      {/* ---------- PRICING ---------- */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-4xl md:text-5xl text-pine text-center">Choose the right session for you</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {plans.map(p => (
            <div key={p.name} className={`rounded-[2rem] p-9 border ${p.featured ? "bg-sage/15 border-sage/50 shadow-lg" : "bg-cream border-sand/70"}`}>
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-1 text-sm text-coffee/55">{p.tagline}</p>
              <p className="mt-6"><span className="font-display text-5xl">{p.price}</span>{p.name !== "Initial Consultation" && <span className="text-coffee/50 text-sm"> USD / session</span>}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-coffee/75">
                {p.items.map(i => <li key={i} className="flex gap-2"><Spiral className="w-4 h-4 mt-0.5 text-sage shrink-0" />{i}</li>)}
              </ul>
              <a href="#booking" className={`block text-center mt-8 rounded-full px-6 py-3.5 transition ${p.featured ? "bg-pine text-cream hover:bg-sagedeep" : "border border-pine/30 text-pine hover:bg-beige"}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="bg-beige py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl text-pine text-center">Frequently asked questions</h2>
          <div className="mt-10 divide-y divide-sand">
            {faqs.map((f, i) => (
              <div key={i}>
                <button className="w-full text-left py-5 flex justify-between gap-6" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-display text-lg">{f.q}</span>
                  <span className="text-sagedeep text-xl">{openFaq === i ? "–" : "+"}</span>
                </button>
                {openFaq === i && <p className="pb-5 text-coffee/70 text-sm -mt-2">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- BOOKING ---------- */}
      <section id="booking" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display text-4xl md:text-5xl text-pine text-center">Let's find a time that works for you.</h2>
        <p className="text-center mt-4 text-coffee/60">A calm, guided way to book your first conversation.</p>

        {confirmed ? (
          <div className="mt-12 bg-beige rounded-[2.5rem] p-12 text-center border border-sand/60">
            <Spiral className="w-12 h-12 text-sage mx-auto" />
            <h3 className="font-display text-3xl text-pine mt-6">Your request is confirmed.</h3>
            <p className="mt-4 text-coffee/70">
              {name}, you booked <strong>{service}</strong> on <strong>{monthLabel.split(" ")[0]} {day}</strong> at <strong>{time}</strong> · {modality} · {timezone}.
              A confirmation email is on its way to {email || "your inbox"}.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid md:grid-cols-[1fr_1.2fr] gap-8">
            <div className="bg-beige rounded-[2.5rem] p-8 border border-sand/60 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-widest text-sagedeep">Service</label>
                <select value={service} onChange={e => setService(e.target.value)} className="mt-2 w-full rounded-2xl bg-cream border border-sand/70 px-4 py-3.5 outline-none">
                  <option>Initial Consultation — 10–20 min</option>
                  <option>Online Session — 60 min</option>
                  <option>In-Person Session — 60 min</option>
                </select>
                <p className="mt-2 text-sm text-coffee/60">A short conversation to understand your goals, answer your questions and determine whether this approach is right for you.</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-sagedeep">Modality</label>
                <select value={modality} onChange={e => setModality(e.target.value)} className="mt-2 w-full rounded-2xl bg-cream border border-sand/70 px-4 py-3.5 outline-none">
                  <option>Online</option>
                  <option>In person</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-sagedeep">Time zone</label>
                <select value={timezone} onChange={e => setTimezone(e.target.value)} className="mt-2 w-full rounded-2xl bg-cream border border-sand/70 px-4 py-3.5 outline-none">
                  <option>(GMT-3) Santiago</option>
                  <option>(GMT-5) Mexico City</option>
                  <option>(GMT-5) Bogotá</option>
                  <option>(GMT+1) Madrid</option>
                  <option>(GMT) London</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-sagedeep">Your name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="mt-2 w-full rounded-2xl bg-cream border border-sand/70 px-4 py-3.5 outline-none" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-sagedeep">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@email.com" className="mt-2 w-full rounded-2xl bg-cream border border-sand/70 px-4 py-3.5 outline-none" />
              </div>
            </div>

            <div className="bg-cream rounded-[2.5rem] p-8 border border-sand/70">
              <h3 className="font-display text-2xl text-pine">{monthLabel}</h3>
              <div className="grid grid-cols-7 gap-2 mt-5 text-center text-xs text-coffee/50 uppercase">
                {weekdays.map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-2 mt-2">
                {calendarDays.map((d, i) => {
                  const disabled = d === null || d < today.getDate();
                  return (
                    <button key={i} disabled={disabled} onClick={() => d && setDay(d)}
                      className={`aspect-square rounded-2xl text-sm transition ${d === null ? "invisible" : disabled ? "text-coffee/25" : d === day ? "bg-pine text-cream shadow" : "hover:bg-beige text-coffee/80"}`}>{d ?? ""}</button>
                  );
                })}
              </div>

              <h4 className="mt-8 text-xs uppercase tracking-widest text-sagedeep">Available times</h4>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {timeSlots.map(t => (
                  <button key={t} onClick={() => setTime(t)} className={`rounded-full py-2.5 text-sm border transition ${t === time ? "bg-pine text-cream border-pine" : "border-sand/80 hover:bg-beige text-coffee/80"}`}>{t}</button>
                ))}
              </div>

              <label className="mt-8 flex gap-3 text-sm text-coffee/70 items-start cursor-pointer">
                <input type="checkbox" checked={safety} onChange={e => setSafety(e.target.checked)} className="mt-1 accent-pine" />
                I confirm I have no severe mental health crisis requiring immediate support and that I am completing this intake in good faith.
              </label>

              <button disabled={!canConfirm} onClick={() => setConfirmed(true)} className="mt-8 w-full rounded-full bg-pine text-cream py-4 transition enabled:hover:bg-sagedeep disabled:opacity-40">Confirm booking</button>
              <p className="mt-3 text-xs text-coffee/50 text-center">Payment is only required for full sessions. The initial consultation is free and can be rescheduled anytime.</p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
