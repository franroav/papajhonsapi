/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

/*** ROUTES */
import { Router } from "express";

import index from "./indexPage";

const routes = Router();

routes.use("/index", index);

export default routes;
