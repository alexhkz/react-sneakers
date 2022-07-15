import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({onClickCart}) => {
	return (
		<div>
			<header className="d-flex justify-between align-center p-40">
				<Link to='/'>
					<div className="d-flex align-center">
						<img width={40} height={40} alt="logo" src="/img/logo.png" />
						<div>
							<h3 className="text-uppercase">React Sneakers</h3>
							<p className="opacity-5">Магазин лучших кроссовок</p>
						</div>
					</div>
				</Link>
				<ul className="d-flex">
					<li onClick={onClickCart} className="mr-30 cu-p">
						{/* если нам нужно будет изменять цвет свг, то лучше сделать через тэг svg и вставить кодом */}
						<img width={18} height={18} alt="cart" src="/img/cart.svg" />
						<span>1205 руб.</span>
					</li>
					<li className="mr-20 cu-p">
						<Link to='/favorites'>
							<img className="mr-20 cu-p" width={18} height={18} alt="bookmarks" src="/img/heart.svg" />
						</Link>
					</li>
					<li>
						{/* в данном случае нам не нужно подгружать каждый раз свг код и страница будет грузиться чуть быстрее */}
						<img width={18} height={18} alt="user" src="/img/user.svg" />
					</li>
				</ul>
			</header>
		</div>
	);
};

export default Header;