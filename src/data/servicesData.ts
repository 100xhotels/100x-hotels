import Link from "next/link";
import { ArrowRight, ChevronRight, BarChart3, Network, TrendingUp, CheckCircle2 } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  number: string;
  badge: string;
  title: string;
  tagline: string;
  summary: string;
  heroMetrics: { label: string; value: string; desc: string }[];
  problemsSolved: { title: string; desc: string }[];
  framework: { phase: string; title: string; points: string[] }[];
  deliverables: string[];
  sampleInsight: {
    kicker: string;
    headline: string;
    metricA: { label: string; value: string };
    metricB: { label: string; value: string };
    note: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    property: string;
  };
}

export const servicesData: Record<string, ServiceDetail> = {
  "revenue-strategy-pricing": {
    slug: "revenue-strategy-pricing",
    number: "01",
    badge: "Pricing Architecture & Dynamic Yield",
    title: "Revenue Strategy & Dynamic Pricing",
    tagline: "Move beyond static rate cards to algorithmic, demand-responsive yield architectures.",
    summary:
      "Most hotels leave 8% to 18% of potential top-line revenue on the table through delayed rate adjustments, linear discount structures, and unhedged compression dates. We build calibrated dynamic rate ladders that respond automatically to booking velocity, unconstrained market demand, and real-time compset behavior.",
    heroMetrics: [
      { label: "Average RevPAR Uplift", value: "+14.6%", desc: "Within first 120 days of algorithmic rate laddering" },
      { label: "Rate Elasticity Protection", value: "99.2%", desc: "Zero destructive distress-discounting below target margin" },
      { label: "Peak Date Capture Rate", value: "+28.4%", desc: "Premium yield realized on city-wide compression events" },
    ],
    problemsSolved: [
      {
        title: "Rigid Seasonal Rate Grids",
        desc: "Fixed high/low season rate grids fail to adapt when demand spikes on mid-week dates or lulls unexpectedly.",
      },
      {
        title: "Panic Discounting During Soft Pace",
        desc: "Dropping rates 14 days out trains corporate and leisure buyers to wait, eroding brand prestige and net ADR.",
      },
      {
        title: "Premature Sell-Out on Compression",
        desc: "Filling rooms at base rates weeks prior to major concerts, conferences, or festivals before peak willingness-to-pay materializes.",
      },
      {
        title: "Opaque Willingness-to-Pay Segmentation",
        desc: "Treating transient leisure, negotiated corporate, and weekend bleisure buyers with identical static room premiums.",
      },
    ],
    framework: [
      {
        phase: "Phase 01 — Audit & Compset Calibration",
        title: "Historical Velocity & Willingness-to-Pay Baseline",
        points: [
          "24-month pickup pace audit segmented by room category and day-of-week.",
          "Identification of false compset benchmarks that suppress property positioning.",
          "Unconstrained demand modeling to establish true rate elasticity curves.",
        ],
      },
      {
        phase: "Phase 02 — Architecture Design",
        title: "Tiered Dynamic Rate Engine & Dynamic Differentials",
        points: [
          "Multi-tier rate ladder configuration linked directly to occupancy pickup thresholds.",
          "Dynamic room type differentials based on premium feature inventory scarcity.",
          "Minimum length of stay (MLOS) rules dynamically engineered around peak dates.",
        ],
      },
      {
        phase: "Phase 03 — Execution & Revenue Cadence",
        title: "Active Yield Governance & Weekly Strategy Loops",
        points: [
          "Weekly executive pricing councils with GM and commercial directors.",
          "Automated rate push feeds into PMS and Channel Manager stacks.",
          "Real-time event and citywide pickup monitoring with same-day override protocols.",
        ],
      },
    ],
    deliverables: [
      "Custom 365-Day Dynamic Rate Matrix & Rule Configuration Guide",
      "Room Category Differential Algorithm (Deluxe, Suite, Penthouse multipliers)",
      "Length-of-Stay & Cancellation Guarantee Optimization Engine",
      "Weekly Commercial Yield Briefing & Executive Reporting Dashboard",
      "Special Event & High-Compression Rate Schedule",
    ],
    sampleInsight: {
      kicker: "Simulated Yield Shift",
      headline: "Optimized Dynamic Ladder vs. Legacy Fixed Tiering",
      metricA: { label: "Legacy Average Daily Rate", value: "$310" },
      metricB: { label: "Calibrated Dynamic ADR", value: "$368" },
      note: "By unbundling peak booking windows and applying dynamic elasticity tiers at 70% and 85% occupancy thresholds, properties captured $58 higher ADR with equal occupancy.",
    },
    testimonial: {
      quote:
        "The dynamic rate laddering deployed by 100X transformed our commercial rhythm. Instead of constantly playing defense against OTAs, we dictated our rates with confidence during high-compression weeks.",
      author: "Marcus Vance",
      role: "Managing Director",
      property: "The Kensington Grand Hotel & Residences (220 keys)",
    },
  },
  "distribution-channel-performance": {
    slug: "distribution-channel-performance",
    number: "02",
    badge: "Channel Profitability & Net Retention",
    title: "Distribution & Channel Performance",
    tagline: "Maximize net retained revenue by engineering high-converting direct channels and reigning in OTA commissions.",
    summary:
      "Gross revenue is a vanity metric if 18% to 25% is siphoned off in intermediary commissions and channel leakage. We re-engineer your distribution mix, fortify your direct brand website conversion, enforce rate parity, and transform high-cost OTAs into discovery billboards rather than margin traps.",
    heroMetrics: [
      { label: "Direct Booking Share Increase", value: "+38%", desc: "Shift from third-party channels to direct brand engine" },
      { label: "Commission Savings per Key", value: "$1,450/yr", desc: "Recaptured bottom-line net operating margin" },
      { label: "Parity Violation Reduction", value: "-92%", desc: "Eradicated rogue wholesale rate undercutting across meta" },
    ],
    problemsSolved: [
      {
        title: "OTA Dependency & Commission Bleed",
        desc: "Paying 20%+ commissions on bookings that could have been captured directly with smarter funnel UX and loyalty perks.",
      },
      {
        title: "Uncontrolled Wholesale Rate Leakage",
        desc: "Bed banks passing discounted non-packaged rates to rogue B2C meta engines, undercut your official direct rate.",
      },
      {
        title: "Weak Direct Booking Conversion",
        desc: "Friction-heavy booking engines with slow mobile loads, confusing room tiers, and hidden fees causing abandonment.",
      },
      {
        title: "Passive GDS & Corporate Negotiation",
        desc: "Stagnant negotiated corporate rate accounts that block inventory during high-demand dates without minimum volume commitments.",
      },
    ],
    framework: [
      {
        phase: "Phase 01 — Leakage Audit & Parity Enforcement",
        title: "Full Ecosystem Parity Scrape & Channel Margin Mapping",
        points: [
          "Automated crawling of Google Hotel Ads, Trivago, Kayak, and third-party OTAs for rogue rates.",
          "Margin contribution analysis subtracting commission, merchant fees, and acquisition spend.",
          "Contract review of wholesale distribution agreements to plug uncontrolled unbundled resale.",
        ],
      },
      {
        phase: "Phase 02 — Direct Engine Calibration",
        title: "Direct Value Proposition & Funnel Optimization",
        points: [
          "Booking engine UX audit and redesign of high-friction checkout milestones.",
          "Exclusive direct-only value additions (flexible check-in, dining credits, room upgrades).",
          "High-intent metasearch bidding optimization across Google Hotel Center and Tripadvisor.",
        ],
      },
      {
        phase: "Phase 03 — Channel Governance",
        title: "Dynamic Inventory Allocation by Marginal Profitability",
        points: [
          "Algorithmic closed-channel rules on compressed stay dates for high-commission OTAs.",
          "Renegotiation of OTA tier commitments and marketing placement packages.",
          "Implementation of automated parity monitoring alerts delivered to management daily.",
        ],
      },
    ],
    deliverables: [
      "Comprehensive Channel Profitability & Net-RevPAR Audit Report",
      "Direct Booking Engine UX & Conversion Acceleration Playbook",
      "Wholesale & OTA Contract Alignment Recommendations",
      "Google Hotel Ads & Metasearch ROI Bidding Architecture",
      "Real-Time Rate Parity Defense Monitoring Protocol",
    ],
    sampleInsight: {
      kicker: "Channel Net Retention",
      headline: "True Profitability After Channel Acquisition Costs",
      metricA: { label: "Brand Direct Net Margin", value: "95.2%" },
      metricB: { label: "Standard OTA Net Margin", value: "78.0%" },
      note: "Every 10% shift in inventory allocation from third-party OTAs to brand-direct yields an immediate 1.7% expansion in total property Net Operating Income (NOI).",
    },
    testimonial: {
      quote:
        "We always thought OTAs were an unavoidable cost of doing business. 100X showed us how to leverage OTAs for top-of-funnel discovery while converting nearly 42% of repeat guests directly. Our net margin jumped instantly.",
      author: "Elena Rostova",
      role: "Chief Commercial Officer",
      property: "Azure Coastline Boutique Resort Portfolio (4 Properties)",
    },
  },
  "performance-analytics-forecasting": {
    slug: "performance-analytics-forecasting",
    number: "03",
    badge: "Commercial Intelligence & Pace Modeling",
    title: "Performance Analytics & Forecasting",
    tagline: "Unify fragmented property data into forward-looking commercial intelligence that drives EBITDA.",
    summary:
      "Operating on rear-view mirror STR reports and last year’s pace is no longer enough in volatile lodging markets. We synthesize forward flight searches, market booking windows, competitor live changes, and granular segment pickup into actionable forecasts that enable proactive inventory positioning.",
    heroMetrics: [
      { label: "Forecast Accuracy (D+60)", value: "96.4%", desc: "Within ±3.6% of actual month-end room revenue" },
      { label: "Early Opportunity Detection", value: "21 Days", desc: "Ahead of competitor pricing adjustments" },
      { label: "EBITDA Margin Improvement", value: "+3.2 pts", desc: "Through predictive staffing and targeted rate defense" },
    ],
    problemsSolved: [
      {
        title: "Lagging Retrospective Reporting",
        desc: "Relying on monthly historical reports after the stay dates have passed, when revenue leakage can no longer be rectified.",
      },
      {
        title: "Disjointed Commercial Silos",
        desc: "Revenue management, digital marketing, sales, and operations working from disparate spreadsheets and conflicting figures.",
      },
      {
        title: "Inaccurate Operational Budgeting",
        desc: "Over- or under-staffing departments due to unexpected pace spikes or unforecasted cancellations.",
      },
      {
        title: "Inability to Model Downside Scenarios",
        desc: "Lack of stress-tested forecast models when macroeconomic or destination headwinds impact market demand.",
      },
    ],
    framework: [
      {
        phase: "Phase 01 — Data Consolidation & Pipeline Sync",
        title: "PMS, RMS, Google Analytics & Flight Search Synthesis",
        points: [
          "Direct API integration across Property Management System, POS, and digital web analytics.",
          "Ingestion of macro destination flight search volume and forward air passenger intent.",
          "Cleaning and normalization of historical multi-year booking pace anomalies.",
        ],
      },
      {
        phase: "Phase 02 — Predictive Pacing Engine",
        title: "Algorithmic 30-60-90 Day Pacing Models",
        points: [
          "Segment-specific pickup curves (corporate, group, wholesale, transient).",
          "Automated unconstrained demand calculation to predict compression dates 90 days out.",
          "Dynamic cancellation probability scoring based on booking channel and lead time.",
        ],
      },
      {
        phase: "Phase 03 — Commercial Executive Cockpit",
        title: "Decision Dashboards & Actionable Weekly Mandates",
        points: [
          "Clear executive dashboard showing revenue pace vs. budget, forecast, and compset.",
          "Automated anomaly triggers when booking velocity deviates by >5% from projected baseline.",
          "Integrated labor and operational scheduling projections aligned with expected occupancy.",
        ],
      },
    ],
    deliverables: [
      "Custom Automated 30-60-90 Day Predictive Revenue Model",
      "Executive Commercial KPI Cockpit & Real-time Visualizer",
      "Lead-Time & Booking Window Decay Curves by Segment",
      "Cancellation Propensity & Wash-Factor Algorithm",
      "Monthly Asset Owner & Board Commercial Intelligence Presentation",
    ],
    sampleInsight: {
      kicker: "Forward Horizon Intelligence",
      headline: "Early Detection of 90-Day Pacing Discrepancies",
      metricA: { label: "Projected Pacing Surplus", value: "+12.8%" },
      metricB: { label: "Forecasted vs Budget RevPAR", value: "$386 vs $342" },
      note: "Spotting pace surplus 60 days ahead allows properties to systematically tighten discount allocations and lift rate floors before standard compset yield engines wake up.",
    },
    testimonial: {
      quote:
        "The level of forward clarity we gained with 100X's analytics eliminated guesswork for our asset managers. We know weeks in advance where our pacing holes are and can calibrate rates with surgical precision.",
      author: "David Sterling",
      role: "VP of Hospitality Asset Management",
      property: "Blackwood Hospitality Capital (14 Properties)",
    },
  },
};

export const allServicesList = Object.values(servicesData);
