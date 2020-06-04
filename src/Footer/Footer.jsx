import React from "react";
import './footer.css'

const Footer = () => {
    const currentDate = new Date
    const currentYear = currentDate.getUTCFullYear()
    return (
        <footer className='footer'>
            <p>John Wiley & Sons, Inc. {currentYear}</p>
        </footer>
    )
}

export default Footer