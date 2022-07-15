import React, { useState } from 'react';

import styles from './Card.module.scss';

const Card = ({id, title, price, imageUrl, onFavorite, onClickPlus, favorited = false}) => {
	const [isAdded, setIsAdded] = useState(false);
	const [isFavorite, setIsFavorite] = useState(favorited);

	const handleClick = () => {
		onClickPlus({id, title, price, imageUrl});
		setIsAdded(!isAdded);
	}

	const onClickFavorite = () => {
		onFavorite({id, title, price, imageUrl});
		setIsFavorite(!isFavorite);
	}
	
	return (
		<div>
			<div className={styles.card}>
				<div className={styles.favorite} onClick={onClickFavorite}>
					<img src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"} alt="unliked" />
				</div>
				<img width={133} height={112} src={imageUrl} alt="sneakers1" />
				<h5>{title}</h5>
				<div className="d-flex justify-between align-center">
					<div className="d-flex flex-column">
						<span>Цена:</span>
						<b>{price}</b>
					</div>
						<img 
							className={styles.plus} 
							onClick={handleClick} 
							src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
							alt="plus" />
				</div>
			</div>
		</div>
	);
};

export default Card;