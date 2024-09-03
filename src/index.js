import './base-style.css'
import './home-style.css'

function cleanContent() {
    const content = document.getElementById('content')
    while (content.firstChild) {content.removeChild(content.firstChild)}
}

cleanContent()