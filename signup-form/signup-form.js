document.addEventListener('DOMContentLoaded', function() {
	let loginForm = document.getElementById('loginForm');
	let formElements = loginForm.querySelectorAll('input[type=text], input[type=password], input[type=email]');
	let passwordField = document.getElementById('password');
	let passwordConfirmField = document.getElementById('confirmPassword');
	
	loginForm.addEventListener('submit', function(e) {
		e.preventDefault();
		e.stopPropagation();
		
		formElements.forEach((formElement) => {
			markFormElementValid(formElement);
		});
		
		formElements.forEach((formElement) => {
			if(!formElement.checkValidity()) {
				markFormElementInvalid(formElement);
			}
			
			// extra validation on password confirmation field
			if(passwordField.value != passwordConfirmField.value) {
				markFormElementInvalid(passwordConfirmField)
			}
		});
	}, false);
	
	function markFormElementValid(formElement) {
		formElement.setAttribute('aria-invalid', false);
		formElement.classList.remove('invalid');

		unlinkErrorFieldFromFormElement(formElement);
	}
	
	function markFormElementInvalid(formElement) {
		formElement.setAttribute('aria-invalid', true);
		formElement.classList.add('invalid');

		linkErrorFieldToFormField(formElement);
	}
	
	function unlinkErrorFieldFromFormElement(formElement) {
		let errorField = getErrorFieldForFormElement(formElement);
		let existingAriaDescribedby = getExistingAriaDescribedbyValue(formElement);
		
		if(errorField == null || existingAriaDescribedby == '')
			return;
		
		let replaceRegex = new RegExp('\\b' + errorField.id + '\\b');
		let newAriaDescribedby = existingAriaDescribedby.replace(replaceRegex, '');
		
		formElement.setAttribute('aria-describedby', newAriaDescribedby);
	}
	
	function linkErrorFieldToFormField(formElement) {
		let errorField = getErrorFieldForFormElement(formElement);
		let existingAriaDescribedby = getExistingAriaDescribedbyValue(formElement);
		
		if(errorField == null)
			return;
		
		
		formElement.setAttribute('aria-describedby', `${existingAriaDescribedby} ${errorField.id}`);
	}
	
	function getErrorFieldForFormElement(formElement) {
		let errorFields = formElement.parentNode.getElementsByClassName('error');
		
		if(errorFields.length)
			return errorFields[0];
		
		return null;
	}
	
	function getExistingAriaDescribedbyValue(formElement) {
		let existingAriaDescribedby = formElement.getAttribute('aria-describedby');
		
		if(existingAriaDescribedby == null)
			return '';
		
		return existingAriaDescribedby;
	}
}, false);
