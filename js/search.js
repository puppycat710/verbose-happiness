document
	.getElementById('searchInput')
	.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			event.preventDefault()
			document.getElementById('searchButton').click()
		}
	})