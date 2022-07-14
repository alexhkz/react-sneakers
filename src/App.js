import { useEffect, useState } from "react";

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";



function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch('https://62d01d38d9bf9f170583ae53.mockapi.io/items')
		.then(res => {
			return res.json();
		})
		.then((data) => {
			setItems(data)
		});
	}, []);

	const onAddToCard = (obj) => {
		setCartItems((prev) => [...prev, obj]);
	}

  return (
    <div className="wrapper clear">
		{/* используем && вметсо тернарного оператора и null */}
		{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
		<Header onClickCart={() => setCartOpened(true)} />
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Все кроссовки</h1>
				<div className="search-block d-flex">
					<img src="/img/search.svg" alt="search" />
					<input placeholder="Поиск..." />
				</div>
			</div>
			
			<div className="d-flex flex-wrap">
				{items.map((item) => (
					<Card 
						title={item.title} 
						price={item.price} 
						imageUrl={item.imageUrl}
						key={item.id} 
						onClickFavorite={() => console.log('Add to bookmark')}
						onClickPlus={(obj) => onAddToCard(obj)} />
					))}
			</div>

		</div>
    </div>
  );
}

export default App;
