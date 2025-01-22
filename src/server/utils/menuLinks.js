export function getMenuLink(text) {
  switch (text) {
    case 'Alla filmer':
      return '/movies';
    case 'Om oss':
      return '/about';
    case 'Barnkalas':
      return '/kids';
    case 'Kommande filmer':
    case 'Barnbio':
    case 'Bioupplevelser':
    case 'Medlem':
      return '#';
    default:
      return '#';
  }
}
