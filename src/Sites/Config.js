import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
export default function Config(props) {
	const pizza = { ...props.pizzas[props.match.params.id - 1] };
	const [checked, setChecked] = useState([]);
	const [sumPrice, setSumPrice] = useState(pizza.price);
	const dispatch = useDispatch();
	const availableSizes = [
		{ key: 10, name: "26", price: "0.9" },
		{ key: 20, name: "30", price: "1.0" },
		{ key: 30, name: "40", price: "1.2" },
	];
	const [chosenSize, setChosenSize] = useState(availableSizes[1]);
	const availableAddons = [
		{ key: 1, name: "ser", price: "3" },
		{ key: 2, name: "kurczak", price: "5" },
		{ key: 3, name: "pieczarki", price: "1" },
		{ key: 4, name: "salami", price: "3" },
		{ key: 5, name: "peperoni", price: "4" },
	];
	const countPrice = () => {
		let addonsPrice = 0;
		availableAddons.forEach((item) => {
			if (checked.includes(item.key)) {
				addonsPrice = parseInt(addonsPrice) + parseInt(item.price);
			}
		});
		const sizeMultiplier = parseFloat(chosenSize.price);
		const newPrice = (
			parseInt(pizza.price) * sizeMultiplier +
			parseInt(addonsPrice)
		).toFixed(2);
		setSumPrice(newPrice);
	};
	useEffect(() => {
		countPrice();
	});
	const checkChangeHandler = (id) => {
		const array = checked;
		let newChecked = [...array];
		if (!array.includes(id)) {
			newChecked.push(id);
		} else {
			newChecked = array.filter((item) => {
				return item !== id;
			});
		}
		setChecked(newChecked);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const addons = availableAddons.filter((item) => {
			return checked.includes(item.key);
		});
		pizza.key = uniqid();
		pizza.addons = addons;
		pizza.size = chosenSize;
		dispatch({ type: "ADD", payload: pizza });
		props.history.push("/");
	};
	const listSize = availableSizes.map((size) => {
		return (
			<Form.Check
				key={size.key}
				id={size.key}
				inline
				label={size.name}
				name="radioSize"
				type="radio"
				checked={size.name === chosenSize.name}
				onChange={() => {
					setChosenSize(size);
					countPrice();
				}}
			/>
		);
	});
	const listAddons = availableAddons.map((addon) => {
		return (
			<Form.Check
				key={addon.key}
				id={addon.key}
				label={`${addon.name} ${addon.price}zł`}
				type="checkbox"
				onChange={() => checkChangeHandler(addon.key)}
			/>
		);
	});

	return (
		<Row className="mt-2">
			<Col xs="12" md="6">
				<img src={`../../${pizza.img}`} alt={pizza.name} width="100%" />
			</Col>
			<Col xs="12" md="6">
				<div className="text-center">
					<h2>{pizza.name}</h2>
					<Form>
						<h4>Rozmiar</h4>
						<Form.Group>{listSize}</Form.Group>
						<h4>Dodatki</h4>

						<Form.Group>{listAddons}</Form.Group>
						<span className="mr-2">Razem: {sumPrice} zł</span>
						<Button onClick={submitHandler}>
							Dodaj do koszyka
						</Button>
					</Form>
				</div>
			</Col>
		</Row>
	);
}
