// ========================================
// Switch that returns URL for the implemented pages, for the others it return defult #.
// This function is made aviable in in app.js middleware, and then used on template.ejs.
//=========================================

export function getMenuLink(text) {
  switch (text) {
    case 'Alla filmer':
      return '/movies';
    case 'Om oss':
      return '/about';
    case 'Barnkalas':
      return '/kids';
    default:
      return '#';
  }
}
