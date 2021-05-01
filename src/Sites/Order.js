import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Order(props) {
	const [data, setData] = useState({
		name: "",
		surname: "",
		address: "",
		city: "",
		postCode: "",
	});
	const handleForm = (e, field) => {
		switch (field) {
			case "name":
				setData({ ...data, name: e.target.value });
				break;
			case "surname":
				setData({ ...data, surname: e.target.value });
				break;
			case "address":
				setData({ ...data, address: e.target.value });
				break;
			case "city":
				setData({ ...data, city: e.target.value });
				break;
			case "postCode":
				setData({ ...data, postCode: e.target.value });
				break;
			default:
				break;
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			data.name &&
			data.surname &&
			data.address &&
			data.city &&
			data.postCode
		)
			props.history.push({
				pathname: "/order/summary",
				state: { data },
			});
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Imie"
					onChange={(e) => handleForm(e, "name")}
					value={data.name}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Nazwisko"
					onChange={(e) => handleForm(e, "surname")}
					value={data.surname}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Adres"
					onChange={(e) => handleForm(e, "address")}
					value={data.address}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Miasto"
					onChange={(e) => handleForm(e, "city")}
					value={data.city}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Kod-pocztowy"
					onChange={(e) => handleForm(e, "postCode")}
					value={data.postCode}
				/>
			</Form.Group>
			<Button type="submit">Zamawiam</Button>
		</Form>
	);
}
