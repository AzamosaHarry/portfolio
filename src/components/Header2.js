import { React, useEffect, useRef, useState } from 'react'
import './Header2.css'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { RiCodeBoxFill } from "react-icons/ri"
import { SlArrowDown } from 'react-icons/sl'

function Header2() {
    const navigate = useNavigate()
    const [menu, setMenu] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const containerRef1 = useRef(null)

    const [isVisible, setIsVisible] = useState(false)
    const [loaded1, setLoaded1] = useState(false)

    const callbackFunction1 = (entries) => {
        const [ entry ] = entries
        setLoaded1(entry.isIntersecting)
        if (loaded1 == true) {
            setIsVisible(true)
        }
    }
    const options1 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    }

    useEffect(() => {
        const observer1 = new IntersectionObserver(callbackFunction1, options1)
        if (containerRef1.current) observer1.observe (containerRef1.current)
    return () => {
        if (containerRef1.current) observer1.unobserve(containerRef1.current)
    }
    }, [containerRef1, options1])
    return (
      <div  ref={containerRef1}  className={loaded1? 'header transparent':'header'}>   
        <Link to='/portfolio'><RiCodeBoxFill alt='' className='portfolio_header' /></Link>
        <div>
          <ul className='header_nav'>
            <li>
              <Link to='/portfolio/story' className='header_nav_list2'>My Story</Link>
            </li>
            <li className='dropdown' onClick={() => {setDropdown(!dropdown)}}>         
              <div className='dropdown_div_first-child2'>
                <Link to='#' className='header_nav_list2'>My portfolios</Link>
                <SlArrowDown className='header_arrow2'/>
              </div>
              <div className={dropdown? 'header_dropdown_div' : 'header_dropdown_div_false'}>
                <h1 onClick={() => {navigate('/portfolio/engineering')}}>Mechanical engineer</h1>
                <h1 onClick={() => {navigate('/portfolio/developer')}}>Software developer</h1>
                <h1 onClick={() => {navigate('/portfolio/design')}}>Design</h1>
                <h1 onClick={() => {navigate('/portfolio/writer')}}>Writer</h1>
              </div>
            </li>
            <li>
              <Link to='/portfolio/insight' className='header_nav_list2'>Insight</Link>
            </li>
            <li>
              <Link to='/portfolio/contact' className='header_nav_list2'>Contact</Link>
            </li>
          </ul>
        </div>

        <FiMenu className='home_menu2' onClick={() => {setMenu(true)}}/>
        <div className={menu? 'home_sidebar_true' : 'home_sidebar'}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <Link to='/portfolio'><RiCodeBoxFill alt='' className='evajay_header2' /></Link>
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
                  >My portfolios</Link></li>
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

export default Header2;