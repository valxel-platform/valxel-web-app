import { useMemo, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { pillars, products, steps } from "@/lib/content";
import { Mark, Wordmark } from "@/components/mark";

const verticals = ["All", ...Array.from(new Set(products.map((p) => p.vertical)))];

export function HomePage() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<(typeof products)[number]["id"]>("emr");
  const [sent, setSent] = useState(false);

  const shown = useMemo(
    () => (filter === "All" ? products : products.filter((p) => p.vertical === filter)),
    [filter],
  );
  const focus = products.find((p) => p.id === active) ?? products[0];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <Mark className="h-8 w-auto" />
            <Wordmark className="h-4 w-auto" />
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href="#model" className="hover:text-ink">
              Model
            </a>
            <a href="#pillars" className="hover:text-ink">
              Pillars
            </a>
            <a href="#products" className="hover:text-ink">
              Products
            </a>
            <a
              href="/valxel-static.zip"
              download="valxel-static.zip"
              className="rounded-full border border-line px-4 py-2 font-medium text-ink"
            >
              Download site
            </a>
            <a
              href="#briefing"
              className="rounded-full bg-navy px-4 py-2 font-medium text-paper hover:bg-navy/90"
            >
              Request a briefing
            </a>
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 text-sm md:hidden">
            {[
              ["Model", "#model"],
              ["Pillars", "#pillars"],
              ["Products", "#products"],
              ["Briefing", "#briefing"],
              ["Download site", "/valxel-static.zip"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-2 py-3 text-ink"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>
      <a
        href="/valxel-static.zip"
        download="valxel-static.zip"
        className="block bg-navy px-5 py-3 text-center text-sm font-medium text-paper"
      >
        Download the static site for AWS
      </a>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:pt-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">
              Innovating across life · systems · future
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-none tracking-tight md:text-6xl">
              Vertical software,
              <span className="block text-cyan">built 85% by agents.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Valxel engineers purpose-built products for exceptional customer
              experiences. Human effort stays at architectural intent. The rest of
              the software development lifecycle runs on an agentic framework.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-cyan px-5 font-medium text-navy"
              >
                See the products
                <ArrowRight size={16} />
              </a>
              <a
                href="#model"
                className="inline-flex h-12 items-center rounded-full border border-line px-5 text-ink"
              >
                The engineering model
              </a>
            </div>
          </div>
          <div className="rounded-card border border-line bg-deep p-6">
            <div className="flex items-end justify-between">
              <p className="font-display text-sm tracking-wide text-muted">AGENTIC SDLC</p>
              <p className="font-display text-5xl font-bold leading-none text-cyan">85%</p>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-panel">
              <div className="h-full w-[85%] rounded-full bg-linear-to-r from-cyan to-blue" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Stat k="Autonomous" v="Build, test, upkeep" />
              <Stat k="Human" v="15–20% intent" />
              <Stat k="From scratch" v="No legacy rewrite" />
              <Stat k="Overhead" v="Self-healing code" />
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-deep">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-faint">The bottleneck</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
                Traditional delivery is still mostly manual.
              </h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>
                Engineering teams spend months on boilerplate, then more months
                paying down maintenance. The product the customer feels is whatever
                is left after that debt.
              </p>
              <p>
                Valxel does not modernize old code. We engineer superior vertical
                products from scratch, and we cap manual effort at the decisions
                that actually need a person.
              </p>
            </div>
          </div>
        </section>

        <section id="model" className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan">The Valxel engineering model</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold md:text-4xl">
            85% agentic SDLC. Humans keep the architecture.
          </h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="rounded-card border border-line bg-deep p-5">
                <p className="font-display text-sm text-cyan">{step.n}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="pillars" className="border-y border-line bg-deep">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Core pillars</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="rounded-card border border-line bg-paper p-6">
                  <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-muted">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan">The portfolio</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">One mark. Many products.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {verticals.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setFilter(v)}
                  className={`h-10 rounded-full px-4 text-sm ${
                    filter === v ? "bg-navy text-paper" : "border border-line text-muted"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <ul className="grid gap-3 sm:grid-cols-2">
              {shown.map((product) => {
                const on = product.id === focus.id;
                return (
                  <li key={product.id}>
                    <button
                      type="button"
                      onClick={() => setActive(product.id)}
                      className={`h-full w-full rounded-card border p-4 text-left ${
                        on ? "border-cyan bg-panel" : "border-line bg-deep"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-widest text-faint">{product.vertical}</p>
                      <p className="mt-2 font-display text-xl font-semibold">VALXEL {product.name}</p>
                      <p className="mt-2 text-sm text-muted">{product.line}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
            <aside className="rounded-card border border-line bg-deep p-6 lg:sticky lg:top-24 lg:self-start">
              <Mark className="h-12 w-auto" />
              <p className="mt-5 text-xs uppercase tracking-widest text-cyan">{focus.vertical}</p>
              <h3 className="mt-2 font-display text-3xl font-bold">VALXEL {focus.name}</h3>
              <p className="mt-4 text-muted">{focus.detail}</p>
              {"href" in focus ? (
                <a
                  href={focus.href}
                  className="mt-6 inline-flex h-11 items-center rounded-full bg-cyan px-4 font-medium text-navy"
                >
                  Open Agentic SDLC
                </a>
              ) : null}
            </aside>
          </div>
        </section>

        <section id="briefing" className="border-t border-line bg-deep">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Talk through a vertical.</h2>
              <p className="mt-4 text-muted">
                Tell us which product you want to see. We reply with a briefing on
                how the 85% model would run it — not a generic demo script.
              </p>
            </div>
            {sent ? (
              <div className="rounded-card border border-cyan/40 bg-paper p-6">
                <p className="font-display text-2xl font-bold">Request noted.</p>
                <p className="mt-3 text-muted">
                  This preview stores nothing. In production this form would reach
                  the Valxel team. You can send another if you want to revise it.
                </p>
                <button
                  type="button"
                  className="mt-6 h-11 rounded-full border border-line px-4"
                  onClick={() => setSent(false)}
                >
                  Write another
                </button>
              </div>
            ) : (
              <form
                className="grid gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="Name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <label className="grid gap-1 text-sm text-muted">
                  Product
                  <select
                    name="product"
                    required
                    className="h-12 rounded-xl border border-line bg-paper px-3 text-ink"
                    defaultValue="EMR"
                  >
                    {products.map((p) => (
                      <option key={p.id}>{p.name}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1 text-sm text-muted">
                  What should the product do
                  <textarea
                    name="note"
                    required
                    rows={4}
                    className="rounded-xl border border-line bg-paper px-3 py-3 text-ink"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 h-12 rounded-full bg-cyan font-medium text-navy"
                >
                  Request a briefing
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-ink">
            <Mark className="h-6 w-auto" />
            <Wordmark className="h-3.5 w-auto" />
          </div>
          <p>Innovating across life · systems · future</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-line bg-paper p-3">
      <p className="text-xs uppercase tracking-widest text-faint">{k}</p>
      <p className="mt-1 text-sm text-ink">{v}</p>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1 text-sm text-muted">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-xl border border-line bg-paper px-3 text-ink"
      />
    </label>
  );
}
