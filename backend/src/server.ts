import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {
  clerkClient,
  clerkMiddleware,
  getAuth,
  requireAuth,
} from "@clerk/express";
import cors from "cors";

dotenv.config();
dotenv.config({ path: ".env.local" });

const app: Express = express();
const port = process.env.PORT || 5000;


app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(clerkMiddleware());
app.use(express.json()); // Ensure JSON parsing for incoming requests

app.get("/", (req: Request, res: Response) => {
  res.json("Express + TypeScript Server");
});

app.get("/protected", requireAuth(), async (req, res) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const user = await clerkClient.users.getUser(userId);
    res.json({ user });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is now running at http://localhost:${port}`);
});
