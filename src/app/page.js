import React from "react";

import styles from "./homepage.module.css";
import Image from "next/image";
const LINKEDIN_IMAGE =
	"https://media.licdn.com/dms/image/v2/D5603AQHaD3R-qnCLdg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731231638314?e=1738195200&v=beta&t=T92mDGApSl8vMPkowk6w4zqFrucCH3QEfCgtSWW8LAk";
async function Home() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.main}>
					<p className={styles.introduction}>Hi, I’m Mayur Kumar</p>

					<p className={styles.sub}>
						I am a Software Engineer based in Bangalore, India. I am currently
						working in instamojo.
					</p>
					<p className={styles.sub}>
						On this site, I share my thoughts and experiences about software
						engineering, specifically JavaScript, TypeScript and web technologies
						in general
					</p>
				</div>
				<Image
					className={styles.displayPicture}
					width={300}
					height={300}
					src={"/mayur.jpeg"}
					alt="mayur_kumar"
				/>
			</div>
		</div>
	);
}

export default Home;
