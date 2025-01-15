//importerar express för att skapa webbserver
import express from 'express';

//skapar en ny express applikation/server i app.
const app = express();

//Express servar statiska filer från dist mappen
//Om något letar efter styles.css så letar express i dist/styles.css
app.use(express.static('dist'));

//hanterar alla andra vägar som inte matchade med en faktiskt fil
//Skickar index.html som svar så att frontend-kod kan hantera routing
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: '.' });
});

//Startar servern på port 3080 och cl ett meddelande då det är igång.
app.listen(3080, () => {
  console.log('Server running on port 3080');
});
