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

cleanContent()
buildAboutPage()