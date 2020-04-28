document.addEventListener('DOMContentLoaded', function() {
	let loginForm = document.getElementById('loginForm');
	let formElements = loginForm.querySelectorAll('input[type=text], input[type=password], input[type=email]');
	let passwordField = document.getElementById('password');
	let passwordConfirmField = document.getElementById('confirmPassword');
	
	loginForm.addEventListener('submit', function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		formElements.forEach((formElement) => {
			if(formElement.checkValidity()) {
				formElement.setAttribute('aria-invalid', false);
				formElement.classList.remove('invalid');
			} else {
				formElement.setAttribute('aria-invalid', true);
				formElement.classList.add('invalid');
			}
		});
		
		// extra validation on password confirmation field
		if(passwordField.value == passwordConfirmField.value) {
			passwordConfirmField.setAttribute('aria-invalid', false);
			passwordConfirmField.classList.remove('invalid');
		} else {
			passwordConfirmField.setAttribute('aria-invalid', true);
			passwordConfirmField.classList.add('invalid');
		}
	}, false);
}, false);
