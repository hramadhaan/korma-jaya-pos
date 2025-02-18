import { NuxtAuthHandler } from "#auth";
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export default NuxtAuthHandler({
  // secret: useRuntimeConfig().authSecret,
  pages: {
    signIn: "/authentication/validate",
    error: "/authentication/validate",
    signOut: "/authentication/logout",
  },
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        token: {
          label: "Token",
          type: "text",
          placeholder: "Enter your token",
        },
      },
      authorize: async (credentials) => {
        const { token } = credentials ?? {};
        const response = await axios.get(
          "https://korma-jaya-api.shopnstore.my.id/auth/profile",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        if (response.status === 200) {
          const resData = response.data.data;
          const user = {
            id: resData.id,
            phone: resData.phone,
            name: resData.name,
            role: resData.role,
            token: token,
          };
          return Promise.resolve(user);
        }
        return Promise.resolve(null);
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token?.sub;
        session.user.token = token?.token as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
        // @ts-ignore
        token.token = user.token;
        // @ts-ignore
        token.role = user.role;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});
