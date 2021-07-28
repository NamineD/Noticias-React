import React from 'react'

export default function Header({titulo}) {
    return (
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!">{titulo}</a>
        </nav>
    )
}
