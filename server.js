const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080; // Azure provides the PORT as an environment variable

app.use(express.static(path.join(__dirname, 'dist/vms-project-web'))); // Change to your actual Angular output folder

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/vms-project-web/index.html')); // Serves Angular app
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
