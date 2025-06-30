// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Select the color box and button elements by their IDs
	const colorBox = document.getElementById('color-box')
	const changeColorBtn = document.getElementById('change-color-btn')

	// Function to generate a random hexadecimal color
	function getRandomColor() {
		// Generate random values for red, green, and blue (0-255)
		const red = Math.floor(Math.random() * 256)
		const green = Math.floor(Math.random() * 256)
		const blue = Math.floor(Math.random() * 256)

		// Convert to hexadecimal and ensure 2-digit format
		const hexRed = red.toString(16).padStart(2, '0')
		const hexGreen = green.toString(16).padStart(2, '0')
		const hexBlue = blue.toString(16).padStart(2, '0')

		// Return the complete hex color code
		return `#${hexRed}${hexGreen}${hexBlue}`
	}

	// Alternative function to generate random color using different method
	function getRandomColorAlternative() {
		// Generate a random number between 0 and 16777215 (ffffff in decimal)
		const randomColor = Math.floor(Math.random() * 16777215)
		// Convert to hexadecimal and pad with zeros if necessary
		return `#${randomColor.toString(16).padStart(6, '0')}`
	}

	// Function to change the color box background
	function changeColor() {
		// Generate a new random color
		const newColor = getRandomColor()

		// Apply the new color to the color box
		colorBox.style.backgroundColor = newColor

		// Optional: Add a subtle animation effect
		colorBox.style.transform = 'scale(1.05)'
		setTimeout(() => {
			colorBox.style.transform = 'scale(1)'
		}, 150)

		// Optional: Log the color to console for debugging
		console.log('New color applied:', newColor)
	}

	// Add event listener to the button
	changeColorBtn.addEventListener('click', changeColor)

	// Optional: Add keyboard support (press Enter or Space to change color)
	changeColorBtn.addEventListener('keydown', function (event) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			changeColor()
		}
	})

	// Optional: Change color every 5 seconds automatically (uncomment to enable)
	// setInterval(changeColor, 5000);

	// Optional: Add double-click functionality to the color box itself
	colorBox.addEventListener('dblclick', changeColor)

	console.log('Color Changer initialized successfully!')
})
