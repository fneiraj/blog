export const SITE = {
  website: "https://fneira.dev",
  author: "Fernando Neira",
  desc: "fneira.dev - Personal blog",
  repo: "https://github.com/fneiraj/blog",
  title: "fneira.dev",
  ogImage: "astropaper-og.jpg",
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "es",
  langTag: ["es-CL"],
} as const;

export const HEADER_NAV_LINKS = [
  {
    href: "/",
    title: "Inicio",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  { href: "/snippets", title: "Snippets" },
  { href: "/projects", title: "Proyectos" },
  //{ href: '/about-me', title: 'Sobre mi' },
];

export const FOOTER_LINKS = [
  { iconName: "email", href: "mailto:hi@fneira.dev" },
  { iconName: "github", href: "https://github.com/fneiraj" },
  {
    iconName: "stackoverflow",
    href: "https://stackoverflow.com/users/12276050/fneira",
  },
  { iconName: "linkedin", href: "https://www.linkedin.com/in/fneiraj" },
];

export const GISCUS = {
  src: "https://giscus.app/client.js",
  "data-repo": "fneiraj/blog",
  "data-repo-id": "R_kgDOIVcPIg",
  "data-category": "General",
  "data-category-id": "DIC_kwDOIVcPIs4Cc8s7",
  "data-mapping": "pathname",
  "data-strict": "0",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "0",
  "data-input-position": "bottom",
  "data-theme": "preferred_color_scheme",
  "data-lang": "es",
};
