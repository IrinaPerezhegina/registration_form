/** @format */
import React from "react";
import styles from "../../scss/components/TextField.module.scss";
import Icon from "./Icon";

const TextFieldInput = ({
	onChange,
	label,
	name,
	value,
	type,
	id,
	placeholder,
	errors,
}) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value });
	};
	return (
		<div className={styles.formBoxInputBox}>
			<label className={styles.formBoxInputBoxInfo} htmlFor={name}>
				{label}
			</label>
			<label className={styles.formBoxInputBoxIcon} htmlFor={name}>
				<Icon name={name} />
			</label>
			<input
				onChange={handleChange}
				value={value}
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
			/>
			<div className={errors?.name ? "" : styles.inputError}>{errors}</div>
		</div>
	);
};

export default TextFieldInput;
