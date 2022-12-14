import React from "react"
import styles from "./styles.module.css"
import map from "./map.png"
import coolAnim from "../../coolAnim"

export default function MapBlock()
{
	return <div className={styles.root}>
		<h2 data-ac ref={coolAnim()}>Контактная информация</h2>
		<ul>
			<li>
				<h3 data-ac ref={coolAnim()}>Влад</h3>
				<ul>
					<li ref={coolAnim()}>г. Москва, Ленинский пр-т, 10</li>
					<li ref={coolAnim()}>г. Москва, ул. Большая Пушкинская, стр. 10</li>
				</ul>
			</li>
			<li>
				<h3 data-ac ref={coolAnim()}>Николай</h3>
				<ul>
					<li ref={coolAnim()}>ул. Молодогвардейцев, 18, Воронеж, Воронежская обл.</li>
					<li ref={coolAnim()}>ул. Героев Сибиряков, 13, Воронеж, Воронежская обл.</li>
				</ul>
			</li>
			<li>
				<h3 data-ac ref={coolAnim()}>Михаил</h3>
				<ul>
					<li ref={coolAnim()}>Мещерский парк</li>
					<li ref={coolAnim()}>Останкинская телебашня</li>
				</ul>
			</li>
			<li>
				<h3 data-ac ref={coolAnim()}>Дарья</h3>
				<ul>
					<li ref={coolAnim()}>Нижняя Радищевская улица, 5с2</li>
					<li ref={coolAnim()}>Красная площадь, 1</li>
				</ul>
			</li>
		</ul>
		<img data-ac src={map} alt="Map" />
	</div>
}
