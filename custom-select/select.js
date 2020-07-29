class CustomSelect {
	constructor (selector, elements, callback) {
		this.element = document.querySelector(selector),
		this.button = this.element.querySelector('button'),
		this.optionList = elements,
		this.list = this.element.querySelector('.select__list'),
		this.isOpened = false;
		this.callback = callback;
	}

	open() {
		this.list.style.display = 'block';
		this.isOpened = true;
		this.button.classList.add('select__button--opened');
	}

	close() {
		this.list.style.display = 'none';
		this.isOpened = false;
		this.button.classList.remove('select__button--opened');
	}

	setItem(item) {
		let data = {
			id: item.getAttribute('data-id'),
			value: item.getAttribute('data-value')
		}
		this.button.textContent = item.getAttribute('data-value');
		this.callback(data);
		this.close();
	}

	init() {
		let items;

		this.list.style.display = 'none';

		this.optionList.forEach(elem => {
			const item = document.createElement('li');

			item.classList.add('select__item');
			item.setAttribute('data-id', elem.id);
			item.setAttribute('data-value', elem.value);
			item.textContent = elem.value;
			this.list.appendChild(item);
		});

		items = this.list.querySelectorAll('li');

		this.button.addEventListener('click', () => {
			if (!this.isOpened) {				
				this.open();
			} else {				
				this.close();
			}
		});

		document.addEventListener('click', (e) => {			
			if (e.target.parentElement !== this.element
				&& e.target.tagName !== 'LI' && this.isOpened) {
				this.close();
			}
		});

		items.forEach(item => {
			item.addEventListener('click', () => {
				this.setItem(item);
			});
		})
	}
}