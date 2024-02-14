export const SITE = {
  website: "https://fneira.dev",
  author: "Fernando Neira",
  desc: "Personal blog",
  repo: "https://github.com/fneiraj/blog",
  title: "fneira.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "es",
  langTag: ["es-CL"],
} as const;

export const HEADER_NAV_LINKS = [
  { href: '/', title: 'Inicio' },
  { href: '/blog', title: 'Blog' },
  { href: '/snippets', title: 'Snippets' },
  { href: '/projects', title: 'Proyectos' },
  //{ href: '/about-me', title: 'Sobre mi' },
]

export const FOOTER_LINKS = [
  { iconName: 'email', href: 'mailto:hi@fneira.dev' },
  { iconName: 'github', href: 'https://github.com/fneiraj' },
  { iconName: 'linkedin', href: 'https://www.linkedin.com/in/fneiraj' },

]

export const GISCUS = {
  id: 'comments',
  repo: 'fneiraj/blog',
  repoId: 'R_kgDOIVcPIg',
  category: 'General',
  categoryId: 'DIC_kwDOIVcPIs4Cc8s7',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  loading: 'lazy'
};
