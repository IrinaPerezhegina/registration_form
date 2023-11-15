/** @format */
import * as yup from "yup";

export const validateSchemaRegister = yup.object().shape({
	confirm_password: yup
		.string()
		.required(`Поле 'Password' обязательно для заполнения`)
		.oneOf([yup.ref("password"), null], "Passwords must match"),
	password: yup
		.string()
		.required(`Поле 'Password' обязательно для заполнения`)
		.min(8),
	username: yup.string().required(`Поле 'Username' обязательно для заполнения`),
	email: yup
		.string()
		.required(`Поле 'Email' обязательно для заполнения`)
		.email(),
});
