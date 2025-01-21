import app from '../server/app.js';

// ==================
// Starting the server
// ==================
app.listen(5080, () => {
  console.log('Server running on port 5080');
});

export default app;
