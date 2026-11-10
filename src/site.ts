/** Site-wide identity and links. Edit here, every page picks it up. */
export const SITE = {
  name: "Igor Octaviano",
  url: "https://igoroctaviano.com",
  role: "Software engineer",
  location: "Belo Horizonte, Brazil",
  description:
    "Igor Octaviano is a software engineer and medical imaging consultant based in Belo Horizonte, Brazil, and the founder of ioctavis.",
};

export const NAV = [
  { href: "/blog/", label: "Writing" },
  { href: "/tools/", label: "Open source" },
];

export const SOCIAL = [
  { id: "github", label: "GitHub", href: "https://github.com/igoroctaviano" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/igoroctaviano" },
  { id: "x", label: "X", href: "https://x.com/igoroctaviano" },
  { id: "medium", label: "Medium", href: "https://medium.com/@igoroctaviano" },
  { id: "orcid", label: "ORCID", href: "https://orcid.org/0000-0002-6455-1480" },
  {
    id: "researchgate",
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Igor-Octaviano-Ribeiro-Rezende-2",
  },
] as const;

/** The company and its products. Product pages live on their own sites, not here. */
export const COMPANY = {
  name: "ioctavis",
  url: "https://ioctavis.com",
  products: [
    {
      id: "pentefino",
      name: "Pentefino",
      tagline: "Finds duplicate photos and videos and keeps the best copy.",
      url: "https://pentefino.ioctavis.com",
    },
    {
      id: "dindjin",
      name: "DinDjin",
      tagline: "Monthly expense tracking that works like a spreadsheet.",
      url: "https://dindjin.com",
    },
    {
      id: "pokerize",
      name: "Pokerize",
      tagline: "Real-time planning poker for agile teams.",
      url: "https://pokerize.ioctavis.com",
    },
  ],
} as const;
