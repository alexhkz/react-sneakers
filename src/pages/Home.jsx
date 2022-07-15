import React from 'react';

import Card from "../components/Card";

const Home = ({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite}) => {
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
				{items
					// проходимся по массиву и исключаем айтемы, у которых тайтл не соответвует тому, что в поиске
					.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
					.map((item) => (
						<Card 
							key={item.id} 
							onFavorite={(obj) => onAddToFavorite(obj)}
							onClickPlus={(obj) => onAddToCart(obj)}
							{...item} />
						))}
			</div>
		</div>
	);
};

export default Home;