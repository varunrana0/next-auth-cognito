"use client";
import { SessionProvider } from "next-auth/react";

const Auth = ({ children }: { children: any }) => {
	return (
		<SessionProvider session={{ expires: "36000" }}>
			{children}
		</SessionProvider>
	);
};

export default Auth;
