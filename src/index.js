import './base-style.css'
import './home-style.css'
import { buildHomePage } from './home.js'

function cleanContent() {
    const content = document.getElementById('content')
    while (content.firstChild) {content.removeChild(content.firstChild)}
}

cleanContent()
buildHomePage()