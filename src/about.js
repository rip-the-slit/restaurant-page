import closeIcon from './assets/close.svg'
import womanGivingOrder from './assets/2149106377.jpg'

export function buildAboutPage() {
    const content = document.getElementById('content')

    const buildUpdateNotice = (function() {
        const figure = document.createElement('figure')
        const addText = function() {
            figure.textContent = 'We might add dynamic pricing in the future'
        }
        const addCloseButton = function() {
            const button = document.createElement('button')
            const addIcon = function() {
                button.innerHTML += closeIcon
            }
            const closeUpdateNotice = function() {
                figure.classList.add('closing')
                setTimeout(() => {
                    content.removeChild(figure)
                }, 1000);
            }

            button.id = 'close-update'
            addIcon()
            button.addEventListener('click', closeUpdateNotice)
            figure.appendChild(button)
        }

        figure.classList.add('update')
        addText()
        addCloseButton()
        content.appendChild(figure)
    })()

    const buildAboutUs = (function() {
        const div = document.createElement('div')
        const buildText = function() {
            const textDiv = document.createElement('div')
            const addH2 = function() {
                const h2 = document.createElement('h2')
                h2.textContent = 'About us'
                textDiv.appendChild(h2)
            }
            const addP = function() {
                const p = document.createElement('p')
                p.textContent = `You might recognize us for being the place that "sells food so cheap you wish healthcare 
                                was free", but beyond flashy headlines and social media slander, we are a restaurant 
                                family deeply concerned with quality and affordability. Just as an example last month, 
                                to address food safety concerns from our costumers, we fired our three remaining chefs 
                                and the entire cleaning team with them. We replaced them with robots, how cool! And 
                                to remain affordable as we expand to 8 new locations, we plan on firing our waiters as 
                                well!`
                textDiv.appendChild(p)
            }

            addH2()
            addP()
            div.appendChild(textDiv)
        }
        const addImage = function() {
            const img = document.createElement('img')
            img.alt = 'woman giving order'
            img.src = womanGivingOrder
            div.appendChild(img)
        }

        div.classList.add('about-us')
        buildText()
        addImage()
        content.appendChild(div)
    })()

    const addImageAttribution = (function() {
        const attribution = document.createElement('div')
        attribution.innerHTML = `<a href="https://www.freepik.com/free-photo/woman-giving-order-curbside-pickup_18737050.htm#fromView=search&page=2&position=8&uuid=feb618f6-3225-420e-bc41-78103a1b1e4a">Image by freepik</a>`
        attribution.classList.add('attribution')
        content.appendChild(attribution)
    })()
}