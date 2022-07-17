import React from 'react';

import Card from "../components/Card";

const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite, cartItems, isLoading}) => {

	const renderItems = () => {
		// проходимся по массиву и исключаем айтемы, у которых тайтл не соответвует тому, что в поиске
		const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))

		return (isLoading 
			? [...Array(8)] 
			: filteredItems).map((item, index) => (
				<Card 
					key={index} 
					onFavorite={(obj) => onAddToFavorite(obj)}
					onClickPlus={(obj) => onAddToCart(obj)}
					added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
					loading={isLoading}
					{...item} />
				))
	}
	
	return (
		<div className="content p-40">
			<div className="d-flex align-center justify-between mb-40">
				<h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
				<div className="search-block d-flex">
					<img src="/img/search.svg" alt="search" />
					{/* отображаем крестик в поиске */}
					{searchValue && (
						<img 
							onClick={() => setSearchValue('')} 
							className="clear cu-p" 
							src="/img/btn-remove.svg" 
							alt="clear" />)}
					<input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
				</div>
			</div>
			
			<div className="d-flex flex-wrap">
				{renderItems()}
			</div>
		</div>
	);
};

export default Home;