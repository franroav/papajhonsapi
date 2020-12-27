/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
//import { createConnection } from "typeorm";
import * as express from "express";
import * as cors from "cors";
import * as helmet from "helmet";
import routes from "./routes/index";

const PORT = process.env.PORT || 3000;

// create express app
const app = express();
//middleware
app.use(cors());
//  urlencoded is in order to parse different content type
app.use(express.urlencoded({ extended: false }));
//Helmet helps you secure your Express.js apps by setting various HTTP headers. It's not a silver bullet, but it can help!
app.use(helmet());
// parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

// Routes
app.use("/", routes);

// LISTEN ON PORT 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//conexion instance to mysql/postgre using typeorm
/*createConnection()
  .then(async (connection) => {

  })
  .catch((error) => console.log(error));*/
