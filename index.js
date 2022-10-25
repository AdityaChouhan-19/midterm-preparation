const app = require("./config/server");

//app.setMaxListeners;

app.listen(process.env.PORT || 3000, () => console.log('App started...'));

