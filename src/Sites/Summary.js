import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

export default function Summary(props) {
	const order = useSelector((state) => state.order);
	const location = useLocation();
	let totalPrice = 0;
	order.forEach((item) => {
		let basicPizza = parseInt(item.price) * parseFloat(item.size.price);
		totalPrice += basicPizza;
		item.addons.forEach((addon) => {
			totalPrice += parseInt(addon.price);
		});
	});

	const personData = {
		name: location.state.data.name,
		surname: location.state.data.surname,
		address: location.state.data.address,
		city: location.state.data.city,
		postCode: location.state.data.postCode,
	};
	if (location.state)
		return (
			<Row>
				<Col className="text-center">
					<div>Imie: {personData.name}</div>
					<div>Nazwisko: {personData.surname}</div>
					<div>Adres: {personData.address}</div>
					<div>Miasto: {personData.city}</div>
					<div>Kod pocztowy: {personData.postCode}</div>
					<div>Razem: {totalPrice} zł</div>
					<Button
						className="mt-2"
						onClick={() => {
							console.table(order);
							console.table(personData);
							alert("Koniec");
						}}
					>
						Zamawiam i płacę
					</Button>
				</Col>
			</Row>
		);
	else {
		props.history.push("/");
		return "";
	}
}
