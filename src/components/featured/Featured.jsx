import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey,blabla</b>Discover blabla
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image
						src="/p1.jpeg"
						alt=""
						fill
						className={styles.image}
					/>
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
					<p className={styles.postDesc}>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Perspiciatis temporibus molestias esse, eos optio
						dolore officia enim at quidem, voluptates libero sint
						dolorem quibusdam pariatur magnam voluptate. Quidem,
						perspiciatis exercitationem.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
