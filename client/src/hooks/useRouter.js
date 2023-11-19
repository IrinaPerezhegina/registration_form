/** @format */

import { Navigate, useRoutes } from "react-router-dom";
import RegisterForm from "../components/UI/registerForm";
import LoginForm from "../components/UI/loginForm";
import MainPage from "../pages/MainPage";
import AuthorizedUserPage from "../pages/AuthorizedUserPage";
import ErrorPage from "../pages/Error";

export const useRouter = () => {
	const privateRoutes = useRoutes([
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
			path: "/error",
			element: <ErrorPage />,
		},
		{
			path: "*",
			element: <Navigate to={"error"} />,
		},
	]);
	const publicRoutes = useRoutes([
		{
			path: "/auth",
			element: <AuthorizedUserPage />,
		},
		{
			path: "*",
			element: <Navigate to={"/auth"} />,
		},
	]);

	return [privateRoutes, publicRoutes];
};
