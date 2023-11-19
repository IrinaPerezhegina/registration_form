/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../scss/components/Register.module.scss";
import { getAuthErrors, getCurrentUserId, signUp } from "../../store/user";
import { validateSchemaRegister } from "../../utils/validateSxhemaRegister";
import TextFieldInput from "./TextFieldInput";
import MySubmit from "./MySubmit";

const RegisterForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [data, setData] = useState({
		email: "",
		username: "",
		password: "",
		confirm_password: "",
	});
	const getAuthUser = useSelector(getCurrentUserId());
	const registerError = useSelector(getAuthErrors());
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (getAuthUser) {
			navigate("/auth");
		}
	}, [getAuthUser]);

	useEffect(() => {
		validate();
	}, [data]);
	const validate = () => {
		validateSchemaRegister
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
		dispatch(signUp(data));
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
					<h1>Sign Up</h1>
					<p>If you already have an account register</p>
					<p>
						You can <Link to="/login">Login here!</Link>
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
							value={data.username}
							type="text"
							name="username"
							id="username"
							placeholder="Enter your User name"
							errors={errors.username}
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
						<TextFieldInput
							onChange={handleChange}
							value={data.confirm_password}
							type="password"
							name="confirm_password"
							id="confirm_password"
							placeholder="Confirm your Password"
							errors={errors.confirm_password}
						/>
						{registerError && (
							<span className={styles.danger}>{registerError}</span>
						)}

						<MySubmit disabled={!isValid} type="submit" value="Register" />
					</form>
				</div>
			</section>
		</div>
	);
};

export default RegisterForm;
