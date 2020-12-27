/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { Request, Response } from "express";
import { LoginModel } from "../Model/LoginModel";

export class LoginController {
  static Login = async (req: Request, res: Response) => {
    const login = LoginModel.LoginTest(req, res);
    return login;
  };

  static Register = async (req: Request, res: Response) => {
    const register = LoginModel.RegisterTest(req, res);
    return register;
  };

  static Logout = async (req: Request, res: Response) => {
    const logout = LoginModel.logoutTest(req, res);
    return logout;
  };

  static Open = async (req: Request, res: Response) => {
    const logout = LoginModel.openTest(req, res);
    return logout;
  };
}

export default LoginController;
