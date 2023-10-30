import { React, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { RiLeafFill } from 'react-icons/ri'


function Header() {
    const [menu, setMenu] = useState(false)

    return (
      <div className='header transparent'>      
        <Link to='/'><RiLeafFill alt='' className='evajay_header' /></Link>
        <ul className='header_nav'>
          <li>
            <Link to='/mystory' className='header_nav_list'>My Story</Link>
          </li>
          <li>         
            <Link to='/about' className='header_nav_list'>My portfolios</Link>
          </li>
        </ul>

        <FiMenu className='home_menu' onClick={() => {setMenu(true)}}/>
        <div className={menu? 'home_sidebar_true' : 'home_sidebar'}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <Link to='/'><RiLeafFill alt='' className='evajay_header' /></Link>
              <AiOutlineClose className='home_sidebar_close' onClick={() => {setMenu(false)}}/>
            </div>
            <ul className='home_sidebar_navbar'>
              <li><Link
                to='/mystory'
                className='home_sidebar_link'
                >My story</Link></li>
              <li><Link
                  to="/portfolio"
                  className='home_sidebar_link'
                  >My portfolio</Link></li>

            </ul>
        </div>
    </div>
    )
}

export default Header