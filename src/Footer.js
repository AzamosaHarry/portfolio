import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const navigate = useNavigate()
    return (
        <div className='footer'>
            <div>
                <p>Download CV</p>
                <h3>|</h3>
                <p onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'} >Johnharry238@gmail.com</p>
                <h3>|</h3>
                <p>Linkedin</p>
            </div>
            <section>
                <p> &copy; 2023 Azamosa Harry. All rights reserved. Project Developer & Founder of PROJECT M.</p>
            </section>
        </div>
    )
}

export default Footer