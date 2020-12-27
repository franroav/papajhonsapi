/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

/*** ROUTES */
import { Router } from "express";

import index from "./pages/indexPage";
import login from "./pages/loginPage";

const routes = Router();

routes.use("/", login);
routes.use("/index", index);

export default routes;
