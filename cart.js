// Shopping Cart JavaScript Functionality

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Get all product cards
	const productCards = document.querySelectorAll('.card-body')
	const totalPriceElement = document.querySelector('.total')

	// Initialize cart functionality for each product
	productCards.forEach((card, index) => {
		initializeProductCard(card, index)
	})

	// Update total price on page load
	updateTotalPrice()

	function initializeProductCard(card, index) {
		// Get elements within this card
		const plusButton = card.querySelector('.fa-plus-circle')
		const minusButton = card.querySelector('.fa-minus-circle')
		const quantitySpan = card.querySelector('.quantity')
		const deleteButton = card.querySelector('.fa-trash-alt')
		const heartButton = card.querySelector('.fa-heart')
		const unitPriceElement = card.querySelector('.unit-price')

		// Get unit price (remove $ and convert to number)
		const unitPrice = parseFloat(unitPriceElement.textContent.replace('$', '').trim())

		// Set up quantity controls
		setupQuantityControls(plusButton, minusButton, quantitySpan, unitPrice)

		// Set up delete functionality
		setupDeleteFunctionality(deleteButton, card)

		// Set up like functionality
		setupLikeFunctionality(heartButton)
	}

	function setupQuantityControls(plusButton, minusButton, quantitySpan, unitPrice) {
		// Plus button functionality
		plusButton.addEventListener('click', function () {
			let currentQuantity = parseInt(quantitySpan.textContent)
			currentQuantity++
			quantitySpan.textContent = currentQuantity
			updateTotalPrice()

			// Add visual feedback
			plusButton.style.transform = 'scale(1.2)'
			setTimeout(() => {
				plusButton.style.transform = 'scale(1)'
			}, 150)
		})

		// Minus button functionality
		minusButton.addEventListener('click', function () {
			let currentQuantity = parseInt(quantitySpan.textContent)
			if (currentQuantity > 0) {
				currentQuantity--
				quantitySpan.textContent = currentQuantity
				updateTotalPrice()

				// Add visual feedback
				minusButton.style.transform = 'scale(1.2)'
				setTimeout(() => {
					minusButton.style.transform = 'scale(1)'
				}, 150)
			}
		})
	}

	function setupDeleteFunctionality(deleteButton, card) {
		deleteButton.addEventListener('click', function () {
			// Confirm deletion
			if (confirm('Are you sure you want to remove this item from your cart?')) {
				// Add fadeout animation
				card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
				card.style.opacity = '0'
				card.style.transform = 'scale(0.8)'

				// Remove the card after animation
				setTimeout(() => {
					card.style.display = 'none'
					updateTotalPrice()
				}, 500)
			}
		})
	}

	function setupLikeFunctionality(heartButton) {
		let isLiked = false

		heartButton.addEventListener('click', function () {
			isLiked = !isLiked

			if (isLiked) {
				// Heart is liked - change to red/pink
				heartButton.style.color = '#e74c3c'
				heartButton.classList.add('fas')
				heartButton.classList.remove('far')

				// Add animation effect
				heartButton.style.transform = 'scale(1.3)'
				setTimeout(() => {
					heartButton.style.transform = 'scale(1)'
				}, 200)
			} else {
				// Heart is not liked - change back to black
				heartButton.style.color = 'black'
				heartButton.classList.add('far')
				heartButton.classList.remove('fas')
			}
		})
	}

	function updateTotalPrice() {
		let total = 0

		// Get all visible product cards
		const visibleCards = document.querySelectorAll('.card-body:not([style*="display: none"])')

		visibleCards.forEach((card) => {
			const quantitySpan = card.querySelector('.quantity')
			const unitPriceElement = card.querySelector('.unit-price')

			if (quantitySpan && unitPriceElement) {
				const quantity = parseInt(quantitySpan.textContent)
				const unitPrice = parseFloat(unitPriceElement.textContent.replace('$', '').trim())

				total += quantity * unitPrice
			}
		})

		// Update total price display with animation
		totalPriceElement.style.transition = 'color 0.3s ease'
		totalPriceElement.style.color = '#27ae60'
		totalPriceElement.textContent = total + ' $'

		// Reset color after animation
		setTimeout(() => {
			totalPriceElement.style.color = 'inherit'
		}, 300)
	}

	// Add some additional styling for better UX
	function addHoverEffects() {
		const icons = document.querySelectorAll('i')

		icons.forEach((icon) => {
			icon.addEventListener('mouseenter', function () {
				this.style.transition = 'transform 0.2s ease'
				this.style.transform = 'scale(1.1)'
			})

			icon.addEventListener('mouseleave', function () {
				this.style.transform = 'scale(1)'
			})
		})
	}

	// Initialize hover effects
	addHoverEffects()
})

// Additional utility function to reset cart
function resetCart() {
	const quantitySpans = document.querySelectorAll('.quantity')
	const hearts = document.querySelectorAll('.fa-heart')
	const cards = document.querySelectorAll('.card-body')

	// Reset quantities to 0
	quantitySpans.forEach((span) => {
		span.textContent = '0'
	})

	// Reset heart states
	hearts.forEach((heart) => {
		heart.style.color = 'black'
		heart.classList.add('far')
		heart.classList.remove('fas')
	})

	// Show all cards
	cards.forEach((card) => {
		card.style.display = 'flex'
		card.style.opacity = '1'
		card.style.transform = 'scale(1)'
	})

	// Update total price
	document.querySelector('.total').textContent = '0 $'
}
