function App() {
  return (
    <div className="wrapper clear">
		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img width={40} height={40} alt="logo" src="/img/logo.png" />
				<div>
					<h3 className="text-uppercase">React Sneakers</h3>
					<p className="opacity-5">Магазин лучших кроссовок</p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30">
					{/* если нам нужно будет изменять цвет свг, то лучше сделать через тэг svg и вставить кодом */}
					<img width={18} height={18} alt="cart" src="/img/cart.svg" />
					<span>1205 руб.</span>
				</li>
				<li>
					{/* в данном случае нам не нужно подгружать каждый раз свг код и страница будет грузиться чуть быстрее */}
					<img width={18} height={18} alt="user" src="/img/user.svg" />
				</li>
			</ul>
		</header>
		<div className="content p-40">
			<h1 className="mb-40">Все кроссовки</h1>
			
			<div className="d-flex">
				<div className="card">
					<img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers1" />
					<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/plus.svg" alt="plus" />
						</button>
					</div>
				</div>

				<div className="card">
					<img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers2" />
					<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/plus.svg" alt="plus" />
						</button>
					</div>
				</div>

				<div className="card">
					<img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers3" />
					<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/plus.svg" alt="plus" />
						</button>
					</div>
				</div>

				<div className="card">
					<img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers4" />
					<h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column">
							<span>Цена:</span>
							<b>12 999 руб.</b>
						</div>
						<button className="button">
							<img width={11} height={11} src="/img/plus.svg" alt="plus" />
						</button>
					</div>
				</div>
			</div>

		</div>
    </div>
  );
}

export default App;
