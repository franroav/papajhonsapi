/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { Request, Response } from "express";
import { IndexModel } from "../Model/indexModel";

export class IndexController {
  static Banner = async (req: Request, res: Response) => {
    const banners = IndexModel.bannerList(req, res);
    return banners;
  };

  static Footer = async (req: Request, res: Response) => {
    const footer = IndexModel.footerList(req, res);
    return footer;
  };

  static Slider = async (req: Request, res: Response) => {
    const slider = IndexModel.sliderList(req, res);
    return slider;
  };

  static Products = async (req: Request, res: Response) => {
    const products = IndexModel.productList(req, res);
    return products;
  };
}

export default IndexController;
