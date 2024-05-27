// auth.ts
// import { AuthOptions } from "next-auth";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import prisma from "@/vendor/db"; // Adjust the path as needed

// const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   pages: {
//     signIn: "/",
//   },
//   debug: process.env.NODE_ENV === "development",
//   session: {
//     strategy: "jwt",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default authOptions;
