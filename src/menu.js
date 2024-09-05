import fullStar from './assets/star.svg'
import emptyStar from './assets/star-outline.svg'
import dollarPancake from './assets/dollar-pancake.jpeg'
import cheeseburger from './assets/cheeseburger.jpeg'
import chickenClub from './assets/chicken-club.jpeg'
import dinerFries from './assets/diner-fries.jpeg'
import coleslaw from './assets/coleslaw.jpeg'
import theValueMeal from './assets/the-value-meal.jpeg'

export function buildMenuPage() {
    const content = document.getElementById('content')

    const buildMenu = (function() {
        const menu = document.createElement('div')
        const buildCards = function() {
            const menuItems = (function() {
                const items = []
                class Item {
                    constructor(name, description, rating, image) {
                        this.name = name
                        this.description = description
                        this.rating = rating
                        this.image = image
                    }
                }

                items.push(new Item('Dollar Pancake',
                                    'Fluffy buttermilk pancake with a drizzle of syrup',
                                    2,
                                    dollarPancake),
                        new Item('Cheeseburger',
                                'Juicy beef patty, melted American cheese, lettuce',
                                1,
                                cheeseburger),
                        new Item('Chicken Club',
                                'Chicken, bacon, lettuce, and mayo on whole wheat bread',
                                3,
                                chickenClub),
                        new Item('Diner Fries',
                                'Crispy French fries cooked to a golden brown',
                                1,
                                dinerFries),
                        new Item('Coleslaw',
                                'Creamy coleslaw made with shredded cabbage and a hint of vinegar',
                                1,
                                coleslaw),
                        new Item('The Value Meal',
                                'A combo meal featuring a Chicken Club, Coleslaw, and a drink',
                                0,
                                theValueMeal)
                            )

                return items
            })()

            for (let item of menuItems) {
                const card = document.createElement('div')
                const buildItemInfo = function() {
                    const div = document.createElement('div')
                    const addH3 = function() {
                        const h3 = document.createElement('h3')
                        h3.textContent = item.name
                        div.appendChild(h3)
                    }
                    const addP = function() {
                        const p = document.createElement('p')
                        p.textContent = item.description
                        div.appendChild(p)
                    }
                    const addRating = function() {
                        const rating = document.createElement('div')
                        const addFullStars = function() {
                            for (let i = 1; i <= item.rating; i++) {
                                rating.innerHTML += fullStar
                            }
                        }
                        const addEmptyStars = function() {
                            for (let i = 1; i <= (5 - item.rating); i++) {
                                rating.innerHTML += emptyStar
                            }
                        }

                        rating.classList.add('rating')
                        addFullStars()
                        addEmptyStars()
                        rating.innerHTML += `Rating: ${item.rating} stars`
                        div.appendChild(rating)
                    }
                    const addPriceTag = function() {
                        const price = document.createElement('div')
                        price.classList.add('price')
                        price.textContent = '$1'
                        div.appendChild(price)
                    }

                    addH3()
                    addP()
                    addRating()
                    addPriceTag()
                    card.appendChild(div)
                }
                const addImage = function() {
                    const img = document.createElement('img')
                    img.alt = 'photo of ' + item.name
                    img.src = item.image
                    card.appendChild(img)
                }

                card.classList.add('card')
                buildItemInfo()
                addImage()
                menu.appendChild(card)
            }
        }

        menu.classList.add('menu-cards')
        buildCards()
        content.appendChild(menu)
    })()
}