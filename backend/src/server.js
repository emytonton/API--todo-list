const app = require('C:/Users/emill/OneDrive/Desktop/projeto/backend/src/app.js')

require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running or port ${PORT}`));



