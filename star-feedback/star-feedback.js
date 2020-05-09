document.addEventListener('DOMContentLoaded', function() {
	let feedbackOptions = document.querySelectorAll('.feedback-star input');
	
	feedbackOptions.forEach((feedback) => {
		let feedbackValue = parseInt(feedback.value);
		let feedbackGroupName = feedback.name;
		
		feedback.addEventListener('change', function(e) {
			
			
			displayStarRating(feedbackValue, feedbackGroupName);
		}, false);
		
		// set initial page load state in-case it has a selected value already
		if(feedback.checked) {
			displayStarRating(feedbackValue, feedbackGroupName);
		}
	});
	
	function displayStarRating(feedbackValue, feedbackGroupName) {
		let allOptionsInGroup = document.querySelectorAll(`input[name=${feedbackGroupName}]`);
		
		allOptionsInGroup.forEach((groupOption) => {
			if(parseInt(groupOption.value) <= feedbackValue) {
				groupOption.classList.add('rated');
			} else {
				groupOption.classList.remove('rated');
			}
		});
	}
}, false);
