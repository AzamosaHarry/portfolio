import { React, useState } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { RiLeafFill } from 'react-icons/ri'
import { SlArrowDown } from 'react-icons/sl'

function Header() {
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    return (
      <div className='header transparent'>      
        <Link to='/portfolio'><RiLeafFill alt='' className='evajay_header' /></Link>
        <ul className='header_nav'>
          <li>
            <Link to='/portfolio/story' className='header_nav_list'>My Story</Link>
          </li>
          <li className='dropdown' onClick={() => {setDropdown(!dropdown)}}>         
            <div>
              <Link to='#' className='header_nav_list'>My portfolios</Link>
              <SlArrowDown className='header_arrow'/>
            </div>
            <div className={dropdown? 'header_dropdown_div' : 'header_dropdown_div_false'}>
              <h1  onClick={() => {navigate('/portfolio/engineering')}}>Mechanical engineer</h1>
              <h1 onClick={() => {navigate('/portfolio/developer')}}>Software developer</h1>
              <h1 onClick={() => {navigate('/portfolio/design')}}>Design</h1>
              <h1 onClick={() => {navigate('/portfolio/writer')}}>Writer</h1>
            </div>
          </li>
          <li>
            <Link to='/portfolio/insight' className='header_nav_list'>Insight</Link>
          </li>
          <li>
            <Link to='/portfolio/contact' className='header_nav_list'>Contact</Link>
          </li>
        </ul>

        <FiMenu className='home_menu' onClick={() => {setMenu(true)}}/>
        <div className={menu? 'home_sidebar_true' : 'home_sidebar'}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <Link to='/portfolio'><RiLeafFill alt='' className='evajay_header2' /></Link>
              <AiOutlineClose className='home_sidebar_close' onClick={() => {setMenu(false)}}/>
            </div>
            <ul className='home_sidebar_navbar'>
              <li><Link
                to='/portfolio/story'
                className='home_sidebar_link'
                >My story</Link></li>
              <li><Link
                  onClick={() => {setDropdown(!dropdown)}}
                  to="#"
                  className='home_sidebar_link'
                  >My portfolio</Link></li>
                  <div className={dropdown? 'header_dropdown_div' : 'header_dropdown_div_false'}>
              <h1  onClick={() => {navigate('/portfolio/engineering')}}>Mechanical engineer</h1>
              <h1 onClick={() => {navigate('/portfolio/developer')}}>Software developer</h1>
              <h1 onClick={() => {navigate('/portfolio/design')}}>Design</h1>
              <h1 onClick={() => {navigate('/portfolio/writer')}}>Writer</h1>
              </div>
              <li><Link
                  to='/portfolio/insight'
                  className='home_sidebar_link'
                  >Insight</Link></li>
              <li><Link
                  to='/portfolio/contact'
                  className='home_sidebar_link'
                  >Contact</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Header