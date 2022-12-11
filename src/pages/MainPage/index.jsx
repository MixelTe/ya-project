import React from "react"
import HeroBlock from "../../components/HeroBlock"
import styles from "./styles.module.css"

export default function MainPage()
{
	return <div className={styles.root}>
		<HeroBlock/>
	</div>
}
