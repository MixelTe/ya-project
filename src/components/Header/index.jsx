import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./styles.module.css"

export default function Header()
{
	return <div className={styles.root}>
		<NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to={"/"}>Первая страница</NavLink>
		<NavLink className={({ isActive }) => isActive ? styles.active : styles.link} to={"/projects"}>Вторая страница</NavLink>
	</div>
}
