import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home(props) {
	const pizzas = props.pizzas;
	const list = pizzas.map((pizza) => {
		return (
			<Row key={pizza.key} className="mb-2 mx-auto">
				<Col xs="12" sm="6">
					<img src={pizza.img} alt={pizza.name} width="100%" />
				</Col>
				<Col
					xs="12"
					sm="6"
					className="align-items-center text-center d-flex"
				>
					<div className="mx-auto">
						<h2>{pizza.name}</h2>
						<span className="mr-2">Cena: {pizza.price}</span>
						<span>Rozmiar: {pizza.size.name}</span>
						<br />
						<Link
							to={`/pizza/${pizza.type}`}
							className="btn btn-primary"
						>
							Konfiguruj
						</Link>
					</div>
				</Col>
			</Row>
		);
	});
	return <div>{list}</div>;
}
