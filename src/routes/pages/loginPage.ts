/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

import { LoginController } from "../../controller/LoginController";
import { Router } from "express";

const router = Router();
// open page
router.get("/", LoginController.Open);

//login
router.get("/login", LoginController.Login);

// register
router.get("/register", LoginController.Register);

// logout
router.get("/logout", LoginController.Logout);

export default router;
