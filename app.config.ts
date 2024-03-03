export default defineAppConfig({
  docus: {
    title: "TCF Canada",
    description:
      "Plateforme dédiée à la préparation spécifique pour le TCF Canada. Simulations réelle, proposant des sujets récents",
    url: 'https://tcfcanada-docs.vercel.app',
    image:
      "https://tcfcanada.dm-cm.net/uploads/01HMVG7JQFRJ31Y2M1Z0K5WBJB.png",
    socials: {
      github: "STIFLEUR390/tcfcanada-docs",
    },
    github: {
      root: 'content',
      edit: false,
      contributors: false
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Develop by Dev Master',
        href: 'https://portfolio.dm-cm.net',
      },
    }
  },
});
