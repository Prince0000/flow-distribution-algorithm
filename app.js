const express = require('express');
const app = express();
const port = 3000;

const astrologerRoutes = require('./routes/astrologerRoutes');

app.use(express.json());
app.use('/astrologers', astrologerRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
