/** @format */

import React from "react";
import styles from "../scss/components/MainPage.module.scss";
import MyLink from "../components/UI/MyLink";

const MainPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1>Прошу войти в систему</h1>
				<div className={styles.links}>
					<MyLink to={"/register"}>Register</MyLink>
					<MyLink to={"/login"}>Login</MyLink>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
