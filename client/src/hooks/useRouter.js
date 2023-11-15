/** @format */

import { Navigate, useRoutes } from "react-router-dom";
import RegisterForm from "../components/UI/registerForm";
import LoginForm from "../components/UI/loginForm";
import MainPage from "../pages/MainPage";
import AuthorizedUserPage from "../pages/AuthorizedUserPage";

export const useRouter = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <MainPage />,
		},
		{
			path: "/register",
			element: <RegisterForm />,
		},
		{
			path: "/login",
			element: <LoginForm />,
		},
		{
			path: "/auth",
			element: <AuthorizedUserPage />,
		},
		{
			path: "*",
			element: <Navigate to={"error"} />,
		},
	]);

	return routes;
};
