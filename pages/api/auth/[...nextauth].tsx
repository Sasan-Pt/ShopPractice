// @ts-nocheck
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { verifyPassword } from "./Hash";
import { any, string } from "prop-types";
// @ts-nocheck

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        console.log(email, password);

        const client = await connectToDatabase();

        const userCollection = client.db().collection("users");
        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("No user found");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in!");
        }
        client.close();
        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
