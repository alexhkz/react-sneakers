import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [cartOpened, setCartOpened] = useState(false);

	// при первом рендере отправляем запрос на получение кроссов и параллельно запрос на получение корзины
	useEffect(() => {
		axios.get('https://62d01d38d9bf9f170583ae53.mockapi.io/items').then((res) => {
			setItems(res.data)
		})
		axios.get('https://62d01d38d9bf9f170583ae53.mockapi.io/cart').then((res) => {
			// сохраняем в cartItems
			setCartItems(res.data)
		})
		axios.get('https://62d01d38d9bf9f170583ae53.mockapi.io/favorites').then((res) => {
			setFavorites(res.data)
		})
	}, []);

	
	const onAddToCart = (obj) => {
		// отправляем наши данные (в корзине) на сервер
		axios.post('https://62d01d38d9bf9f170583ae53.mockapi.io/cart', obj)
		// передаём сначала предыдущие пропсы и сохраняем в стейте
		setCartItems((prev) => [...prev, obj]);
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://62d01d38d9bf9f170583ae53.mockapi.io/cart/${id}`)
		setCartItems((prev) => prev.filter(item => item.id !== id));
	}

	// если в массиве фаворитов такой же айди, как в нажатом при клике - отправляем запрос на удаление с айди
	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find(favObj => favObj.id === obj.id)) {
				axios.delete(`https://62d01d38d9bf9f170583ae53.mockapi.io/favorites/${obj.id}`)
			} else {
				// если похожий айди не нашёлся отправляем запрос на создание и сохраняем объект в стейт
				// деструктуризируем респонс и передаём дальше
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

  return (
    <div className="wrapper clear">

		{/* используем && вместо тернарного оператора и null */}
		{cartOpened && <Drawer 
			items={cartItems} 
			onClose={() => setCartOpened(false)} 
			onRemove={onRemoveItem} />}
			
			<Header onClickCart={() => setCartOpened(true)} />
		<Routes>
 			<Route  path="/"  
				element={<Home 
					items={items}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
					onChangeSearchInput={onChangeSearchInput}
					onAddToCart={onAddToCart}
					onAddToFavorite={onAddToFavorite}  />} /> 
			<Route  path="/favorites"  
				element={<Favorites 
					items={favorites}
					onAddToFavorite={onAddToFavorite} />} />                  
      </Routes>
    </div>
  );
}

export default App;
