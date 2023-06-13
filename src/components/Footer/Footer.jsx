import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src="logo_footer.png" alt="footer" />
            </div>
            <div className='footer-text'>© 2020 Kasa. All rights reserved</div>
        </div>
    );
}

export default Footer