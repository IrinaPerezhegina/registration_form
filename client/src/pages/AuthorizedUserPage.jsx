/** @format */

import React from "react";
import styles from "../scss/components/MainPage.module.scss";
import MyLink from "../components/UI/MyLink";

const AuthorizedUserPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Добро Пожаловать в систему!</h1>
				<MyLink>Выйти из системы</MyLink>
			</div>
		</div>
	);
};

export default AuthorizedUserPage;
