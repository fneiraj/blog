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
  { href: '/', title: 'NAV_HOME_TITLE' },
  { href: '/blog', title: 'NAV_BLOG_TITLE' },
  { href: '/snippets', title: 'NAV_SNIPPETS_TITLE' },
  { href: '/projects', title: 'NAV_PROJECTS_TITLE' },
  //{ href: '/about-me', title: 'Sobre mi' },
]

export const FOOTER_LINKS = [
  { iconName: 'email', title: 'SEND_ME_A_EMAIL', href: 'mailto:hi@fneira.dev' },
  { iconName: 'github', title: 'SEE_MY_GITHUB', href: 'https://github.com/fneiraj' },
  { iconName: 'linkedin', title: 'CONTACT_ME_ON_LINKEDIN', href: 'https://www.linkedin.com/in/fneiraj' },

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
