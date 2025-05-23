// Initialize counters
let charCount = 0 // Total number of characters including period
let wordCount = 1 // Start at 1 since the first word doesn't follow a space
let vowelCount = 0 // Total number of vowels

// Define vowel characters
const vowels = 'aeiouAEIOU'

// Prompt user to enter a sentence ending with a period
let sentence = 'Enter a sentence ending with a period:'

// Loop through the sentence character by character
for (let i = 0; i < sentence.length; i++) {
	let ch = sentence[i]
	charCount++

	if (vowels.includes(ch)) {
		vowelCount++
	}

	if (ch === ' ') {
		wordCount++
	}

	if (ch === '.') {
		break // Stop reading at the period
	}
}

// Display the results
console.log('Length of the sentence (characters):', charCount)
console.log('Number of words:', wordCount)
console.log('Number of vowels:', vowelCount)
