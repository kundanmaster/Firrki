import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentiaProvider from "next-auth/providers/credentials";
// import PostgresAdapter from "@auth/pg-adapter";
import {LoginFormSchema, FormState, SignupFormSchema} from "./lib/zod"
// import { Pool } from "pg";
import bcrypt,{ compare } from "bcryptjs";
import client from '../src/lib/db';
// import type { NextApiRequest, NextApiResponse } from 'next';

// const pool = new Pool({
//   host: 'localhost',
//   user: 'postgres',
//   password: 'postgres',
//   database: 'cna',
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// });

async function findUserByEmail(email: string) {
  // const client = await pool.connect();
  try {
    const res = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return res.rows[0];
  } finally {
    // client.release();
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentiaProvider({
      name: "Credentials",
      credentials: {
        email: {
          // label: "Email",
          // type: "email",
          // placeholder: "Email",
        },
        password: {
          // label: "Password",
          // type: "password",
          // placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        // const email = credentials.email as string | undefined;
        // const password = credentials.password as string | undefined;
        const { email, password } = await LoginFormSchema.parseAsync(credentials);
        console.log(email, password);
        if (!email || !password)
          throw new CredentialsSignin(
            "Please Provide both email and password."
          );

        //  Connection with database here

        const user = await findUserByEmail(email);
        if (!user) throw new CredentialsSignin("user not Found");
        if (!user.password) throw new CredentialsSignin("Invalid password");
        // if(typeof email !== "string") throw new CredentialsSignin();
        const isPasswordMatch = await compare(password, user.password);
        if (!isPasswordMatch)
          throw new CredentialsSignin("Password Does not match");
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/signup",
  },
  session: {
    maxAge: 60 * 60 * 5,
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("User object:", { user });
      if (user) {
        token.email = user.email;
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      console.log(token, 'token generated');
      // Add the token data to the session
      session.user.id = (token.id as string);
      // session.maxAge = token.maxAge || session.maxAge;
      return session;
      // session.user = token;
      // return session;
    },
  },
});


// export async function signup(formData: FormData): Promise<FormState> {
//   const validatedFields = SignupFormSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     password: formData.get("password"),
//   });

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//     };
//   }

//   const { name, email, password } = validatedFields.data;

//   try {
//     const existingUser = await client.query(
//       "SELECT id FROM users WHERE email = $1",
//       [email]
//     );

//     if (existingUser.rows.length > 0) {
//       return {
//         errors: { email: ['Email already exists'] },
//       };
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await client.query(
//       "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
//       [name, email, hashedPassword]
//     );

//     const userId = result.rows[0].id.toString();

//     return {
//       // success: true,
//       message: "User signed up successfully!",
//     };
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("Signup error:", error.message);
//     } else {
//       console.error("An unexpected error occurred");
//     }
//     return {
//       // errors: { global: ['An error occurred while creating your account.'] },
//     };
//   }
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { firstname, lastname, email, password } = req.body;

//     if (!firstname || !email || !password) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     try {
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const role = 'user';
//       const result = await client.query(
//         'INSERT INTO users (firstname, lastname, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id',
//         [firstname, lastname, email, hashedPassword, role]
//       );

//       return res.status(201).json({ success: true, userId: result.rows[0].id });
//     } catch (error) {
//       console.error('Error during signup:', error);
//       return res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


export async function signup(state: FormState, formData: FormData): Promise<FormState>  {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early with errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  // 3. Check if the user's email already exists
  try {
    const existingUser = await client.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return {
        message: 'Email already exists, please use a different email or login.',
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
      [name, email, hashedPassword]
    );

    const userId = result.rows[0].id.toString();
    console.log(userId);
    
    // await createSession(userId);
    // console.log("53 userId details in Auth page",userId);

    return {
      message: "User signed up successfully!",
    };
  } catch (error) {
    console.error("Signup error:", error);
    console.log("Signup error:", error);
    return {
      message: 'An error occurred while creating your account.',
    };
  }
}