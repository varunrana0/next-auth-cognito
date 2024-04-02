import nextAuth from "next-auth";
import { type NextAuthOptions } from "next-auth";
import Cognito from "next-auth/providers/cognito";

const authOptions: NextAuthOptions = {
	providers: [
		Cognito({
			clientId: process.env.COGNITO_CLIENT_ID!,
			clientSecret: process.env.COGNITO_SECRET!,
			issuer: process.env.COGNITO_DOMAIN!,
		}),
	],
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
