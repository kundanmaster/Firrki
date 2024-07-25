// // src/auth/PostgresAdapter.js
// import client from '../lib/db';
// import { Adapter, AdapterUser } from 'next-auth/adapters';

// export const PostgresAdapter = (): Adapter => {
//   return {
//     async createUser(user: AdapterUser) {
//       const result = await client.query(
//         `INSERT INTO users (name, email, emailVerified, image) 
//          VALUES ($1, $2, $3, $4) 
//          RETURNING *`,
//         [user.name, user.email, user.emailVerified, user.image]
//       );
//       return result.rows[0];
//     },
//     async getUser(id: string) {
//       const result = await client.query(
//         `SELECT * FROM users WHERE id = $1`,
//         [id]
//       );
//       return result.rows[0];
//     },
//     async getUserByEmail(email: string) {
//       const result = await client.query(
//         `SELECT * FROM users WHERE email = $1`,
//         [email]
//       );
//       return result.rows[0];
//     },
//     async getUserByAccount({ providerAccountId, provider }) {
//       const result = await client.query(
//         `SELECT users.* FROM users 
//          JOIN accounts ON users.id = accounts."userId" 
//          WHERE accounts."providerAccountId" = $1 
//          AND accounts.provider = $2`,
//         [providerAccountId, provider]
//       );
//       return result.rows[0];
//     },
//     async updateUser(user: AdapterUser) {
//       const result = await client.query(
//         `UPDATE users SET name = $1, email = $2, emailVerified = $3, image = $4 
//          WHERE id = $5 
//          RETURNING *`,
//         [user.name, user.email, user.emailVerified, user.image, user.id]
//       );
//       return result.rows[0];
//     },
//     async deleteUser(id: string) {
//       await client.query(
//         `DELETE FROM users WHERE id = $1`,
//         [id]
//       );
//     },
//     async linkAccount(account) {
//       await client.query(
//         `INSERT INTO accounts ("userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, id_token, scope, session_state, token_type) 
//          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
//         [
//           account.userId,
//           account.type,
//           account.provider,
//           account.providerAccountId,
//           account.refresh_token,
//           account.access_token,
//           account.expires_at,
//           account.id_token,
//           account.scope,
//           account.session_state,
//           account.token_type
//         ]
//       );
//     },
//     async unlinkAccount({ providerAccountId, provider }) {
//       await client.query(
//         `DELETE FROM accounts WHERE "providerAccountId" = $1 AND provider = $2`,
//         [providerAccountId, provider]
//       );
//     },
//     async createSession({ sessionToken, userId, expires }) {
//       const result = await client.query(
//         `INSERT INTO sessions ("sessionToken", "userId", expires) 
//          VALUES ($1, $2, $3) 
//          RETURNING *`,
//         [sessionToken, userId, expires]
//       );
//       return result.rows[0];
//     },
//     async getSessionAndUser(sessionToken: string) {
//       const result = await client.query(
//         `SELECT sessions.*, users.* FROM sessions 
//          JOIN users ON sessions."userId" = users.id 
//          WHERE sessions."sessionToken" = $1`,
//         [sessionToken]
//       );
//       if (!result.rows.length) return null;
//       const { id, name, email, emailVerified, image } = result.rows[0];
//       return {
//         session: {
//           id: result.rows[0].id,
//           sessionToken: result.rows[0].sessionToken,
//           userId: result.rows[0].userId,
//           expires: result.rows[0].expires,
//         },
//         user: { id, name, email, emailVerified, image },
//       };
//     },
//     async updateSession({ sessionToken, expires }) {
//       const result = await client.query(
//         `UPDATE sessions SET expires = $1 WHERE "sessionToken" = $2 RETURNING *`,
//         [expires, sessionToken]
//       );
//       return result.rows[0];
//     },
//     async deleteSession(sessionToken: string) {
//       await client.query(
//         `DELETE FROM sessions WHERE "sessionToken" = $1`,
//         [sessionToken]
//       );
//     },
//     async createVerificationToken({ identifier, token, expires }) {
//       const result = await client.query(
//         `INSERT INTO verification_token (identifier, token, expires) 
//          VALUES ($1, $2, $3) 
//          RETURNING *`,
//         [identifier, token, expires]
//       );
//       return result.rows[0];
//     },
//     async useVerificationToken({ identifier, token }) {
//       const result = await client.query(
//         `DELETE FROM verification_token 
//          WHERE identifier = $1 AND token = $2 
//          RETURNING *`,
//         [identifier, token]
//       );
//       return result.rows[0];
//     },
//   };
// };
