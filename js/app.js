Github = new Github;

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
	const userText = e.target.value;

	if(userText !==''){
		Github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'NOT FOUND') {
					SHOW ALERT
				} else {
					SHOW PROFILE
				}
			})		
	}
})