import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./Sites/Home";
import Config from "./Sites/Config";
import Cart from "./Sites/Cart";
import Order from "./Sites/Order";
import Summary from "./Sites/Summary";
import { Container } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import uniqid from "uniqid";
function App() {
	const pizzas = [
		{
			key: uniqid(),
			type: 1,
			name: "Margarita",
			price: 20,
			size: { key: 20, name: "30", price: "1.0" },
			img: "Images/margherita.jpg",
			addons: [],
		},
		{
			key: uniqid(),
			type: 2,
			name: "Cztery sery",
			price: 26,
			size: { key: 20, name: "30", price: "1.0" },
			img: "Images/4cheeses.jpg",
			addons: [],
		},
		{
			key: uniqid(),
			type: 3,
			name: "Cappricciosa",
			price: 40,
			size: { key: 20, name: "30", price: "1.0" },
			img: "Images/cappricciosa.jpg",
			addons: [],
		},
		{
			key: uniqid(),
			type: 4,
			name: "Hawajska",
			price: 33,
			size: { key: 20, name: "30", price: "1.0" },
			img: "Images/hawaiian.jpg",
			addons: [],
		},
	];
	return (
		<BrowserRouter>
			<Switch>
				<Container>
					<Link to="/" className="btn btn-primary w-50">
						Home
					</Link>
					<Link to="/cart" className="btn btn-success w-50">
						Koszyk
					</Link>
					<Route
						exact
						path="/"
						render={(props) => <Home {...props} pizzas={pizzas} />}
					/>
					<Route
						path="/pizza/:id"
						render={(props) => (
							<Config {...props} pizzas={pizzas} />
						)}
					/>
					<Route path="/cart" component={Cart} />
					<Route exact path="/order" component={Order} />
					<Route
						exact
						path="/order/summary"
						render={(props) => <Summary {...props} />}
					/>
				</Container>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
