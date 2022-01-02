import express, {Request, Response, Application} from "express";
import morgan from "morgan";
import logger from "./utils/logger";
import Router from "./routes";
import swaggerUi from "swagger-ui-express";

const app: Application = express()

app.use(express.static("public"));
app.use(express.json());
app.use(morgan("tiny"));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);

app.listen(3000, () => logger.info(`server is up and running on http://localhost:3000`))