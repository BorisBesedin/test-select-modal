class Modal {
	constructor (selector, message) {
		this.popup = document.querySelector(selector).cloneNode(true),
		this.close = this.popup.querySelector('.popup__close'),
		this.text = this.popup.querySelector('.popup__text'),
		this.overlay = document.createElement('div')
		this.message = message;
	}

	init() {
		this.overlay.classList.add('overlay');
		this.overlay.appendChild(this.popup)
		document.body.appendChild(this.overlay);

		this.text.textContent = this.message;

		this.close.addEventListener('click', () => {
			this.overlay.remove();
		});

		this.overlay.addEventListener('click', (e) => {
			if (e.target !== this.popup && e.target.parentElement !== this.popup) {
				this.overlay.remove();
			}		
		});
	}
}