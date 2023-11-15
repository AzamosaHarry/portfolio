import './Developer.css'
import Footer from './Footer';
import Header from './Header';
import image11 from './image11.png'
import image12 from './image12.png'
import image13 from './image13.png'
import image9 from './image9.jpg'
import image5 from './image5.jpg'

function Developer () {
    return(
        <div className='developer'>
            <Header />
            <div className='developer_body'>
                <section className='developer_section_one'>
                    <div>
                        <h3>Creative.</h3>
                        <h1>Software Developer.</h1>
                    </div>
                </section>
                <section className='developer_section_two' >
                    <h1>. I WORK</h1>
                    <h1>TO GIVE CUSTOMERS</h1>
                    <div className='bg_span'><div className='bg_div'><h1>ENDEARING
                    <h1>EXCEPTIONAL</h1>
                    </h1><h1>MEMORABLE</h1><h1>UNIQUE</h1></div></div>
                    <h1>EXPERIENCE</h1>

                </section>
                <section className='developer_section_three'>
                    <div className='developer_section_three_div2'>
                        <div>
                            <h1>Dev skills</h1>
                            <h3>Javatscript</h3>
                            <h3>React JS</h3>
                            <h3>CSS</h3>
                            <h3>Next JS</h3>
                            <h3>Javatscrip</h3>
                            <h3>Javatscrip</h3>
                            <h3>Javatscrip</h3>
                        </div>
                        <div>
                            <h1>Frameworks</h1>
                            <h3>Javatscript</h3>
                            <h3>React JS</h3>
                            <h3>CSS</h3>
                            <h3>Next JS</h3>
                            <h3>Javatscrip</h3>
                            <h3>Javatscrip</h3>
                            <h3>Javatscrip</h3>
                        </div>
                    </div>
                    <div className='developer_section_three_div'>
                        <img src={image11} className='developer_section_three_image'/>
                        <h1>This is not me, this is David Michelangelo</h1>
                    </div>
                </section>
                <section className='developer_section_four'>
                    <div className='developer_section_four_div'>
                        <img src={image12} className='developer_section_four_image'/>
                        <h3>I am like David, I bring ar and creaiviy o web design</h3>
                    </div>
                    <div>
                        <h1>. I WORK</h1>
                        <h1>ON PROJECTS THAT</h1>
                        <h1>I STRONGTLY</h1>
                        <h1>BELIEVE IN</h1>
                    </div>
                </section>
                <section className='developer_section_five'>
                    <h1>My recent projects</h1>
                    <div>
                        <img src={image5} className='developer_section_five_image'/>
                        <img src={image9} className='developer_section_five_image'/>
                        <img src={image5} className='developer_section_five_image'/>
                        <img src={image9} className='developer_section_five_image'/>
                        <img src={image5} className='developer_section_five_image'/>
                        <img src={image9} className='developer_section_five_image'/>
                        <img src={image5} className='developer_section_five_image'/>
                        <img src={image9} className='developer_section_five_image'/>
                    </div>
                </section>
                <section className='developer_section_six'>
                    <h1>Brands and companies that trust me</h1>
                    <div>
                        
                    </div>
                </section>
                <section className='developer_section_seven'>
                    <img src={image13} className='developer_section_section_image'/>
                    <h1>GET IN TOUCH</h1>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Developer;   