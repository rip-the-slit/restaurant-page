import fullStar from './assets/star.svg'
import emptyStar from './assets/star-outline.svg'

export function buildMenuPage() {
    const content = document.getElementById('content')

    const buildMenu = (function() {
        const menu = document.createElement('div')
        const buildCards = function() {
            const menuItems = (function() {
                const items = []
                class Item {
                    constructor(name, description, rating) {
                        this.name = name
                        this.description = description
                        this.rating = rating
                    }
                }

                items.push(new Item('Dollar Pancake',
                                    'Fluffy buttermilk pancake with a drizzle of syrup',
                                    2),
                        new Item('Cheeseburger',
                                'Juicy beef patty, melted American cheese, lettuce',
                                1),
                        new Item('Chicken Club',
                                'Crispy chicken breast, bacon, lettuce, and mayo on whole wheat bread',
                                3),
                        new Item('Diner Fries',
                                'Crispy French fries cooked to a golden brown',
                                1),
                        new Item('Coleslaw',
                                'Creamy coleslaw made with shredded cabbage and a hint of vinegar',
                                1),
                        new Item('The Value Meal',
                                'A combo meal featuring a Chicken Club, Coleslaw, and a drink',
                                0,)
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