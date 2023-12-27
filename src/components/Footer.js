import { Link, useNavigate } from 'react-router-dom'
import cv from '../assets/AzamosaHarryOsawayemen.pdf'
import logowhite from '../assets/logo-white.png' 
import './Footer.css'

function Footer() {
    const navigate = useNavigate()

    function notification() {
            
                new Notification('Azamosa Harry Portfolio', {
                    body: `The curriculum vitae of Azamosa Harry Osawayemen has been downloaded to your local device storage`,
                    icon: {logowhite},
                    image: {logowhite}
                })
        
    }    

    return (
        <div className='footer'>
            <div>
                <a href={cv} download target='_blank' onClick={notification}><p>Download CV</p></a>
                <h3>|</h3>
                <p onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'} >Johnharry238@gmail.com</p>
                <h3>|</h3>
                <a href="https://www.linkedin.com/in/harry-azamsoa-mnipes-miaeng-mime-525087149/"  target='_blank'><p>Linkedin</p></a>
            </div>
            <section>
                <p> &copy; 2023 Azamosa Harry. All rights reserved. Project Developer & Founder of PROJECT M.</p>
            </section>
        </div>
    )
}

export default Footer