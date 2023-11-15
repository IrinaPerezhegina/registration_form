/** @format */
import * as yup from "yup";

export const validateSchemaLogin = yup.object().shape({
	password: yup
		.string()
		.required(`Поле 'Password' обязательно для заполнения`)
		.min(8),
	email: yup
		.string()
		.required(`Поле 'Email' обязательно для заполнения`)
		.email(),
});
