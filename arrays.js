const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']
console.log(fruits)

console.log(fruits[0])
console.log(fruits[fruits.length - 1])

fruits[1] = 'Strawberry'
fruits.push('Pineapple')
console.log(fruits)

console.log(fruits.length)
console.log(fruits.indexOf('Mango'))
console.log(fruits.slice(3, 6))

fruits.forEach((fruit) => console.log(fruit.toUpperCase()))

console.log(fruits.sort())

console.log(fruits.reverse())

const vegetables = ['Carrot', 'Tomato', 'Cabbage']

const foodItems = [...fruits, ...vegetables]
console.log(foodItems)

foodItems.filter((item) => item.startsWith('C')).forEach((item) => console.log(item))

foodItems.map((item) => console.log(`${item} (Healthy)`))
