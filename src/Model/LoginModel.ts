/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { LoginTest } from "../test/login/loginTest";
//import * as selenium from "selenium-webdriver";
const { Builder, By, Key, until } = require("selenium-webdriver");
import { Request, Response } from "express";

const url =
  "http://automationpractice.com/index.php?controller=authentication&back=my-account";
const url_logout =
  "http://automationpractice.com/index.php?controller=my-account";
const jj =
  "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation";

export class LoginModel {
  //PRODUCTS
  static LoginTest = async (req: Request, res: Response) => {
    const Login = new LoginTest(url, req, res);
    const response = Login.login_test_2();
    console.log(response);
  };

  // register
  static RegisterTest = async (req: Request, res: Response) => {
    try {
      const Register = new LoginTest(url, req, res);
      const response = Register.register_test_3();
      console.log(response);
    } catch (error) {
      res
        .status(404)
        .json({ message: "Hubo un error: " + error, error: "error" });
    }
  };

  // Logout
  static logoutTest = async (req: Request, res: Response) => {
    try {
      const LogOut = new LoginTest(url_logout, req, res);
      const response = LogOut.logout_test_4();
      console.log(response);
      //res.send(banner_list);
    } catch (error) {
      res
        .status(404)
        .json({ message: "Hubo un error: " + error, error: "error" });
    }
  };

  static openTest = async (req: Request, res: Response) => {
    try {
      const openPage = new LoginTest(url_logout, req, res);
      const response = openPage.open_page_test_1();
      console.log(response);
      //res.send(banner_list);
    } catch (error) {
      res
        .status(404)
        .json({ message: "Hubo un error: " + error, error: "error" });
    }
  };
}

export default LoginModel;
