import React from "react";
import Link from "next/link";

import Logo from "@/components/Logo";

import DecorativeSwoops from "./DecorativeSwoops";
import styles from "./Footer.module.css";

function Footer() {
	return (
		<div className={styles.wrapper}>
			<DecorativeSwoops />
			<div className={styles.content}>
				<div>
					<Logo mobileAlignment="center" />
				</div>
				<nav>
					<h2 className={styles.linkHeading}>Links</h2>
					<ul className={styles.linkList}>
						<li>
							<Link href="/rss">RSS feed</Link>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/mayurkumarpv/">Linkedin</a>
						</li>
						<li>
							<a href="https://x.com/mayyurkumar">Twitter</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Footer;
