/** @format */

import React from "react";
import styles from "../scss/components/MainPage.module.scss";
import MyLink from "../components/UI/MyLink";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user";

const AuthorizedUserPage = () => {
	const dispatch = useDispatch();

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Добро Пожаловать в систему!</h1>
				<MyLink to={"/"} onClick={() => dispatch(logOut())}>
					Выйти из системы
				</MyLink>
			</div>
		</div>
	);
};

export default AuthorizedUserPage;
