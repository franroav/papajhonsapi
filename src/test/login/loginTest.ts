const { Builder, By, Key, until } = require("selenium-webdriver");
import { Request, Response } from "express";

class LoginService {
  //url: string;
  private url: string;
  private req: Request;
  private res: Response;
  constructor(url: string, req: Request, res: Response) {
    this.url = url;
    this.req = req;
    this.res = res;
  }
  // OPEN PAGE
  async openPageChrome() {
    //Driver
    let driver = await new Builder().forBrowser("chrome").build();
    //Maximize open page
    driver.manage().window().maximize();
    // GET REQUEST
    await driver.get(this.url);
  }

  //LOGIN
  async loginCase() {
    try {
      // destructuring request
      const { username, password } = this.req.body;
      let driver = await new Builder().forBrowser("chrome").build();
      //Maximize open page full screen
      driver.manage().window().maximize();
      // GET REQUEST
      await driver.get(this.url);
      // DOM
      const titulo = await driver.findElement(By.tagName("h1")).getText();
      const input = await driver.findElement(By.id("email")).sendKeys(username);
      const pass = await driver.findElement(By.id("passwd")).sendKeys(password);

      const submit = await driver.findElement(By.id("SubmitLogin")).click();
      this.res.send(titulo);
      //console.log(process.env.LOGIN);
    } catch (error) {
      this.res
        .status(404)
        .json({ message: "Algo ha ido mal: " + error, status: "error" });
    }
  }
  //REGISTER
  async registerCase(url_account_creation) {
    const {
      username,
      password,
      gender,
      firstname,
      lastname,
      days,
      months,
      years,
      company,
      address1,
      address2,
      city,
      state,
      postcode,
      aditional,
      phone,
      mobilephone,
      alias,
    } = this.req.body;
    let driver = await new Builder().forBrowser("chrome").build();
    //Maximize open page
    driver.manage().window().maximize();
    // GET REQUEST
    await driver.get(this.url);
    // DOM
    const subtitulo = await driver
      .findElement(By.className("page-subheading"))
      .getText();
    const input = await driver
      .findElement(By.id("email_create"))
      .sendKeys(username);

    const submit = await driver.findElement(By.id("SubmitCreate")).click();
    this.userAccountCreation(
      driver,
      url_account_creation,
      subtitulo,
      password,
      gender,
      firstname,
      lastname,
      days,
      months,
      years,
      company,
      address1,
      address2,
      city,
      state,
      postcode,
      aditional,
      phone,
      mobilephone,
      alias
    );
    //this.res.send(subtitulo);
  }
  // REGISTER USER INFO
  async userAccountCreation(
    driver: any,
    url: string,
    subtitulo: string,
    password: string,
    gender: string,
    firstname: string,
    lastname: string,
    days: string,
    months: string,
    years: string,
    company: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    postcode: string,
    aditional: string,
    phone: string,
    mobilephone: string,
    alias: string
  ) {
    await driver.get(url);

    setTimeout(async () => {
      if (gender === "male") {
        const user_gender_male = await driver
          .findElement(By.id("id_gender1"))
          .click(); // gender
      } else if (gender === "female") {
        const user_gender_female = await driver
          .findElement(By.id("id_gender2"))
          .click(); // gender
      }

      const user_firstname = await driver
        .findElement(By.id("customer_firstname"))
        .sendKeys(firstname); // first name

      const user_lastname = await driver
        .findElement(By.id("customer_lastname"))
        .sendKeys(lastname); // last names

      const user_pass = await driver
        .findElement(By.id("passwd"))
        .sendKeys(password);

      const day_of_birthday = await driver
        .findElement(By.id("days"))
        .sendKeys(days);
      const month_of_birthday = await driver
        .findElement(By.id("months"))
        .sendKeys(months);
      const year_of_birthday = await driver
        .findElement(By.id("years"))
        .sendKeys(years);

      const user_company = await driver
        .findElement(By.id("company"))
        .sendKeys(company);

      const user_address1 = await driver
        .findElement(By.id("address1"))
        .sendKeys(address1);

      const user_address2 = await driver
        .findElement(By.id("address2"))
        .sendKeys(address2);

      const user_city = await driver.findElement(By.id("city")).sendKeys(city);
      const user_state = await driver
        .findElement(By.id("id_state"))
        .sendKeys(state);

      const user_postcode = await driver
        .findElement(By.id("postcode"))
        .sendKeys(postcode);

      const user_aditional_info = await driver
        .findElement(By.id("other"))
        .sendKeys(aditional);

      const user_phone = await driver
        .findElement(By.id("phone"))
        .sendKeys(phone);

      const user_mobilephone = await driver
        .findElement(By.id("phone_mobile"))
        .sendKeys(mobilephone);

      const user_alias = await driver
        .findElement(By.id("alias"))
        .sendKeys(alias);

      const submitAccount = await driver
        .findElement(By.id("submitAccount"))
        .click();
    }, 2000);

    this.res.send(subtitulo);
  }
  //LOGOUT
  async logoutCase() {
    let driver = await new Builder().forBrowser("chrome").build();
    //Maximize open page
    driver.manage().window().maximize();
    // GET REQUEST
    await driver.get(this.url);

    const logout = await driver.findElement(By.className("logout")).click();
  }
}

export class LoginTest extends LoginService {
  constructor(url: string, req: Request, res: Response) {
    super(url, req, res);
  }
  //OPEN PAGE
  open_page_test_1() {
    try {
      this.openPageChrome();
    } catch (error) {
      console.log(error);
    }
  }

  // LOGIN
  login_test_2() {
    try {
      this.loginCase();
    } catch (error) {
      console.log(error);
    }
  }
  // REGISTER
  register_test_3() {
    try {
      const url_account_creation =
        "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation";
      this.registerCase(url_account_creation);
    } catch (error) {
      console.log(error);
    }
  }
  // LOGOUT
  logout_test_4() {
    try {
      this.logoutCase();
    } catch (error) {
      console.log(error);
    }
  }
}
