import { useEffect, useState } from "react";
import { Spiral } from "./components/Spiral";
import { HomePage } from "./pages/HomePage";
import { TreatmentsPage } from "./pages/TreatmentsPage";
import { TreatmentPage } from "./pages/TreatmentPage";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogPage } from "./pages/BlogPage";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#/treatments" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Eliz", href: "#about" },
  { label: "Blogs", href: "#/blogs" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Me", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  useEffect(() => {
    if (!hash.startsWith("#/") && hash.length > 1) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash]);

  const treatmentSlug = hash.startsWith("#/treatment/") ? hash.slice("#/treatment/".length) : null;
  const blogSlug = hash.startsWith("#/blog/") ? hash.slice("#/blog/".length) : null;
  const isTreatments = hash === "#/treatments";
  const isBlogs = hash === "#/blogs";

  return (
    <div className="min-h-screen font-body text-coffee bg-cream">
      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-sand/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3 text-pine">
            <Spiral className="w-8 h-8" />
            <span className="font-display text-xl tracking-wide">Eliz Moreno</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-coffee/70">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="hover:text-pine transition">{l.label}</a>
            ))}
          </nav>
          <a href="#booking" className="hidden md:inline-flex rounded-full bg-pine text-cream px-5 py-2.5 text-sm hover:bg-sagedeep transition">
            Book a consultation
          </a>
          <button className="md:hidden text-pine" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm text-coffee/80">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="#booking" onClick={() => setMenuOpen(false)} className="rounded-full bg-pine text-cream text-center px-5 py-2.5">Book a consultation</a>
          </nav>
        )}
      </header>

      {isTreatments ? (
        <TreatmentsPage />
      ) : treatmentSlug ? (
        <TreatmentPage slug={treatmentSlug} />
      ) : isBlogs ? (
        <BlogsPage />
      ) : blogSlug ? (
        <BlogPage slug={blogSlug} />
      ) : (
        <HomePage />
      )}

      {/* ---------- FOOTER CTA + FOOTER ---------- */}
      <section id="contact" className="bg-sage/15 border-t border-sage/20 py-14 text-center px-6">
        <h3 className="font-display text-3xl text-pine">Ready to begin your transformation?</h3>
        <a href="#booking" className="inline-block mt-6 rounded-full bg-pine text-cream px-8 py-4 hover:bg-sagedeep transition">Book a consultation</a>
      </section>

      <footer className="bg-coffee text-cream/70 py-14">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 text-cream"><Spiral className="w-7 h-7" /><span className="font-display text-lg">Eliz Moreno</span></div>
            <p className="mt-4 text-sm leading-relaxed">Hypnotherapy &amp; personal transformation.<br />Transformation from the inside out.</p>
          </div>
          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#home" className="hover:text-cream">Home</a></li>
              <li><a href="#/treatments" className="hover:text-cream">Treatments</a></li>
              <li><a href="#testimonials" className="hover:text-cream">Testimonials</a></li>
              <li><a href="#/blogs" className="hover:text-cream">Blogs</a></li>
              <li><a href="#faq" className="hover:text-cream">FAQ</a></li>
              <li><a href="#about" className="hover:text-cream">About Eliz</a></li>
              <li><a href="#contact" className="hover:text-cream">Contact Me</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-cream">Instagram</a></li>
              <li><a href="#" className="hover:text-cream">Facebook</a></li>
              <li><a href="https://wa.me/" className="hover:text-cream">WhatsApp</a></li>
              <li><a href="mailto:hola@elizmoreno.com" className="hover:text-cream">hola@elizmoreno.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cream font-semibold text-sm uppercase tracking-widest">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-cream">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cream">Terms</a></li>
              <li><a href="#" className="hover:text-cream">Cookies</a></li>
            </ul>
          </div>
        </div>
        <p className="max-w-6xl mx-auto px-6 mt-10 text-xs text-cream/40">© {new Date().getFullYear()} Eliz Moreno. All rights reserved.</p>
      </footer>
    </div>
  );
}
