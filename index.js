const app = require("./config/server");

app.listen(process.env.PORT || 3001, () => console.log('App started...'));

