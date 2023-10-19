import { Link, useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const navigate = useNavigate()
    return (
        <div className='footer'>
            <div>
                <p>Download CV</p>
                <h3>|</h3>
                <p>Johnharry238@gmail.com</p>
                <h3>|</h3>
                <p>Linkedin</p>
            </div>
        </div>
    )
}

export default Footer