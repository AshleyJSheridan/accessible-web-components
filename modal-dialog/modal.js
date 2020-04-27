document.addEventListener('DOMContentLoaded', function() {
	let modalAcceptButton = document.getElementById('modal_accept');
	let modalCloseButtons = document.getElementsByClassName('close-modal');
	let openButtons = document.getElementsByClassName('open_modal');
	let modal = document.getElementById('modal');
	let keyCodeTab = 9;
	let keyCodeEscape = 27;
	let focusTriggerElement;
			
	for(let i = 0; i < openButtons.length; i++) {
		openButtons[i].addEventListener('click', function(e){
			showModal(e.target);
		}, false);
	}
			
	modalAcceptButton.addEventListener('click', acceptModal, false);
	
	for(let i = 0; i < modalCloseButtons.length; i++) {
		modalCloseButtons[i].addEventListener('click', closeModal, false);
	}
			
	function showModal(triggerElement) {
		focusTriggerElement = triggerElement;
		
		document.addEventListener('keydown', handleKeyDown, false);
				
		modal.style.display = 'block';
		modalAcceptButton.focus();
	}
	
	function acceptModal() {
		closeModal();
	}
	
	function closeModal() {
		modal.style.display = 'none';
				
		if(focusTriggerElement) {
			focusTriggerElement.focus();
			focusTriggerElement = null;
		}
		
		document.removeEventListener('keydown', handleKeyDown, false);
	}
	
	function handleKeyDown(e) {
		if(e.keyCode == keyCodeTab) {
			handleTab(e);
		}
		
		if(e.keyCode == keyCodeEscape) {
			closeModal();
		}
	}
	
	function handleTab(e) {
		let focusableElements = modal.querySelectorAll('button, a, textarea, input')
		let focusableElementsAmount = focusableElements.length;

		if(focusableElementsAmount == 1) {
			e.preventDefault();
			return false;
		}
		
		let firstElement = focusableElements[0];
		let lastElement = focusableElements[focusableElementsAmount - 1];
		let shiftPressed = e.shiftKey;

		if(e.target == lastElement && !shiftPressed) {
			e.preventDefault();
			firstElement.focus();
		}

		if(e.target == firstElement && shiftPressed) {
			e.preventDefault();
			lastElement.focus();
		}
	}

}, false);
