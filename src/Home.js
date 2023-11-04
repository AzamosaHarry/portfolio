import './Home.css'
import Footer from './Footer'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { SlArrowDown } from 'react-icons/sl'
import { BsSuitDiamondFill } from 'react-icons/bs'
function Home() {

    const navigate = useNavigate()
    return(
        <div>
            <Header />
            <div className='home_body'>
                <section className='home_section_one'>
                <div className='section_two_bg'>
                    <div className='section_two_fg'>
                      <div className='primary_one'>
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                      </div>
                      <div className='primary_two'>
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                      </div>
                      
                    </div>
                    <div className='section_two_fg'>
                      <div className='primary_one'>
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                      </div>
                      <div className='primary_two'>
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                        <BsSuitDiamondFill />   
                        <h1>Azamosa Harry</h1>
                      </div>
                      
                    </div>
                  </div>
                  <div className='home_section_one_hero'>
                    <h1>If you know me, you will know my story</h1>
                    <br />
                    <p>My name is Azamosa Harry and I am a <span style={{color: 'gray'}}>beautiful mosaic</span> of lived experience and culture.</p>
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
                    <div>
                        <button onClick={() => {navigate('/portfolio/engineering')}}>Mechanical engineering</button>
                        <button onClick={() => {navigate('/portfolio/developer')}}>Software developing</button>
                        <button onClick={() => {navigate('/portfolio/design')}}>Design</button>
                        <button onClick={() => {navigate('/portfolio/writer')}}>Writer</button>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home