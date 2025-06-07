const modalFunc = () => {
	const modal = document.querySelector('.cart-modal__overlay')
	const cartBtn = document.querySelector('#cart-button')

	if (modal) {
		const openModal = () => {
			modal.classList.add('open')
		}

		const closeModal = () => {
			modal.classList.remove('open')
		}

		cartBtn.addEventListener('click', () => {
			openModal()
		})

		modal.addEventListener('click', (event) => {
			if(
				event.target.classList.contains('cart-modal__overlay') || 
				event.target.closest('.cart-modal__header--close')
			) {
				closeModal()
			}
		})
	}
}

const restsFunc = () => {
	const container = document.querySelector('#rests-container')

	const resrArray = [
		{
			id: 0,
			title: 'Пицца плюс',
			time: 50,
			rating: 4.5,
			price: 900,
			type: 'Пицца',
			image: 'pizza.jpg'
		},
		{
				id: 1,
				title: 'Тануки ',
				time: 50,
				rating: 4.5,
				price: 900,
				type: 'Пицца',
				image: 'tanuki.jpg'
		},
		{
				id: 2,
				title: 'FoodBand',
				time: 50,
				rating: 4.5,
				price: 900,
				type: 'Пицца',
				image: 'foodband.jpg'
		},
		{
				id: 3,
				title: 'Жадина-пицца',
				time: 50,
				rating: 4.5,
				price: 900,
				type: 'Пицца',
				image: 'pizzajadina.jpg'
		},
		{
				id: 4,
				title: 'Точка еды',
				time: 50,
				rating: 4.5,
				price: 900,
				type: 'Пицца',
				image: 'pointfood.jpg'
		},
		{
				id: 5,
				title: 'PizzaBurger',
				time: 50,
				rating: 4.5,
				price: 900,
				type: 'Пицца',
				image: 'pizzaburger.jpg'
		},
	]

	const loading = () => {
		container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
	}

	const renderRests = (array) => {
		container.innerHTML = ''

		array.forEach((card) => {
			container.insertAdjacentHTML('beforeend', `
				<a href="goods.html?id=${card.id}" class="products-card">
						<div class="products-card__image">
								<img src="./images/rests/${card.image}" alt="${card.title}">
						</div>
						<div class="products-card__description">
								<div class="products-card__description-row">
										<h4 class="products-card__description-title">${card.title}</h4>
										<div class="products-card__description-badge">
												${card.time} мин
										</div>
								</div>
								<div class="products-card__description-row">
										<div class="products-card__description-info">
												<div class="products-card__description-info--raiting">
														<img src="./images/icons/Vector.svg" alt="start"> ${card.rating}
												</div>
												<div class="products-card__description-info--price">
														От ${card.price} ₽
												</div>
												<div class="products-card__description-info--group">
														${card.type}
												</div>
										</div>
								</div>
						</div>
				</a>
			`)
		})
	}

	if (container) {
		loading()
		
		setTimeout(() => {
			renderRests(resrArray)
		}, 1500)
	}
}

const productsFunc = () => {
	const container = document.querySelector('#products-container')

	const goods = [
			{
					id: 0,
					name: 'Ролл угорь стандарт',
					text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',        
					price: 250,        
					image: 'rollone.jpg'
			},
			{
					id: 1,
					name: 'Калифорния лосось стандарт',
					text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',        
					price: 395,       
					image: 'rolltwo.jpg'
			},
			{
					id: 2,
					name: 'Окинава стандарт',
					text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
					price: 250,        
					image: 'rollthree.jpg'
			},
			{
					id: 3,
					name: 'Цезарь маки хl',
					text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
					price: 250,        
					image: 'rollfour.jpg'
			},
			{
					id: 4,
					name: 'Ясай маки стандарт 185 г',
					text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
					price: 250,        
					image: 'rollfive.jpg'
			},
			{
					id: 5,
					name: 'Ролл с креветкой стандарт',
					text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
					price: 250,        
					image: 'rollsix.jpg'
			},
	]

	const loading = () => {
		container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка...</p>'
	}

	const renderGods = (array) => {
		container.innerHTML = ''

		array.forEach((card) => {
			container.insertAdjacentHTML('beforeend', `
				<div class="products-card">
						<div class="products-card__image">
								<img src="./images/goods/${card.image}" alt="${card.name}">
						</div>
						<div class="products-card__description">
								<div class="products-card__description-row">
										<h5 class="products-card__description-row--name">
												${card.name}
										</h5>
								</div>
								<div class="products-card__description-row">
										<p class="products-card__description-row--text">
												${card.text}
										</p>
								</div>
								<div class="products-card__description-row">
										<div class="products-card__description-row--controls">
												<button class="btn btn-primary">
														В корзину
														<img src="./images/icons/shopping-cart2.svg" alt="account">
												</button>
												<span class="products-card__description-row-controls--price">${card.price} ₽</span>
										</div>
								</div>
						</div>
				</div>
			`)
		})
	}

	if (container) {
		loading()
		
		setTimeout(() => {
			renderGods(goods)
		}, 1500)
	}
}

modalFunc()
restsFunc()
productsFunc()