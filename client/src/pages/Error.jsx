/** @format */

import React from "react";
import styles from "../scss/components/MainPage.module.scss";

const ErrorPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<span>Ошибка, попробуйте позже</span>
			</div>
		</div>
	);
};

export default ErrorPage;
