import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { GoldDivider, Ornament } from "@/components/site/Ornament";
import { useState } from "react";
import heroImg from "@/assets/hero-dancer.jpg";
import guruImg from "@/assets/guru-portrait.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri GuruKrupa NatyaKala Mandir — Bharatanatyam Dance Academy" },
      { name: "description", content: "Premier Bharatanatyam academy by Guru. Dr. Lakshmi Jaya Priyaa SR. Classical training, Arangetram guidance and online classes for students worldwide." },
      { property: "og:title", content: "Sri GuruKrupa NatyaKala Mandir" },
      { property: "og:description", content: "Preserving tradition through grace, rhythm and devotion. Bharatanatyam training for children, adults and international students." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Bharatanatyam dancer at temple" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, oklch(0.22 0.13 16 / 0.85) 0%, oklch(0.28 0.12 14 / 0.55) 55%, oklch(0.32 0.13 16 / 0.85) 100%)" }} />
      </div>

      <div className="container-x relative z-10 pt-32 pb-20 text-[color:var(--ivory)]">
        <div className="max-w-3xl fade-up">
          <span className="eyebrow left">Est. 2009 · Bharatanatyam</span>
          <h1 className="h-display mt-6 text-5xl md:text-6xl lg:text-7xl text-balance">
            Preserving Tradition Through{" "}
            <span className="font-serif-it text-[color:var(--gold-soft)]">Grace, Rhythm</span>{" "}
            and Devotion
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-2xl text-[color:var(--ivory)]/85 leading-relaxed">
            Professional Bharatanatyam training for children, adults and international
            students — rooted in the timeless lineage of South Indian classical art.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#admission" className="btn-primary">Book Free Trial Class</a>
            <a href="#courses" className="btn-outline">Explore Courses</a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              ["15+", "Years Experience"],
              ["500+", "Students Trained"],
              ["Online", "& Offline Classes"],
              ["Arangetram", "Guidance"],
            ].map(([k, v]) => (
              <div key={v} className="border-l border-[color:var(--gold)]/40 pl-4">
                <div className="font-display text-2xl md:text-3xl text-[color:var(--gold-soft)]">{k}</div>
                <div className="text-xs tracking-[0.2em] uppercase mt-1 text-[color:var(--ivory)]/70">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[color:var(--gold-soft)] float-slow">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="1" y="1" width="20" height="32" rx="10" />
          <circle cx="11" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHead({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: React.ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`h-display mt-6 text-4xl md:text-5xl text-balance ${light ? "text-[color:var(--ivory)]" : "text-[color:var(--maroon-deep)]"}`}>
        {title}
      </h2>
      <GoldDivider />
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-[color:var(--ivory)]/80" : "text-[color:var(--muted-foreground)]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="section-pad bg-mandala">
      <div className="container-x">
        <SectionHead
          eyebrow="About the Academy"
          title={<>About <span className="font-serif-it text-[color:var(--gold)]">Sri GuruKrupa</span> NatyaKala Mandir</>}
          subtitle="A sanctuary of classical Bharatanatyam where tradition meets discipline. We nurture artists who carry the soul of South Indian temple dance into the modern world."
        />

        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Our Vision",
              body: "To be a globally respected centre for Bharatanatyam, preserving its sanctity while embracing students across cultures and generations.",
              icon: "✦",
            },
            {
              title: "Our Mission",
              body: "To impart authentic Kalakshetra-inspired training, building dancers of technical strength, spiritual depth and theatrical grace.",
              icon: "❋",
            },
            {
              title: "Classical Values",
              body: "Bhakti, Shraddha and Sadhana — devotion, sincerity and disciplined practice form the foundation of every step taught here.",
              icon: "✺",
            },
          ].map((c) => (
            <div key={c.title} className="card-elegant p-10 text-center">
              <div className="text-3xl text-[color:var(--gold)] mb-4">{c.icon}</div>
              <h3 className="font-display text-2xl text-[color:var(--maroon-deep)]">{c.title}</h3>
              <div className="gold-divider my-5"><Ornament className="w-7 h-4" /></div>
              <p className="text-[color:var(--muted-foreground)] leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 border border-[color:var(--gold)]/40 rounded-2xl" />
            <img src={g2} alt="Bharatanatyam ensemble performance" className="rounded-xl shadow-[var(--shadow-elegant)] relative" loading="lazy" />
          </div>
          <div>
            <span className="chip">The Spirit of Bharatanatyam</span>
            <h3 className="h-display mt-5 text-3xl md:text-4xl text-[color:var(--maroon-deep)]">
              A 2,000-year-old offering, taught in its purest form.
            </h3>
            <p className="mt-6 text-[color:var(--muted-foreground)] leading-relaxed">
              Born in the temples of Tamil Nadu and codified in the Natya Shastra, Bharatanatyam unites
              <span className="text-[color:var(--maroon-deep)] font-medium"> Bhava</span> (expression),
              <span className="text-[color:var(--maroon-deep)] font-medium"> Raga</span> (melody) and
              <span className="text-[color:var(--maroon-deep)] font-medium"> Tala</span> (rhythm) into a single sacred offering.
            </p>
            <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
              At Sri GuruKrupa, every student is guided through the ancient Guru–Shishya parampara — a relationship
              of trust, discipline and devotion that shapes not just dancers, but artists for life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GURU ---------------- */
function Guru() {
  return (
    <section id="guru" className="section-pad relative bg-royal overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold) 0, transparent 35%)",
      }} />
      <div className="container-x relative">
        <SectionHead
          light
          eyebrow="Meet the Guru"
          title={<>Guru. Dr. <span className="font-serif-it text-[color:var(--gold-soft)]">Lakshmi Jaya Priyaa</span> SR</>}
          subtitle="Founder & Artistic Director — a torchbearer of the Kalakshetra tradition with over a decade and a half of teaching and stage devotion."
        />

        <div className="mt-20 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <div className="absolute -inset-3 rounded-2xl border border-[color:var(--gold)]/50" />
            <div className="absolute -inset-6 rounded-2xl border border-[color:var(--gold)]/20" />
            <img src={guruImg} alt="Guru Dr. Lakshmi Jaya Priyaa SR" className="rounded-xl relative shadow-[var(--shadow-elegant)]" loading="lazy" />
          </div>

          <div className="lg:col-span-3 text-[color:var(--ivory)]">
            <p className="text-lg leading-relaxed text-[color:var(--ivory)]/85">
              Trained in the rigorous Kalakshetra methodology and a recipient of the prestigious{" "}
              <em className="text-[color:var(--gold-soft)]">Natya Kalanidhi</em> honour, Guru Dr. Lakshmi Jaya Priyaa SR
              has dedicated her life to nurturing the next generation of Bharatanatyam artists.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                { t: "Awards & Honours", b: "Natya Kalanidhi · Yuva Kala Bharathi · State Kala Ratna" },
                { t: "Certifications", b: "Doctorate in Bharatanatyam · Senior Diploma — Kalakshetra" },
                { t: "Performances", b: "Chidambaram Natyanjali · Khajuraho Festival · Music Academy" },
                { t: "Teaching Philosophy", b: "Discipline through devotion — artistry through inner stillness." },
              ].map((x) => (
                <div key={x.t} className="border border-[color:var(--gold)]/30 rounded-xl p-5 glass-gold" style={{ background: "color-mix(in oklab, white 8%, transparent)" }}>
                  <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">{x.t}</div>
                  <div className="mt-2 text-[color:var(--ivory)]/90">{x.b}</div>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 font-serif-it text-xl md:text-2xl text-[color:var(--gold-soft)] border-l-2 border-[color:var(--gold)] pl-6">
              “A dancer is not made by the body, but by the silence she carries within while she moves.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COURSES ---------------- */
function Courses() {
  const courses = [
    {
      level: "Beginner",
      title: "Bharatanatyam Foundation",
      duration: "1 — 2 Years",
      points: ["Basic Adavus", "Postures & Stance", "Rhythm Training", "Hand Mudras"],
    },
    {
      level: "Intermediate",
      title: "Intermediate Program",
      duration: "2 — 3 Years",
      points: ["Jathiswarams", "Abhinaya Studies", "Natya Theory", "Tala Recognition"],
    },
    {
      level: "Advanced",
      title: "Advanced Program",
      duration: "3 — 4 Years",
      points: ["Varnam", "Padam & Javali", "Stage Performance", "Margam Repertoire"],
    },
    {
      level: "Arangetram",
      title: "Arangetram Preparation",
      duration: "12 — 18 Months",
      points: ["Individual Coaching", "Full Margam Choreography", "Stage Direction", "Costume & Jewellery Guidance"],
    },
    {
      level: "Online",
      title: "Online Bharatanatyam Classes",
      duration: "Flexible Batches",
      points: ["Live Zoom Classes", "International Students", "Recorded Material", "Personal Feedback"],
    },
    {
      level: "Workshop",
      title: "Short Workshops & Theory",
      duration: "1 — 4 Weeks",
      points: ["Abhinaya Intensive", "Natya Shastra Theory", "Devotional Compositions", "Festival Choreography"],
    },
  ];

  return (
    <section id="courses" className="section-pad">
      <div className="container-x">
        <SectionHead
          eyebrow="Courses Offered"
          title={<>Programs Rooted in <span className="font-serif-it text-[color:var(--gold)]">Tradition</span></>}
          subtitle="From the first adavu to the Arangetram stage — a graded journey designed by our Guru."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.map((c, i) => (
            <article key={c.title} className="card-elegant p-8 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="chip">{c.level}</span>
                <span className="text-xs text-[color:var(--muted-foreground)] tracking-widest">0{i + 1}</span>
              </div>
              <h3 className="h-display mt-6 text-2xl text-[color:var(--maroon-deep)]">{c.title}</h3>
              <div className="gold-divider my-4"><Ornament className="w-8 h-4" /></div>
              <ul className="space-y-2 text-[color:var(--muted-foreground)]">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-[color:var(--gold)] mt-1">◆</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-dashed border-[color:var(--gold)]/40 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--muted-foreground)]">Duration</div>
                  <div className="font-display text-[color:var(--maroon-deep)]">{c.duration}</div>
                </div>
                <a href="#admission" className="btn-ghost-maroon">Enquire</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
function WhyUs() {
  const items = [
    ["☸", "Certified Guru Guidance", "Personal mentorship by a doctorate-holding Guru."],
    ["✦", "Kalakshetra Methodology", "Authentic adavu-based grading and bani."],
    ["✺", "Individual Attention", "Small batches with personalised correction."],
    ["❋", "Flexible Online Classes", "Live HD sessions across time zones."],
    ["⚜", "Performance Opportunities", "Sabhas, festivals and temple events."],
    ["☼", "Exam Preparation", "Junior, Senior & Diploma certification support."],
    ["☉", "Cultural Development", "Shloka, language and Carnatic awareness."],
    ["✧", "Global Student Community", "Students across 12+ countries."],
  ];
  return (
    <section className="section-pad bg-[color:var(--ivory)]">
      <div className="container-x">
        <SectionHead eyebrow="Why Choose Us" title="Eight Reasons Families Trust Us" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(([icon, title, body]) => (
            <div key={title} className="card-elegant p-7">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl text-[color:var(--gold)] border border-[color:var(--gold)]/50 bg-[color:var(--maroon-deep)]/5">{icon}</div>
              <h3 className="mt-5 font-display text-lg text-[color:var(--maroon-deep)]">{title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function Achievements() {
  const items = [
    { img: g5, title: "Arangetram Milestones", body: "Over 80 successful Arangetrams under our Guru's guidance." },
    { img: g2, title: "Competition Winners", body: "Gold and silver at state and national Bharatanatyam festivals." },
    { img: g1, title: "Stage Performances", body: "Featured at Natyanjali, Music Academy and temple sabhas." },
  ];
  return (
    <section className="section-pad bg-mandala">
      <div className="container-x">
        <SectionHead eyebrow="Student Achievements" title={<>Honouring Our <span className="font-serif-it text-[color:var(--gold)]">Shishyas</span></>} />
        <div className="mt-16 grid md:grid-cols-3 gap-7">
          {items.map((a) => (
            <div key={a.title} className="card-elegant overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl text-[color:var(--maroon-deep)]">{a.title}</h3>
                <p className="mt-2 text-[color:var(--muted-foreground)] text-sm">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SCHEDULE ---------------- */
function Schedule() {
  const tabs = [
    { id: "kids", label: "Kids (5–10)", rows: [["Mon · Wed · Fri", "4:30 – 5:30 PM"], ["Sat", "9:00 – 10:00 AM"]] },
    { id: "teens", label: "Teens (11–17)", rows: [["Tue · Thu", "5:00 – 6:30 PM"], ["Sat", "10:30 AM – 12:00 PM"]] },
    { id: "adults", label: "Adults", rows: [["Mon · Wed", "7:00 – 8:30 PM"], ["Sun", "8:00 – 9:30 AM"]] },
    { id: "weekend", label: "Weekend Batch", rows: [["Sat", "2:00 – 4:00 PM"], ["Sun", "10:00 AM – 12:00 PM"]] },
    { id: "online", label: "Online Batch", rows: [["Tue · Thu (IST)", "9:00 – 10:00 PM"], ["Sat (EST friendly)", "8:00 – 9:30 AM IST"]] },
  ];
  const [active, setActive] = useState("kids");
  const current = tabs.find((t) => t.id === active)!;
  return (
    <section id="schedule" className="section-pad bg-[color:var(--ivory)]">
      <div className="container-x">
        <SectionHead eyebrow="Class Schedule" title="Find Your Batch" subtitle="Sample timings — confirm with the academy on enrollment." />

        <div className="mt-14 max-w-4xl mx-auto card-elegant overflow-hidden">
          <div className="flex flex-wrap gap-1 p-2 bg-[color:var(--maroon-deep)]/5 border-b border-[color:var(--gold)]/30">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2.5 text-xs tracking-[0.18em] uppercase rounded-full transition ${
                  active === t.id ? "bg-[color:var(--maroon-deep)] text-[color:var(--ivory)]" : "text-[color:var(--maroon-deep)] hover:bg-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="p-8">
            <table className="w-full">
              <tbody>
                {current.rows.map(([day, time]) => (
                  <tr key={day} className="border-b last:border-b-0 border-dashed border-[color:var(--gold)]/30">
                    <td className="py-4 font-display text-[color:var(--maroon-deep)]">{day}</td>
                    <td className="py-4 text-right text-[color:var(--muted-foreground)]">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href="#admission" className="btn-ghost-maroon mt-6">Reserve a Seat</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ONLINE LEARNING ---------------- */
function Online() {
  const features = [
    ["▶", "Live Interactive Classes", "Real-time corrections on Zoom HD."],
    ["⟳", "Recorded Practice Sessions", "Revisit every lesson on demand."],
    ["⌖", "International Student Support", "Time-zone friendly batches."],
    ["⌬", "Practice Material Access", "Notations, tala beats, lyrics."],
  ];
  const steps = ["Enquiry", "Free Trial", "Enrollment", "Begin Learning"];
  return (
    <section className="section-pad bg-royal text-[color:var(--ivory)] relative overflow-hidden">
      <div className="container-x relative">
        <SectionHead light eyebrow="Online Learning" title={<>Bharatanatyam, <span className="font-serif-it text-[color:var(--gold-soft)]">anywhere in the world</span></>} />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(([i, t, b]) => (
            <div key={t} className="glass-gold rounded-2xl p-6" style={{ background: "color-mix(in oklab, white 8%, transparent)" }}>
              <div className="text-3xl text-[color:var(--gold-soft)]">{i}</div>
              <div className="mt-4 font-display text-lg">{t}</div>
              <div className="mt-1 text-sm text-[color:var(--ivory)]/75">{b}</div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center text-[color:var(--gold-soft)] tracking-[0.4em] text-xs uppercase">Our Process</div>
          <div className="mt-8 grid md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s} className="relative text-center">
                <div className="mx-auto w-16 h-16 rounded-full border border-[color:var(--gold)] flex items-center justify-center font-display text-xl text-[color:var(--gold-soft)] bg-[color:var(--maroon-deep)]/40">
                  0{i + 1}
                </div>
                <div className="mt-4 font-display">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    { name: "Anitha R.", role: "Parent of student, Bengaluru", body: "My daughter's transformation under Lakshmi ma'am has been beyond dance — discipline, grace and confidence." },
    { name: "Meera S.", role: "Adult learner", body: "I joined at 34 with no background. The patient guidance and structured curriculum made me feel like an artist." },
    { name: "Priya N.", role: "Student, New Jersey USA", body: "The online classes feel exactly like a real studio. Our Guru's eye catches every detail across the screen." },
    { name: "Ravi K.", role: "Arangetram parent", body: "Our daughter's Arangetram was nothing short of magnificent. Every detail was thoughtful and authentic." },
  ];
  const [i, setI] = useState(0);
  return (
    <section className="section-pad bg-mandala">
      <div className="container-x">
        <SectionHead eyebrow="Testimonials" title="Voices From Our Parivar" />
        <div className="mt-14 max-w-3xl mx-auto card-elegant p-10 md:p-14 text-center">
          <div className="text-5xl text-[color:var(--gold)] font-serif-it">“</div>
          <p className="font-serif-it text-xl md:text-2xl text-[color:var(--maroon-deep)] leading-relaxed">
            {items[i].body}
          </p>
          <GoldDivider />
          <div className="font-display text-[color:var(--maroon-deep)] mt-2">{items[i].name}</div>
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted-foreground)] mt-1">{items[i].role}</div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {items.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[color:var(--maroon-deep)]" : "w-3 bg-[color:var(--gold)]/50"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const imgs = [
    { src: g1, h: "row-span-2" },
    { src: g3, h: "" },
    { src: g6, h: "row-span-2" },
    { src: g2, h: "" },
    { src: g5, h: "" },
    { src: g4, h: "" },
  ];
  return (
    <section id="gallery" className="section-pad bg-[color:var(--ivory)]">
      <div className="container-x">
        <SectionHead eyebrow="Gallery" title={<>Moments of <span className="font-serif-it text-[color:var(--gold)]">Devotion</span></>} subtitle="Performances · workshops · temple offerings" />
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {imgs.map((im, idx) => (
            <div key={idx} className={`overflow-hidden rounded-xl ring-1 ring-[color:var(--gold)]/30 group ${im.h}`}>
              <img src={im.src} alt="Bharatanatyam" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
function Events() {
  const evts = [
    { date: "15 · Feb", title: "Bharatanatyam Workshop", desc: "A 3-day intensive on Abhinaya for intermediate students." },
    { date: "10 · Mar", title: "Natyanjali Celebration", desc: "Annual offering of dance to Lord Nataraja at the temple." },
    { date: "05 · May", title: "Annual Day Showcase", desc: "Our students perform a curated margam for invited guests." },
    { date: "22 · Aug", title: "Arangetram Showcase", desc: "Three senior students debut their full margam on stage." },
  ];
  return (
    <section className="section-pad bg-mandala">
      <div className="container-x">
        <SectionHead eyebrow="Events & Workshops" title="Upcoming at the Mandir" />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {evts.map((e) => (
            <div key={e.title} className="card-elegant p-8 flex gap-6 items-start">
              <div className="shrink-0 w-20 h-20 rounded-xl bg-[color:var(--maroon-deep)] text-[color:var(--gold-soft)] flex flex-col items-center justify-center font-display border border-[color:var(--gold)]/40">
                <div className="text-xs tracking-widest">{e.date.split(" · ")[1]}</div>
                <div className="text-2xl leading-none">{e.date.split(" · ")[0]}</div>
              </div>
              <div>
                <h3 className="font-display text-xl text-[color:var(--maroon-deep)]">{e.title}</h3>
                <p className="text-[color:var(--muted-foreground)] mt-2 text-sm leading-relaxed">{e.desc}</p>
                <a href="#admission" className="btn-ghost-maroon mt-4">Register Interest</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEES ---------------- */
function Fees() {
  const tiers = [
    { name: "Beginner Program", level: "1 — 2 years", features: ["Twice-weekly classes", "Basic costume guidance", "Term assessment"] },
    { name: "Intermediate Program", level: "2 — 3 years", features: ["Thrice-weekly classes", "Abhinaya & theory", "Performance opportunities"], featured: true },
    { name: "Advanced Program", level: "3 — 4 years", features: ["Personal Margam pieces", "Stage coaching", "Exam preparation"] },
    { name: "Online Classes", level: "Flexible", features: ["Live HD batches", "Recorded sessions", "Personal feedback"] },
  ];
  return (
    <section className="section-pad bg-[color:var(--ivory)]">
      <div className="container-x">
        <SectionHead eyebrow="Fee Structure" title="Investment in the Art" subtitle="Please contact the academy for current fee details — we maintain affordable, transparent pricing." />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`card-elegant p-8 flex flex-col ${t.featured ? "bg-royal text-[color:var(--ivory)]" : ""}`}>
              <div className={`text-xs tracking-[0.25em] uppercase ${t.featured ? "text-[color:var(--gold-soft)]" : "text-[color:var(--gold)]"}`}>{t.level}</div>
              <h3 className={`mt-3 font-display text-xl ${t.featured ? "text-[color:var(--ivory)]" : "text-[color:var(--maroon-deep)]"}`}>{t.name}</h3>
              <div className="gold-divider my-4"><Ornament className="w-7 h-4" /></div>
              <ul className={`space-y-2 text-sm ${t.featured ? "text-[color:var(--ivory)]/85" : "text-[color:var(--muted-foreground)]"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2"><span className="text-[color:var(--gold)]">◆</span>{f}</li>
                ))}
              </ul>
              <div className={`mt-6 text-sm font-display ${t.featured ? "text-[color:var(--gold-soft)]" : "text-[color:var(--maroon-deep)]"}`}>
                Contact Academy for Updated Fee Details
              </div>
              <a href="#contact" className={t.featured ? "btn-outline mt-6" : "btn-ghost-maroon mt-6"}>Enquire</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ADMISSION FORM ---------------- */
function Admission() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="admission" className="section-pad bg-royal text-[color:var(--ivory)] relative overflow-hidden">
      <div className="container-x relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="eyebrow left">Online Admission</span>
          <h2 className="h-display mt-6 text-4xl md:text-5xl">Begin your <span className="font-serif-it text-[color:var(--gold-soft)]">Bharatanatyam</span> journey</h2>
          <p className="mt-6 text-[color:var(--ivory)]/80 leading-relaxed">
            Fill the form and our team will reach out within 24 hours to schedule your free trial class.
          </p>
          <div className="mt-8 space-y-3 text-sm text-[color:var(--ivory)]/85">
            {["Personalised batch placement", "Free 30-minute trial", "No prior experience required"].map((x) => (
              <div key={x} className="flex items-center gap-3"><span className="text-[color:var(--gold-soft)]">✦</span>{x}</div>
            ))}
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="glass-gold rounded-2xl p-8 md:p-10 space-y-5" style={{ background: "color-mix(in oklab, white 8%, transparent)" }}>
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl text-[color:var(--gold-soft)]">✦</div>
              <h3 className="font-display text-2xl mt-4">Pranams! Your request is received.</h3>
              <p className="text-[color:var(--ivory)]/80 mt-2 text-sm">We will contact you within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Student Name" />
                <Field label="Parent Name" />
                <Field label="Age" type="number" />
                <Field label="Phone" type="tel" />
                <Field label="Email" type="email" full />
                <Select label="Course Interested" options={["Beginner", "Intermediate", "Advanced", "Arangetram", "Online"]} />
                <Select label="Preferred Mode" options={["In-Studio", "Online", "Hybrid"]} />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">Message</label>
                <textarea rows={3} className="mt-2 w-full bg-[color:var(--ivory)]/10 border border-[color:var(--gold)]/30 rounded-lg px-4 py-3 text-[color:var(--ivory)] placeholder-[color:var(--ivory)]/40 focus:outline-none focus:border-[color:var(--gold)]" placeholder="Tell us about your interest…" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Request Admission</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
function Field({ label, type = "text", full }: { label: string; type?: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">{label}</label>
      <input type={type} required className="mt-2 w-full bg-[color:var(--ivory)]/10 border border-[color:var(--gold)]/30 rounded-lg px-4 py-3 text-[color:var(--ivory)] focus:outline-none focus:border-[color:var(--gold)]" />
    </div>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">{label}</label>
      <select className="mt-2 w-full bg-[color:var(--ivory)]/10 border border-[color:var(--gold)]/30 rounded-lg px-4 py-3 text-[color:var(--ivory)] focus:outline-none focus:border-[color:var(--gold)]">
        {options.map((o) => <option key={o} className="text-[color:var(--maroon-deep)]">{o}</option>)}
      </select>
    </div>
  );
}

/* ---------------- FEE PAYMENT PORTAL ---------------- */
function FeePortal() {
  return (
    <section className="section-pad bg-[color:var(--ivory)]">
      <div className="container-x">
        <SectionHead eyebrow="Fee Payment Portal" title="Seamless online payments" subtitle="A preview of our parent payment dashboard." />

        <div className="mt-14 card-elegant overflow-hidden">
          <div className="bg-[color:var(--maroon-deep)] text-[color:var(--ivory)] px-8 py-5 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[color:var(--gold)] text-[color:var(--maroon-deep)] flex items-center justify-center font-display">A</div>
              <div>
                <div className="text-sm font-display">Welcome, Ananya</div>
                <div className="text-[11px] tracking-widest text-[color:var(--gold-soft)] uppercase">Student ID · GKNM-1742</div>
              </div>
            </div>
            <span className="chip" style={{ background: "color-mix(in oklab, var(--gold) 25%, transparent)", color: "var(--ivory)", borderColor: "var(--gold)" }}>Active Account</span>
          </div>

          <div className="p-8 grid lg:grid-cols-3 gap-6">
            <div className="card-elegant p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Current Status</div>
              <div className="mt-3 font-display text-2xl text-[color:var(--maroon-deep)]">All Cleared</div>
              <div className="mt-1 text-sm text-[color:var(--muted-foreground)]">Term: Jan — Mar 2026</div>
              <button className="btn-ghost-maroon mt-5">Download Receipt</button>
            </div>
            <div className="card-elegant p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Upcoming Due</div>
              <div className="mt-3 font-display text-2xl text-[color:var(--maroon-deep)]">Apr 05, 2026</div>
              <div className="mt-1 text-sm text-[color:var(--muted-foreground)]">Term: Apr — Jun 2026</div>
              <button className="btn-primary mt-5">Pay Now</button>
            </div>
            <div className="card-elegant p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">Payment Methods</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {["UPI", "Debit Card", "Credit Card", "Net Banking"].map((m) => (
                  <div key={m} className="border border-[color:var(--gold)]/40 rounded-lg py-3 text-center font-display text-[color:var(--maroon-deep)]">{m}</div>
                ))}
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[color:var(--muted-foreground)]">Secured by Razorpay (preview)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STUDENT PORTAL ---------------- */
function StudentPortal() {
  const cards = [
    ["Attendance", "92%", "Excellent"],
    ["Practice Videos", "24", "Available"],
    ["Assignments", "3", "Pending Upload"],
    ["Progress Report", "B+", "Last Term"],
    ["Exam Results", "Passed", "Junior Grade"],
    ["Certificates", "2", "Issued"],
  ];
  return (
    <section className="section-pad bg-mandala">
      <div className="container-x">
        <SectionHead eyebrow="Student Portal" title="Track your sadhana" subtitle="A personalised dashboard for every enrolled student." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map(([t, v, sub]) => (
            <div key={t} className="card-elegant p-7">
              <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{t}</div>
              <div className="mt-3 font-display text-4xl text-[color:var(--maroon-deep)]">{v}</div>
              <div className="mt-1 text-sm text-[color:var(--muted-foreground)]">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    { q: "What age can students join?", a: "Children from 5 years can begin our foundation program. We welcome teens, adults and even senior learners." },
    { q: "Are online classes available?", a: "Yes — we conduct live HD Zoom batches for students across India and abroad, with recorded sessions for revision." },
    { q: "How long does Arangetram preparation take?", a: "Typically 12 to 18 months of focused training after completing the advanced program." },
    { q: "Are trial classes available?", a: "Absolutely. A complimentary 30-minute trial is offered to every prospective student." },
    { q: "Can adults learn Bharatanatyam?", a: "Many of our finest students began as adults. Our adult batches are designed with pacing and care." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-[color:var(--ivory)]">
      <div className="container-x">
        <SectionHead eyebrow="Frequently Asked" title="Your Questions, Answered" />
        <div className="mt-14 max-w-3xl mx-auto space-y-3">
          {items.map((it, i) => (
            <div key={i} className="card-elegant overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full px-7 py-5 flex items-center justify-between text-left">
                <span className="font-display text-[color:var(--maroon-deep)] text-lg">{it.q}</span>
                <span className={`text-[color:var(--gold)] text-xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-7 pb-6 text-[color:var(--muted-foreground)] leading-relaxed">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="section-pad bg-mandala">
      <div className="container-x">
        <SectionHead eyebrow="Contact Us" title="Visit the Mandir" subtitle="We welcome you for a personal visit, a trial class or a conversation." />

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <div className="card-elegant p-8 space-y-6">
            {[
              ["Address", "Sri GuruKrupa NatyaKala Mandir,\n12, Temple Street, Mylapore,\nChennai 600 004, India"],
              ["Phone", "+91 98xxx xxx10"],
              ["Email", "academy@gurukrupanatya.in"],
              ["Hours", "Mon – Sat · 8 AM – 9 PM IST"],
            ].map(([t, b]) => (
              <div key={t} className="border-l-2 border-[color:var(--gold)] pl-5">
                <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)]">{t}</div>
                <div className="mt-1 text-[color:var(--maroon-deep)] whitespace-pre-line font-display">{b}</div>
              </div>
            ))}
            <a href="https://wa.me/919800000000" target="_blank" rel="noreferrer" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12S18.6 0 12 0zm0 22c-1.8 0-3.5-.5-5-1.3l-.4-.2-3.7.9.9-3.6-.2-.4C2.5 15.7 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[color:var(--gold)]/40 min-h-[400px]">
            <iframe
              title="Academy location"
              src="https://www.google.com/maps?q=Kapaleeshwarar+Temple+Mylapore+Chennai&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0 w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-[color:var(--maroon-deep)] text-[color:var(--ivory)] pt-20 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="w-12 h-12 rounded-full ring-1 ring-[color:var(--gold)]/50" />
              <div className="font-display text-sm tracking-[0.25em] uppercase">Sri GuruKrupa</div>
            </div>
            <p className="mt-5 text-sm text-[color:var(--ivory)]/70 leading-relaxed">
              A sacred space for Bharatanatyam — honouring tradition, nurturing artistry,
              welcoming the world.
            </p>
          </div>

          <FooterCol title="Quick Links" items={[["About", "#about"], ["Meet the Guru", "#guru"], ["Schedule", "#schedule"], ["Gallery", "#gallery"], ["Contact", "#contact"]]} />
          <FooterCol title="Courses" items={[["Beginner", "#courses"], ["Intermediate", "#courses"], ["Advanced", "#courses"], ["Arangetram", "#courses"], ["Online Classes", "#courses"]]} />

          <div>
            <h4 className="font-display text-xs tracking-[0.3em] uppercase text-[color:var(--gold-soft)]">Connect</h4>
            <div className="mt-5 space-y-2 text-sm text-[color:var(--ivory)]/80">
              <div>12, Temple Street, Mylapore</div>
              <div>Chennai 600 004 · India</div>
              <div>+91 98xxx xxx10</div>
              <div>academy@gurukrupanatya.in</div>
            </div>
            <div className="mt-5 flex gap-3">
              {["IG", "FB", "YT"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-[color:var(--gold)]/50 flex items-center justify-center text-xs text-[color:var(--gold-soft)] hover:bg-[color:var(--gold)] hover:text-[color:var(--maroon-deep)] transition">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[color:var(--gold)]/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--ivory)]/60">
          <div>© 2026 Sri GuruKrupa NatyaKala Mandir. All rights reserved.</div>
          <div className="tracking-[0.3em] uppercase text-[color:var(--gold-soft)]">Nritta · Nritya · Natya</div>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="font-display text-xs tracking-[0.3em] uppercase text-[color:var(--gold-soft)]">{title}</h4>
      <ul className="mt-5 space-y-2 text-sm text-[color:var(--ivory)]/80">
        {items.map(([l, h]) => (
          <li key={l}><a href={h} className="hover:text-[color:var(--gold-soft)] transition">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- ROOT ---------------- */
function Index() {
  return (
    <div className="bg-[color:var(--ivory)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Guru />
        <Courses />
        <WhyUs />
        <Achievements />
        <Schedule />
        <Online />
        <Testimonials />
        <Gallery />
        <Events />
        <Fees />
        <Admission />
        <FeePortal />
        <StudentPortal />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
