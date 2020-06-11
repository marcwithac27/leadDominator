const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const jwt = require ('jsonwebtoken');
const compression = require("compression")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const logger = require("morgan")


const myMiddleware = (configs) => (req, res, next) => {
  if (configs.whitelist.includes(req.url)) {
      next();
  } else {
      const {token} = req.cookies;
      if (!token) return res.sendStatus(401);
      jwt.verify(token, 'shhh', (err, data) => {
          if (err) return res.sendStatus(403);
          req.user = data;
      })
      next()
  }
}

app.use(logger('dev'));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(cors({origin:true,credentials: true}));
app.use(routes);
app.use(cookieParser());
app.use(helmet());
app.use(myMiddleware({whitelist: ['/login', '/signup', '/detail'] }))
app.use(compression());
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/leads");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
