/** @format */

import React from "react";
import styles from "../../scss/components/social.module.scss";
import facebook from "../../assets/login/facebook.svg";
import twitter from "../../assets/login/twitter.svg";
import instagram from "../../assets/login/instagram.svg";
import { Link } from "react-router-dom";

const Social = () => {
	return (
		<div className={styles.socialWrapper}>
			<Link className={styles.social} to="#">
				<img src={facebook} alt="facebook" />
			</Link>
			<Link className={styles.social} to="#">
				<img src={twitter} alt="twitter" />
			</Link>
			<Link className={styles.social} to="#">
				<img src={instagram} alt="instagram" />
			</Link>
		</div>
	);
};

export default Social;
