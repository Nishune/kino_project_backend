//importerar express för att skapa webbserver
import express from 'express';
import ejs from 'ejs';
//skapar en ny express applikation/server i app.
const app = express();

//EJS config
app.set('view engine', 'ejs');
app.set('views', './src/views');

//Static files from dist folder
app.use(express.static('dist'));

app.get('/test', (req, res) => {
  res.render('test', { title: 'Test page ' });
});

app.listen(5080, () => {
  console.log('Server running on port 5080');
});
