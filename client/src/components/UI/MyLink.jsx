/** @format */

import React from "react";
import styles from "../../scss/components/MyLink.module.scss";
import { Link } from "react-router-dom";

const MyLink = ({ children, ...props }) => {
	return (
		<>
			<Link className={styles.myLink} {...props}>
				{children}
			</Link>
		</>
	);
};

export default MyLink;
