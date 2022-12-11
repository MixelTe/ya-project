import React from "react"
import styles from "./styles.module.css"
import icon from "./Vector.svg"
import icon1 from "./Vector1.svg"

export default function Card({ name })
{
	return <div className={styles.root}>
		<div className={styles.title}>
			{name}
			<a href=""><img src={icon1} alt="tg" /></a>
			<a href=""><img src={icon} alt="gh" /></a>
		</div>
		<div className={styles.desc}>Рассказ о себе. Lorem ipsum dolor amet consectetur. Duis sed velit libero urna vivamus sem sit. Ut consequat tempus enim ac ullamcorper.</div>
		<div className={styles.tech}>HTML, CSS, JavaScript, React</div>
	</div>
}
