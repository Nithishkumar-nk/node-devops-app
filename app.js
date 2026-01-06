const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>🚀 Deployed via Jenkins + Docker on AWS EC2</h1>');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});

// webhook auto trigger success
