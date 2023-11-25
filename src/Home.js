import './Home.css'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import { SlArrowDown } from 'react-icons/sl'
import { BsSuitDiamondFill } from 'react-icons/bs'
import Header2 from './Header2'
function Home() {

    const navigate = useNavigate()
    return(
        <div>
          <Header2 />
            <div className='home_body'>
                <section className='home_section_one'>
                <div className='section_two_bg'>
                    <div className='section_two_fg'>
                      <div className='primary_one'>
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                      </div>
                      <div className='primary_two'>
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                        <BsSuitDiamondFill />   
                        <h1>If you know me, you will know my story</h1>
                      </div>
                      
                    </div>
                  </div>
                  <div className='home_section_one_hero'>
                    <h1>Just call me Harry</h1>
                    <br />
                    <p>My name is  <span style={{color: 'burlywood'}}> AZAMOSA HARRY</span> and I am a beautiful mosaic of lived experience and culture.</p>
                    <br />
                    <p>I am a Mechanical engineer, Software developer, designer and writer. Yes, I enjoy the diversity of knowledge!</p>
                  </div>
                    <div className='section_one_arrow'>
                        <SlArrowDown className='arrow_one'/>
                        <SlArrowDown className='arrow_two'/>
                        <SlArrowDown className='arrow_three'/>
                    </div>
                </section>
                <section className='home_section_two'>
                    <p>While you are here,</p>
                    <h1>Go through my respective portfolios</h1>
                    <div className='home_section_two_div'>
                      <div onClick={() => {navigate('/portfolio/engineering')}}>
                          <h1>Mechanical engineering</h1>
                          <h3>EXPLORE</h3>
                      </div>
                      <div onClick={() => {navigate('/portfolio/developer')}}>
                          <h1>Software developing</h1>
                          <h3>EXPLORE</h3>
                      </div>
                      <div onClick={() => {navigate('/portfolio/design')}}>
                          <h1>Design</h1>
                          <h3>EXPLORE</h3>
                      </div>
                      <div  onClick={() => {navigate('/portfolio/writer')}}>
                          <h1>Writer</h1>
                          <h3>EXPLORE</h3>
                      </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home