/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../scss/components/Register.module.scss";
import Social from "../UI/social";
import { useDispatch, useSelector } from "react-redux";
import { getAuthErrors, getCurrentUserId, login } from "../../store/user";
import { validateSchemaLogin } from "../../utils/validateSxhemaLogin";
import TextFieldInput from "./TextFieldInput";
import MySubmit from "./MySubmit";

const LoginForm = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const loginError = useSelector(getAuthErrors());
	const dispatch = useDispatch();
	useEffect(() => {
		validate();
	}, [data]);
	const getAuthUser = useSelector(getCurrentUserId());
	useEffect(() => {
		if (getAuthUser) {
			navigate("/auth");
		}
	}, [getAuthUser]);
	const validate = () => {
		validateSchemaLogin
			.validate(data)
			.then(() => setErrors({}))
			.catch((err) => setErrors({ [err.path]: err.message }));

		return Object.keys(errors).length === 0;
	};
	const isValid = Object.keys(errors).length === 0;

	const handleSubmit = (e) => {
		e.preventDefault();
		const isValid = validate();
		if (!isValid) return e;
		dispatch(login(data));
	};
	const handleChange = (target) => {
		setData((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}));
	};

	return (
		<div className={styles.container}>
			<section className={styles.form}>
				<div className={styles.formContent}>
					<h1>Sign In</h1>
					<p>If you don’t have an account register</p>
					<p>
						You can <Link to="/register">Register here!</Link>
					</p>
					<form className={styles.formBox} onSubmit={handleSubmit}>
						<TextFieldInput
							onChange={handleChange}
							value={data.email}
							type="email"
							name="email"
							id="email"
							placeholder="Enter your address"
							errors={errors.email}
						/>
						<TextFieldInput
							onChange={handleChange}
							value={data.password}
							type="password"
							name="password"
							id="password"
							placeholder="Enter your password"
							errors={errors.password}
						/>

						{loginError && <span className={styles.danger}>{loginError}</span>}

						<MySubmit disabled={!isValid} type="submit" value="Login" />
						<div className={styles.formBoxSocial}>
							<span className={styles.formBoxSocialInfo}>or continue with</span>
							<div className={styles.formBoxSocialItems}>
								<Social />
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default LoginForm;
