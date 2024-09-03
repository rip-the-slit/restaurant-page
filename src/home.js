export function buildHomePage() {
    const content = document.getElementById('content')
    
    const buildHero = (function() {
        const hero = document.createElement('div')
        const buildText = function() {
            const div = document.createElement('div')
            div.innerHTML = `<h1><em>Extremely</em> fast food, for as much as $1</h1>
                            <p>Don't worry about how we make our money, you just eat!</p>`
            hero.appendChild(div)
        }
        const addImage = function() {
            const img = document.createElement('img')
            img.alt = 'dollar sign illustration'
            hero.appendChild(img)
        }

        hero.classList.add('hero')
        buildText()
        addImage()
        content.appendChild(hero)
    })()

    const buildMarquee = (function() {
        const reviews = document.createElement('div')
        const addTitle = function() {
            const h3 = document.createElement('h3')
            h3.textContent = 'This is what people are saying:'
            reviews.appendChild(h3)
        }
        const buildReviews = function() {
            const ul = document.createElement('ul')
            const reviewContent = [
                `<p>I think I found a piece of hair in my order...</p>
                <h4>Happy costumer</h4>`,
                `<p>Once you taste it, you can't stop eating it! Oh god I actually can't stop eating, I feel like I'm going to pop.</p>
                <h4>Satisfied costumer</h4>`,
                `<p>I wouldn't put that anywhere near my mouth.</p>
                <h4>Random person</h4>`,
            ]
            for (let i = 1; i <= 2; i++) {
                for (const review of reviewContent) {
                    const li = document.createElement('li')
                    li.innerHTML = review
                    if (i == 2) { // make duplicates invisible to screen-readers
                        li.setAttribute('aria-hidden', true)
                    }
                    ul.appendChild(li)
                }
            }
            reviews.appendChild(ul)
        }
        
        reviews.classList.add('reviews')
        addTitle()
        buildReviews()
        content.appendChild(reviews)
    })()
}