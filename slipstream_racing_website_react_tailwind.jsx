/*
Slipstream Racing — React single-file app (TailwindCSS)

How to use:
1. This is a single-file React component (default export App).
2. Project expects TailwindCSS and react-router-dom installed.
   - If you prefer plain HTML/CSS, tell me and I will convert.
3. Replace placeholders: logos, social links, sponsor email, PayPal link.
4. Updates page stores images in browser (localStorage) as demo. For production, connect to a storage backend (Supabase / Firebase / your host).

Files to replace after preview:
- /public/logo.png (or update the <img src>)
- env or config for real payment link and real work email

Colors: blue + black (user requested)
Team info included from user.

*/

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

// Helper: social links (placeholders)
const SOCIAL = {
  instagram: "https://instagram.com/slipstreamracing",
  twitter: "https://twitter.com/slipstreamracing",
  facebook: "https://facebook.com/slipstreamracing",
  linkedin: "https://linkedin.com/company/slipstreamracing"
};

const SPONSOR_EMAIL = "sponsors@slipstreamracing.com"; // replace with your real work email
const DONATE_LINK = "https://www.paypal.com/donate/?hosted_button_id=REPLACE_ME"; // replace with real donate link

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">
        <Header />
        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/work" element={<Work />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-700">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-black font-bold">S</div>
          <div>
            <h1 className="text-xl font-bold">Slipstream Racing</h1>
            <p className="text-xs text-slate-300">F1 in Schools Team</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/updates">Updates</NavLink>
          <NavLink to="/donate">Donate</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-sm text-slate-200 hover:text-white">
      {children}
    </Link>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="px-3 py-2 border rounded border-slate-700">
        Menu
      </button>
      {open && (
        <div className="mt-2 bg-slate-900 p-3 rounded">
          <Link to="/" className="block py-1" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/team" className="block py-1" onClick={() => setOpen(false)}>Team</Link>
          <Link to="/work" className="block py-1" onClick={() => setOpen(false)}>Work</Link>
          <Link to="/updates" className="block py-1" onClick={() => setOpen(false)}>Updates</Link>
          <Link to="/donate" className="block py-1" onClick={() => setOpen(false)}>Donate</Link>
          <Link to="/contact" className="block py-1" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
}

function Home() {
  return (
    <section className="text-center py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-400">Slipstream Racing</h2>
        <p className="text-slate-300 mb-6">Designing the fastest, most aerodynamic F1 model using sustainable materials — and to win.</p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <Feature title="Our Goals">To design the fastest, most aerodynamic F1 car using sustainable materials and to win.</Feature>
          <Feature title="What We Do">Car design, CAD, sponsorship outreach, marketing, manufacturing and testing.</Feature>
          <Feature title="Get Involved">Donate, sponsor, or volunteer. See the Donate page for options.</Feature>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/updates" className="px-5 py-3 rounded-lg bg-blue-600 text-black font-semibold">Latest Updates</Link>
          <Link to="/donate" className="px-5 py-3 rounded-lg border border-slate-700">Donate</Link>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, children }) {
  return (
    <div className="p-6 bg-slate-800 rounded-lg text-left">
      <h3 className="font-semibold text-lg text-blue-300 mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{children}</p>
    </div>
  );
}

function Team() {
  const members = [
    { name: "Aryan Mulajker", role: "Management" },
    { name: "Rory O'Connor", role: "Marketing" },
    { name: "Aaron Zhang", role: "Engineering" },
    { name: "Gavin Cullen", role: "Management" },
    { name: "Malachy Ross", role: "Marketing" },
    { name: "Ivan Tew", role: "Engineering" }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Meet the Team</h2>
      <p className="text-slate-300 mb-6">A compact, skilled group focused on engineering, marketing and management.</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((m) => (
          <div key={m.name} className="p-4 bg-slate-800 rounded-lg">
            <div className="w-full h-32 bg-slate-700 rounded-md mb-3 flex items-center justify-center">Photo</div>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-slate-300">{m.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-lg text-blue-300">Team Breakdown</h3>
        <ul className="text-slate-300 list-disc pl-5 mt-2">
          <li>Marketing: Rory O'Connor, Malachy Ross</li>
          <li>Engineering: Ivan Tew, Aaron Zhang</li>
          <li>Management: Gavin Cullen, Aryan Mulajker</li>
        </ul>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Our Work</h2>
      <p className="text-slate-300 mb-6">We focus on the full pipeline: design, CAD, sponsor outreach and prototype testing.</p>

      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Design & CAD">Detailed CAD models, CFD simulations and iterative design reviews.</Card>
        <Card title="Manufacturing">CNC, 3D printing, and precision finishing for race-ready models.</Card>
        <Card title="Marketing & Sponsorship">Branding, sponsor proposals, social media and event representation.</Card>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-300 mb-2">How to review our technical files</h3>
        <ol className="list-decimal pl-6 text-slate-300">
          <li>CAD files (STEP/SLDPRT) — available on request to sponsors and mentors.</li>
          <li>CFD reports and test data — shared in PDF form during sponsor meetings.</li>
          <li>Prototype photos and test videos — see Updates page.</li>
        </ol>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-slate-800 p-5 rounded-lg">
      <h4 className="font-semibold text-blue-300 mb-2">{title}</h4>
      <p className="text-slate-300 text-sm">{children}</p>
    </div>
  );
}

// Updates page: client-side gallery that persists in localStorage
function Updates() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const raw = localStorage.getItem("slipstream_updates");
    if (raw) setImages(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("slipstream_updates", JSON.stringify(images));
  }, [images]);

  function handleFiles(files) {
    const toAdd = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        toAdd.push({ id: Date.now() + Math.random(), src: e.target.result, name: file.name });
        if (toAdd.length === files.length) setImages((s) => [...toAdd, ...s]);
      };
      reader.readAsDataURL(file);
    });
  }

  function onDrop(e) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function onSelect(e) {
    handleFiles(e.target.files);
  }

  function removeImage(id) {
    setImages((s) => s.filter((i) => i.id !== id));
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Updates & Gallery</h2>
      <p className="text-slate-300 mb-4">Upload photos of your build progress. (This demo saves images to your browser. For a public gallery use a cloud storage backend.)</p>

      <div className="mb-4">
        <div onDrop={onDrop} onDragOver={(e) => e.preventDefault()} className="p-6 border-2 border-dashed border-slate-700 rounded-lg text-center">
          <p className="text-slate-300 mb-3">Drag & drop images here or</p>
          <input type="file" accept="image/*" multiple onChange={onSelect} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.length === 0 && <p className="text-slate-400">No updates yet.</p>}
        {images.map((img) => (
          <div key={img.id} className="bg-slate-800 rounded overflow-hidden relative">
            <img src={img.src} alt={img.name} className="w-full h-48 object-cover" />
            <button onClick={() => removeImage(img.id)} className="absolute top-2 right-2 bg-black/60 px-2 py-1 text-sm rounded">Remove</button>
            <div className="p-2 text-slate-300 text-sm">{img.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Donate() {
  const [amount, setAmount] = useState(20);
  const navigate = useNavigate();

  function startDonate() {
    // For demo we will open the placeholder PayPal donate link — replace with a real link.
    window.open(DONATE_LINK, "_blank");
  }

  return (
    <section className="max-w-2xl">
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Support Slipstream Racing</h2>
      <p className="text-slate-300 mb-4">Your support helps us buy materials, pay for manufacturing and travel to competitions.</p>

      <div className="bg-slate-800 p-6 rounded">
        <label className="block text-slate-300">Donation amount (GBP)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="mt-2 w-full p-2 rounded bg-slate-700" />
        <div className="flex gap-3 mt-4">
          <button onClick={startDonate} className="px-4 py-2 bg-blue-600 text-black rounded font-semibold">Donate via PayPal</button>
          <button onClick={() => navigate('/contact')} className="px-4 py-2 border rounded">Sponsor / Contact</button>
        </div>

        <div className="mt-4 text-slate-400 text-sm">
          If you are a sponsor and need an invoice or technical files, please email <a href={`mailto:${SPONSOR_EMAIL}`} className="text-blue-300">{SPONSOR_EMAIL}</a>.
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-2xl">
      <h2 className="text-3xl font-bold text-blue-300 mb-4">Contact & Socials</h2>
      <p className="text-slate-300 mb-4">For sponsorships, media and inquiries email <a className="text-blue-300" href={`mailto:${SPONSOR_EMAIL}`}>{SPONSOR_EMAIL}</a>.</p>

      <div className="bg-slate-800 p-6 rounded">
        <h4 className="font-semibold mb-2">Follow us</h4>
        <div className="flex gap-3 mb-4">
          <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-slate-700">Instagram</a>
          <a href={SOCIAL.twitter} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-slate-700">Twitter</a>
          <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-slate-700">Facebook</a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-slate-700">LinkedIn</a>
        </div>

        <h4 className="font-semibold mb-2">Quick contact form</h4>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    // Demo: open mailto to simulate sending. For production hook to an email provider or server.
    window.location.href = `mailto:${SPONSOR_EMAIL}?subject=${encodeURIComponent("Sponsor/Inquiry from " + name)}&body=${encodeURIComponent(message + '\n\nContact: ' + email)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full p-2 rounded bg-slate-700" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="w-full p-2 rounded bg-slate-700" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="w-full p-2 rounded bg-slate-700" rows={4} required />
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-black rounded font-semibold">Send</button>
        {sent && <span className="ml-3 text-slate-300">Opening email client...</span>}
      </div>
    </form>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-700 mt-12 py-6">
      <div className="container mx-auto px-6 text-center text-slate-400">
        © {new Date().getFullYear()} Slipstream Racing — Built with passion. Follow us on social media.
      </div>
    </footer>
  );
}

/*
Notes & next steps I can do for you if you'd like:
- Convert to a static HTML/CSS bundle (no React) for easy hosting.
- Add real PayPal/Stripe donation integration.
- Connect Updates gallery to cloud storage (Firebase / Supabase) so visitors can see uploads.
- Create downloadable sponsorship deck / PDF and a page to host it.
- Replace placeholders with your logos, photos and real social links.

Tell me which of the above you want next and I'll update the code.
*/
