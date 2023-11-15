/** @format */

import { Navigate, useRoutes } from "react-router-dom";
import RegisterForm from "../components/UI/registerForm";
import LoginForm from "../components/UI/loginForm";

export const useRouter = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <RegisterForm />,
		},
		{
			path: "/login",
			element: <LoginForm />,
		},
		{
			path: "*",
			element: <Navigate to={"error"} />,
		},
	]);

	return routes;
};
