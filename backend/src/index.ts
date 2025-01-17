import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
dotenv.config({ path: ".env.local" });

const app: Express = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is now running at http://localhost:${port}`);
});
