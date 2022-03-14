import express from "express";
import createError from "http-errors";
import logger from "morgan";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import validate from "express-validation";
import config from "./app/config/config";
import apiRoutes from "./app/routes";
import path from "path";

// The server application
const app = express();

// use morgan to log requests to the API
if (config.app.env == "developement") {
  app.use(logger("combined"));
}
if (config.app.env == "production") {
  app.use(logger("tiny"));

  //use compression to decrease the size of the response body and hence increase the speed of a web app
  app.use(compression());

  //Helmet helps secure  Express apps by setting various HTTP headers
  app.use(helmet());
}

// Pars the requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("etag");
// handles cors
app.use(cors());

// define api routes
apiRoutes(app);


// test route to test the API
// TODO: delete when production
app.use("/test", (req, res, next) => {
  res.status(200).json({
    test: "congrats ! the api is working properly",
    body: req.body
  });
});

// handle 404 not found
app.get("*", function(req, res) {
  res.send("404 Page Not Found!", 404);
});
app.use(function(req, res, next) {
  console.log("reqq :", req);
  console.log("res ::", res);
  next(createError(404));
});

//Handel All errors set as default 500.
app.use((err, req, res, next) => {
  console.log("catch err", err);
  res.status(err.status || 500);

  // specific for validation errors
  if (err instanceof validate.ValidationError)
    return res.status(err.status).json(err);

  if (config.app.debug === "true") {
    return res.status(500).send(err.stack);
  } else {
    // TODO: error message should be more specific.
    let error =
      err.status && err.status == 500 ? "Server error" : "Page not found";
    res.json({
      error: true,
      message: error
    });
  }
});

export default app;
