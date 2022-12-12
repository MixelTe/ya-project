import React from "react"
import styles from "./styles.module.css"
import map from "./map.png"

export default function MapBlock()
{
	return <div className={styles.root}>
		<h2>Контактная информация</h2>
		<ul>
			<li>
				<h3>Влад</h3>
				<ul>
					<li>г. Москва, Ленинский пр-т, 10</li>
					<li>г. Москва, ул. Большая Пушкинская, стр. 10</li>
				</ul>
			</li>
			<li>
				<h3>Николай</h3>
				<ul>
					<li>ул. Молодогвардейцев, 18, Воронеж, Воронежская обл.</li>
					<li>ул. Героев Сибиряков, 13, Воронеж, Воронежская обл.</li>
				</ul>
			</li>
			<li>
				<h3>Михаил</h3>
				<ul>
					<li>Мещерский парк</li>
					<li>Останкинская телебашня</li>
				</ul>
			</li>
			<li>
				<h3>Дарья</h3>
				<ul>
					<li>Нижняя Радищевская улица, 5с2</li>
					<li>Красная площадь, 1</li>
				</ul>
			</li>
		</ul>
		<img src={map} alt="Map" />
	</div>
}
