import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "./Hash";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  console.log(res.body);

  const { email, password } = data.body;
  console.log(data.body);

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "invalid input-password should also be at least 7 charcter long",
    });
  }

  const client = await connectToDatabase();

  const db = await client.db();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    res.status(422).json({
      message: "already exist",
    });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });
  res.status(201).json({ message: "Create User" });
}

export default handler;
