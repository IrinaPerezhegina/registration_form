/** @format */

import React from "react";
import styles from "../../scss/components/MySubmit.module.scss";

const MySubmit = ({ disabled, value, type }) => {
	return (
		<input
			disabled={disabled}
			type={type}
			value={value}
			className={!disabled ? styles.myInput : styles.disabled}
		/>
	);
};

export default MySubmit;
