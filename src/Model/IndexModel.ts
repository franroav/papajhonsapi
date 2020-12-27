/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */

import * as cheerio from "cheerio";
import * as axios from "axios";
import { Request, Response } from "express";

const api = axios.default;
const url = "http://automationpractice.com/index.php";

export class IndexModel {
  //PRODUCTS
  static productList = async (req: Request, res: Response) => {
    try {
      const { data } = await api.get(url);
      const $ = cheerio.load(data);

      const product_list = [];
      $(".ajax_block_product").each((i, el) => {
        const text = $(el).find("a.product_img_link").attr("title");
        const image = $(el).find("img.replace-2x").attr("src");
        const description = $(el).find("p.product-desc").text().trim();
        const price = $(el)
          .find(".content_price span.product-price")
          .html()
          .trim();
        const discount = $(el).find("span.price-percent-reduction").html();
        const stock = $(el).find("span.available-now").text().trim();
        const link = $(el).find("a.product_img_link").attr("href");
        product_list.push({
          text,
          image,
          description,
          price,
          discount,
          stock,
          link,
        });
      });
      if (product_list.length > 0) {
        res.send(product_list);
      }
    } catch (error) {
      res.status(404).json({ message: "Something Went Wrong", error: error });
    }
  };

  // BANNER
  static bannerList = async (req: Request, res: Response) => {
    const { data } = await api.get(url);
    const $ = cheerio.load(data);
    const counter = [1, 2, 3, 4, 5];
    const img_list = [];
    const banner_list = [];
    try {
      $(".htmlcontent-home").each((a, el) => {
        counter.map((i) => {
          const content = $(el)
            .find(`li.htmlcontent-item-${i} img.item-img`)
            .attr("src");

          if (content !== undefined) {
            img_list.push(content);
          }
        });
      });
      img_list.sort();
      img_list.map((el, i) => {
        banner_list.push({ id: i + 1, src: el });
      });
      res.send(banner_list);
    } catch (error) {
      res.status(404).json({ message: "There are No Results" });
    }
  };

  //FOOTER
  static footerList = async (req: Request, res: Response) => {
    try {
      const { data } = await api.get(url);
      const $ = cheerio.load(data);
      const footer_list = [];
      $("#cmsinfo_block div.col-xs-6 ul li").each((i, el) => {
        const title = $(el).find("h3").text();
        const icon = $(el).find("em").attr("class");
        const description = $(el).find("p").text();
        footer_list.push({ id: i + 1, title, icon, description });
      });
      res.send(footer_list);
    } catch (error) {
      return res.status(409).json({ message: "There are No Results" });
    }
  };

  //SLIDER
  static sliderList = async (req: Request, res: Response) => {
    const { data } = await api.get(url);
    const $ = cheerio.load(data);
    const slider_list = [];

    try {
      $("#homepage-slider ul#homeslider li").each((i, el) => {
        const link = $(el).find("a").attr("href");
        const image = $(el).find("a img").attr("src");
        const width = $(el).find("a img").attr("width");
        const height = $(el).find("a img").attr("height");
        const title = $(el).find("h2").text();
        const description = $(el).find("p").text();

        slider_list.push({
          id: i + 1,
          title,
          image,
          width,
          height,
          description,
          link,
        });
        res.send(slider_list);
      });
    } catch (error) {
      res.status(409).json({ message: "slider list not found" });
    }
  };
}

export default IndexModel;
