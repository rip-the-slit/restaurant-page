import './base-style.css'
import './home-style.css'
import './menu-style.css'
import './about-style.css'
import { buildHomePage } from './home.js'
import { buildMenuPage } from './menu.js'
import { buildAboutPage } from './about.js'

function cleanContent() {
    const content = document.getElementById('content')
    while (content.firstChild) {content.removeChild(content.firstChild)}
}

function bindEvents(target, callback) {
    target.addEventListener('click', function (e) {
        cleanContent()
        callback()
        e.target.parentElement.classList.add('expanding')
        setTimeout(() => {
            e.target.parentElement.classList.remove('expanding')
        }, 300);
    })
}

const tabs = [
        {
            target : document.getElementById('home'),
            callback : buildHomePage
        },
        {
            target : document.getElementById('menu'),
            callback : buildMenuPage
        },
        {
            target : document.getElementById('about'),
            callback : buildAboutPage
        }
        ]

tabs[0].callback()

for (let tab of tabs) {
    bindEvents(tab.target, tab.callback)
}