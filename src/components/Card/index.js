import React from 'react';

import styles from './Card.module.scss';

const Card = ({title, price, imageUrl, onClickPlus, onClickFavorite}) => {
	
	return (
		<div>
			<div className={styles.card}>
				<div className={styles.favorite} onClick={onClickFavorite}>
					<img src="/img/unliked.svg" alt="unliked" />
				</div>
				<img width={133} height={112} src={imageUrl} alt="sneakers1" />
				<h5>{title}</h5>
				<div className="d-flex justify-between align-center">
					<div className="d-flex flex-column">
						<span>Цена:</span>
						<b>{price}</b>
					</div>
						<img onClick={onClickPlus} width={11} height={11} src="/img/plus.svg" alt="plus" />
				</div>
			</div>
		</div>
	);
};

export default Card;