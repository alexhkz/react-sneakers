import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
	{title: 'Мужские кроссовки Nike Blazer Mid Suede', price: '12 999', imageUrl: "/img/sneakers/1.jpg", id: "1"},
	{title: 'Мужские кроссовки Nike Air Max 270', price: '15 600', imageUrl: "/img/sneakers/2.jpg", id: "2"},
	{title: 'Мужские кроссовки Nike Blazer Mid Suede', price: '8499', imageUrl: "/img/sneakers/3.jpg", id: "3"},
	{title: 'Мужские кроссовки Puma X Aka Boku Future Rider', price: '8999', imageUrl: "/img/sneakers/4.jpg", id: "4"},
];

function App() {
  return (
    <div className="wrapper clear">
		<div style={{display: 'none'}} className="overlay">
			<Drawer />
		</div>

		<Header />

		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>Все кроссовки</h1>
				<div className="search-block d-flex">
					<img src="/img/search.svg" alt="search" />
					<input placeholder="Поиск..." />
				</div>
			</div>
			
			<div className="d-flex">
				{arr.map((obj) => (
					<Card 
						title={obj.title} 
						price={obj.price} 
						imageUrl={obj.imageUrl}
						key={obj.id} />
					))}
			</div>

		</div>
    </div>
  );
}

export default App;
