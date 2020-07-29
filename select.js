function Select(selector, params) {
	const element = document.querySelector(selector),
		  button = element.querySelector('button'),
		  optionList = params.optionList,
		  list = element.querySelector('.select__list');

	let isOpened = false;	

	function open() {
		list.style.display = 'block';
		isOpened = true;
		button.classList.add('select__button--opened');
	}

	function close() {
		list.style.display = 'none';
		isOpened = false;
		button.classList.remove('select__button--opened');
	}

	function setItem(item) {
		let data = {
			id: item.getAttribute('data-id'),
			value: item.getAttribute('data-value')
		}
		button.textContent = item.getAttribute('data-value');
		params.callback(data);
		close();
	}

	function init() {
		let items;
		list.style.display = 'none';

		optionList.forEach(elem => {
			const item = document.createElement('li');

			item.classList.add('select__item');
			item.setAttribute('data-id', elem.id);
			item.setAttribute('data-value', elem.value);
			item.textContent = elem.value;
			list.appendChild(item);
		});

		items = list.querySelectorAll('li');

		button.addEventListener('click', () => {
			if (!isOpened) {				
				open();
			} else {				
				close();
			}
		});

		document.addEventListener('click', (e) => {			
			if (e.target.parentElement !== element
				&& e.target.tagName !== 'LI' && isOpened) {
				close();
			}
		});

		items.forEach(item => {
			item.addEventListener('click', () => {
				setItem(item);
			});
		})
	}

	init();
}