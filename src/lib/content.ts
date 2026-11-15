export const products = [
  {
    id: "emr",
    name: "EMR",
    vertical: "Healthcare",
    line: "Clinical records that stay current around the visit, not after it.",
    detail:
      "A native agentic electronic medical record. Charting, orders, and follow-up move with the care team so staff spend time with patients, not screens.",
  },
  {
    id: "medspa",
    name: "Med Spa",
    vertical: "Healthcare",
    line: "Booking, treatment plans, and follow-through in one calm surface.",
    detail:
      "Purpose-built for aesthetic practices. Intake, scheduling, consent, and aftercare stay coordinated so the visit feels considered from first inquiry to last note.",
  },
  {
    id: "ag",
    name: "Ag Tech",
    vertical: "Agriculture",
    line: "Yield, procurement, and field operations without the spreadsheet layer.",
    detail:
      "Vertical software for growers and operators. Monitoring, procurement, and marketplace workflows sit on one agentic runtime instead of a stack of disconnected tools.",
  },
  {
    id: "pos",
    name: "POS",
    vertical: "Commerce",
    line: "A point of sale that closes the day without a second system.",
    detail:
      "High-throughput checkout with inventory, staff, and settlement already in the product. Operators stop reconciling tools that were never designed to talk.",
  },
  {
    id: "apx",
    name: "APX",
    vertical: "Payments",
    line: "An AI payment exchange for routing, reconciliation, and exceptions.",
    detail:
      "APX routes transactions, watches exceptions, and keeps ledgers aligned. Humans set policy. The exchange handles the volume.",
  },
  {
    id: "sdlc",
    name: "Agentic SDLC",
    vertical: "Engineering",
    line: "The framework behind the products: 85% autonomous, 15–20% intent.",
    detail:
      "The engineering model itself, offered as a product. Architectural intent stays human. Construction, tests, and upkeep run on an agentic runtime.",
    href: "https://valxel-platform.github.io/agentic-sdlc/",
  },
] as const;

export const pillars = [
  {
    title: "Native agentic products",
    body: "Healthcare, AgTech, POS, and Med Spas are built from day one on autonomous runtimes — not wrapped around yesterday’s code.",
  },
  {
    title: "Peak operational efficiency",
    body: "Workflows and automation remove the administrative drag that slows staff and operators.",
  },
  {
    title: "Elevated customer experience",
    body: "Interfaces stay modern and high-throughput, so the person at the end of the product feels none of the machinery.",
  },
  {
    title: "Low maintenance overhead",
    body: "Self-healing, autonomously tested code stays current without burning a team on upkeep.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Intent",
    body: "People set architecture and product strategy. That is the 15–20% that stays human.",
  },
  {
    n: "02",
    title: "Construction",
    body: "Agentic systems write the product, the tests, and the integrations from that intent.",
  },
  {
    n: "03",
    title: "Uptime",
    body: "The codebase watches itself, patches drift, and stays current without a maintenance queue.",
  },
  {
    n: "04",
    title: "Vertical",
    body: "What ships is a purpose-built product for one industry, not a generic platform with a skin.",
  },
] as const;
