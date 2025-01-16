//Data for the header menu
export const headerData = {
  header: {
    mainHeader: {
      logo: '/img/kinoLogo.png',
      brandName: 'KINO BIO',
      alt: 'Picture for the brands logotype',
    },
    hamburgerMenu: {
      menuLogo: '/img/kinoLogoOverlay.png',
      menuLinks: [{ text: 'Alla filmer' }, { text: 'Barnkalas' }, { text: 'Om oss' }],
    },
  },
};

export function getMenuLink(text) {
  switch (text) {
    case 'Alla filmer':
      return '/movies';
    case 'Om oss':
      return '/about';
    case 'Barnkalas':
      return '/kids';
    default:
      return '/';
  }
}
