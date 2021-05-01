import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
	const order = useSelector((store) => store.order);
	let i = 0;
	const printOrder = order.map((item) => {
		let price = item.price * item.size.price;
		let sizeCost = item.price * item.size.price - item.price;
		return (
			<Row key={`${item.key}${i++}`} className="mt-2">
				<Col>
					<Image
						src={`../${item.img}`}
						alt={item.name}
						width="100%"
					/>
				</Col>
				<Col>
					<h3>{item.name}</h3>
					<h4>{item.price} zł</h4>
					<h5>
						Rozmiar {item.size.name}:{" "}
						{`${
							Math.sign(sizeCost) === 1 ? "+" : ""
						} ${sizeCost.toFixed(2)}`}
						zł
					</h5>
					<h5>Dodatki</h5>
					{item.addons.map((addon) => {
						price += parseInt(addon.price);
						return (
							<Row key={`${item.key}${addon.key}`}>
								<Col>{addon.name}</Col>
								<Col>{addon.price} zł</Col>
							</Row>
						);
					})}
					<br />
					Łącznie z dodatkami: {price.toFixed(2)} zł
				</Col>
			</Row>
		);
	});
	return (
		<div>
			{printOrder}
			{order.length > 0 ? (
				<Row>
					<Col className="text-center mt-3">
						<Link to="/order" className="btn btn-primary w-50">
							Zamów
						</Link>
					</Col>
				</Row>
			) : (
				<Row>
					<Col className="text-center mt-2">
						Dodaj coś do koszyka, aby złożyć zamówienie
					</Col>
				</Row>
			)}
		</div>
	);
}
