/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

import { IndexController } from "./../controller/IndexController";
import { Router } from "express";
const router = Router();

//banner
router.get("/banner", IndexController.Banner);

// products
router.get("/products", IndexController.Products);

// footer
router.get("/footer", IndexController.Footer);

// slider
router.get("/slider", IndexController.Slider);

export default router;
