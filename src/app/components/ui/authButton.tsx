"use client";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
	const { data, status, update } = useSession();

	if (data) {
		return (
			<>
				Signed in as {data?.user?.email} <br />
				<button
					className="text-white bg-blue-600 px-5 py-2 rounded-md"
					onClick={() => signOut()}>
					Sign out
				</button>
			</>
		);
	}
	return (
		<div className="flex items-center">
			<p className="mr-4">Not signed in</p>
			<button
				className="text-white bg-blue-600 px-5 py-2 rounded-md"
				onClick={() =>
					signIn("cognito", undefined, { prompt: "/login" })
				}>
				Sign in
			</button>
		</div>
	);
};

export default AuthButton;
