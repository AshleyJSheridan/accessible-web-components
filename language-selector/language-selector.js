document.addEventListener('DOMContentLoaded', function() {
	let languageSelector = document.getElementById('languageSelector');
	
	languageSelector.addEventListener('change', changeLanguage, false);
	
	function changeLanguage(triggerElement) {
		console.log(triggerElement.target.value);
	}
}, false);
