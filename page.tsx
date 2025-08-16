import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div id="home">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="mx-auto max-w-7xl container-px pt-16 pb-20">
            <div className="flex flex-col items-center text-center gap-6">
              <span className="badge">AI-Powered • API-first • Built for Scale</span>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Stop Fraud <span className="text-brand-600">Before It Happens</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                FraudStream.ai protects your revenue with real-time risk scoring, behavioral anomaly detection,
                and automated actions—from signup to checkout.
              </p>
              <div className="flex items-center gap-3">
                <a href="#demo" className="btn btn-primary h-12 px-6">Request Demo</a>
                <a href="#contact" className="btn btn-outline h-12 px-6">Talk to Sales</a>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mx-auto max-w-7xl container-px">
              <div className="rounded-2xl border shadow-soft p-4 md:p-6">
                <img src="/hero-illustration.png" alt="Fraud prevention dashboard" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Logos / Social proof */}
        <section aria-label="Trusted by" className="py-12">
          <div className="mx-auto max-w-7xl container-px text-center">
            <p className="text-gray-500 text-sm uppercase tracking-widest">Trusted by teams in fintech & e‑commerce</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-6 opacity-80">
              {["/icons/logo1.svg","/icons/logo2.svg","/icons/logo3.svg","/icons/logo4.svg","/icons/logo5.svg"].map((src, i) => (
                <img key={i} src={src} alt={"Logo "+(i+1)} className="h-10 mx-auto" />
              ))}
            </div>
          </div>
        </section>

        {/* Problem & Solutions */}
        <section id="solutions" className="py-16 border-t">
          <div className="mx-auto max-w-7xl container-px grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-semibold">Fraud is complex. Stopping it shouldn’t be.</h2>
              <p className="text-gray-600">
                Chargebacks, account takeovers, synthetic identities, bot attacks—fraud drains revenue and trust.
                FraudStream.ai gives you a unified layer of defense that adapts in real time.
              </p>
              <ul className="grid gap-3 text-gray-700">
                <li>• Real‑time transaction & account risk scores</li>
                <li>• Behavioral signals & device intelligence</li>
                <li>• Velocity checks & graph/link analysis</li>
                <li>• Auto‑decisions, step‑up auth, or review queues</li>
              </ul>
            </div>
            <div className="rounded-2xl border shadow-soft p-6">
              <div className="grid grid-cols-2 gap-4">
                {["Real-time scoring","Anomaly detection","Graph insights","Policy engine"].map((t,i)=>(
                  <div key={i} className="rounded-xl border p-4">
                    <h3 className="font-medium">{t}</h3>
                    <p className="text-sm text-gray-600 mt-1">Millisecond decisions powered by ML and rules.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 border-t">
          <div className="mx-auto max-w-7xl container-px">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">What you get</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {title:"Real‑time API",desc:"Score signups, logins, and payments via a simple REST API.", icon:"/icons/bolt.svg"},
                {title:"Behavioral ML",desc:"Detect anomalies in clicks, keystrokes, velocity, and geolocation.", icon:"/icons/brain.svg"},
                {title:"Device & IP Intel",desc:"Fingerprinting, proxy/VPN/Tor checks, ASN risk, IP reputation.", icon:"/icons/shield.svg"},
                {title:"Graph Analysis",desc:"Spot collusion via shared devices, cards, emails, or addresses.", icon:"/icons/graph.svg"},
                {title:"Policy Engine",desc:"Flexible rules to auto‑block, allow, or route to review.", icon:"/icons/controls.svg"},
                {title:"Dashboards",desc:"Monitor trends, false positives, and approve/decline rates.", icon:"/icons/chart.svg"},
              ].map((f,i)=>(
                <div key={i} className="rounded-2xl border p-6 hover:shadow-soft transition">
                  <div className="h-10"><img src={f.icon} alt="" className="h-10 w-10" /></div>
                  <h3 className="font-medium mt-4">{f.title}</h3>
                  <p className="text-gray-600 mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="py-16 border-t bg-gray-50">
          <div className="mx-auto max-w-7xl container-px">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Start protecting in 3 steps</h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {step:"1. Connect",desc:"Drop in our SDK or call the REST API for instant scores."},
                {step:"2. Analyze",desc:"We fuse device, behavior, and network signals with ML."},
                {step:"3. Protect",desc:"Auto‑block risky events, or trigger step‑up/KYC review."},
              ].map((s,i)=>(
                <div key={i} className="rounded-2xl border bg-white p-6">
                  <div className="badge mb-3">Step {i+1}</div>
                  <h3 className="font-medium">{s.step}</h3>
                  <p className="text-gray-600 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section id="security" className="py-16 border-t">
          <div className="mx-auto max-w-7xl container-px grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">Security & Compliance</h2>
              <p className="text-gray-600 mt-3">We follow industry best practices and are working towards SOC 2 Type II and ISO 27001. Data encrypted in‑transit and at rest, regional data residency options, RBAC, and audit logs.</p>
              <ul className="mt-4 grid gap-2 text-gray-700">
                <li>• Encryption: TLS 1.2+, AES‑256 at rest</li>
                <li>• Access: SSO/SAML, MFA, RBAC</li>
                <li>• Privacy: GDPR-ready, DPA on request</li>
                <li>• Uptime: Status page & SLAs</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-6">
              <div className="grid grid-cols-2 gap-4">
                {["SOC 2 (in‑progress)","ISO 27001 (in‑progress)","GDPR-ready","MFA/SSO"].map((t,i)=>(
                  <div key={i} className="rounded-xl border p-4 text-center">
                    <p className="font-medium">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing teaser */}
        <section id="pricing" className="py-16 border-t bg-gray-50">
          <div className="mx-auto max-w-7xl container-px">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Simple, usage‑based pricing</h2>
            <p className="text-gray-600 text-center mt-2">Start free. Scale as you grow. Talk to us for enterprise.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {[
                {name:"Starter",price:"Free",desc:"For early projects",cta:"Get Started"},
                {name:"Growth",price:"Custom",desc:"For scaling teams",cta:"Request Quote"},
                {name:"Enterprise",price:"Custom",desc:"SLA, SSO, RBAC",cta:"Contact Sales"},
              ].map((p,i)=>(
                <div key={i} className="rounded-2xl border bg-white p-6 text-center">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-3xl mt-3">{p.price}</p>
                  <p className="text-gray-600 mt-1">{p.desc}</p>
                  <a href="#contact" className="btn btn-primary h-11 px-5 mt-4 inline-block">{p.cta}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section id="demo" className="py-16 border-t">
          <div className="mx-auto max-w-3xl container-px">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">Request a demo</h2>
            <form method="post" action="/api/lead" className="mt-8 grid gap-4 rounded-2xl border p-6 shadow-soft">
              <div className="grid md:grid-cols-2 gap-4">
                <input required name="name" placeholder="Your name" className="h-11 rounded-md border px-3 outline-none focus:ring-2 focus:ring-brand-200" />
                <input required name="email" type="email" placeholder="Work email" className="h-11 rounded-md border px-3 outline-none focus:ring-2 focus:ring-brand-200" />
              </div>
              <input name="company" placeholder="Company (optional)" className="h-11 rounded-md border px-3 outline-none focus:ring-2 focus:ring-brand-200" />
              <textarea name="message" placeholder="Tell us your use case" rows={4} className="rounded-md border p-3 outline-none focus:ring-2 focus:ring-brand-200" />
              <button className="btn btn-primary h-11 px-5 w-full md:w-auto">Request Demo</button>
              <p className="text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
