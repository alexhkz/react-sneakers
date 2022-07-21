import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// при первом рендере отправляем запрос на получение кроссов и параллельно запрос на получение корзины
	useEffect(() => {
		async function fetchData() {
			const cartsResponse = await axios.get('https://62d01d38d9bf9f170583ae53.mockapi.io/cart');
			const favoritesResponse = await axios.get('https://62d01d38d9bf9f170583ae53.mockapi.io/favorites');
			const itemsResponse = await axios.get('https://62d01d38d9bf9f170583ae53.mockapi.io/items');

			setIsLoading(false);
			setCartItems(cartsResponse.data);
			setFavorites(favoritesResponse.data);
			setItems(itemsResponse.data);
		}
		fetchData();
	}, []);

	// отправляем наши данные (в корзине) на сервер
	// передаём сначала предыдущие пропсы и сохраняем в стейте
	// если в корзине такой же элемент, как в obj.id, то исключаем из массива
	// иначе создаем товар 
	const onAddToCart = (obj) => {
			if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
				axios.delete(`https://62d01d38d9bf9f170583ae53.mockapi.io/cart/${obj.id}`)
				setCartItems(prev => prev.filter((elem) => Number(elem.id) !== Number(obj.id)))
			} else {
				axios.post('https://62d01d38d9bf9f170583ae53.mockapi.io/cart', obj)
				setCartItems((prev) => [...prev, obj]);
			}
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://62d01d38d9bf9f170583ae53.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	}

	// если в массиве фаворитов такой же айди, как в нажатом при клике - отправляем запрос на удаление с айди
	// если похожий айди не нашёлся отправляем запрос на создание и сохраняем объект в стейт
	// деструктуризируем респонс и передаём дальше
	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://62d01d38d9bf9f170583ae53.mockapi.io/favorites/${obj.id}`)
				setFavorites((prev) => prev.filter((elem) => Number(elem.id) !== Number(obj.id)))
			} else {
				const {data} = await axios.post(`https://62d01d38d9bf9f170583ae53.mockapi.io/favorites`, obj)
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты')
		}
	}

	const onChangeSearchInput = (e) => {
		setSearchValue(e.target.value)
	}

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.id) === Number(id));
	}

  return (
	<AppContext.Provider 
		value={{
			items, 
			cartItems, 
			favorites, 
			isItemAdded, 
			onAddToFavorite,
			onAddToCart,
			setCartOpened,
			setCartItems,
		}}>
		<div className="wrapper clear">
			<Drawer 
					items={cartItems} 
					onClose={() => setCartOpened(false)} 
					onRemove={onRemoveItem} 
					opened={cartOpened}
				/>
				<Header onClickCart={() => setCartOpened(true)} />
			<Routes>
				<Route  path="/"  
					element={<Home 
						items={items}
						cartItems={cartItems}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						onChangeSearchInput={onChangeSearchInput}
						onAddToFavorite={onAddToFavorite} 
						onAddToCart={onAddToCart}
						isLoading={isLoading}  />}
						/> 
				<Route  path="/favorites"  
					element={<Favorites />} />                  
				<Route  path="/orders"  
					element={<Orders />} />                  
			</Routes>
		</div>
	</AppContext.Provider>
  );
}

export default App;
