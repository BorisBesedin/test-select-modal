const data = {
	optionList: [
	{
		id: 1,
		value: 'vue'
	},
	{
		id: 2,
		value: 'react'
	},
	{
		id: 3,
		value: 'angular'
	}
	],
	openPopup: function (data) {
		console.log('Selected', data);
		let overlay = document.querySelector('.overlay');
		if (overlay) {
			overlay.remove();
		}
		const modal = new Modal('.text-popup', `Выбрано: ${data.value}`);
		modal.init();	
	}
}

window.addEventListener('DOMContentLoaded', () => {
	const frameworks = new CustomSelect('.select', data.optionList, data.openPopup);
	frameworks.init();
});