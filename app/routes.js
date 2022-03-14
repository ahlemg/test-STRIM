// import routes
import authRouter from "./api/v1/controllers/auth/router";
import panierRouter from "./api/v1/controllers/panier/router";


const BASE_URL = "/api/v1";

export default function(app) {
  // define routes
  app.use(BASE_URL + "/auth", authRouter);
  app.use(BASE_URL + "/panier", panierRouter);

 
}
