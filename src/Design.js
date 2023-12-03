import './Design.css'   
import { Parallax } from 'react-scroll-parallax'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './image7.jpg'
import image8 from './image8.png'
import image9 from './image9.jpg'
import image10 from './image10.jpg'
import image11 from './image11.jpg'
import lines from './lines.png'
import lines2 from './lines2.png'
import Header from './Header'
import Footer from './Footer'

function Design () {
    return(
        <div className='design'>
            <Header />
            <div className='design_head'>
                <img src={lines} alt='' className='lines'/>
                <Parallax 
                    scale={[1, 0.25]}
                    rotate={[50, -180]}
                    speed={-30}
                    easing="easeInQuad">
                    <img src={lines2} alt='' className='lines2'/>
                </Parallax>
                <Parallax speed={-25}>
                    <h1>Design</h1>
                    <h1>2023</h1>
                </Parallax>
            </div>
            <div className='design_main'>
                    <h3>here's my small home to distinguished projects I have worked on recenty, deeply rooted in my passion for helping brands express their desires cut accross UI/UX, graphics design and animation. I create brand identities through graphic design and art direction for brands, founders, start-ups, and institutions. True to my tradition, each of my brands builds on a specialty legacy while keeping an unwavering focus on the exquisite caliber of its projects. Welcome Traveller!</h3>
            </div>
            <section className='design_section_one'>
                <div className='design_div'>
                    <div>
                        <img src={image10} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image9} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image2} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image3} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image4} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image5} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image6} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image7} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image8} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image3} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image1} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                    <div>
                        <img src={image11} className='design_image'/>
                        <div>
                            <h3>Capital X</h3>
                            <p>Brand Identity, Packaging design</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='design_main'>
                <Parallax speed={-5}>
                    <h3>With over half a decade of experience, I have worked with clients in fashion, lifestyle, art, and technology, including Mothership. Capital X, mobile Energy and Evajay farms. I am passionate about building distinct visual worlds, intuitively capturing the very essence of an idea or a message. Off-screen, I enjoy time with my family, thinking about space, writing plays, and trying to grow a forest on a tiny African balcony.!</h3> 
                    <br />
                    <h3> For new project inquiries, please get in touch</h3>
                    <h3>Shalom Traveller!</h3>
                </Parallax>
            </div>
            <div className='footer' style={{background: 'black'}}>
                <div>
                    <p>Download CV</p>
                    <h3>|</h3>
                    <p>Johnharry238@gmail.com</p>
                    <h3>|</h3>
                    <p>Linkedin</p>
                </div>
            </div>
        </div>
    )
}

export default Design