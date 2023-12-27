import './Developer.css'
import Footer from '../../components/Footer';
import Header2 from '../../components/Header2';
import imageb1 from '../../assets/b1.png'
import imageb2 from '../../assets/b2.png'
import imageb3 from '../../assets/b3.png'
import imageb4 from '../../assets/b4.png'
import imageb5 from '../../assets/b5.png'
import imageb6 from '../../assets/b6.png'
import imageb7 from '../../assets/b7.png'
import imageb8 from '../../assets/b8.png'
import imageb9 from '../../assets/b9.png'
import imageb10 from '../../assets/b10.png'
import imageb11 from '../../assets/b11.png'
import imageb12 from '../../assets/b12.png'
import imagep1 from '../../assets/p1.webp'
import imagep2 from '../../assets/p2.gif'
import imagep3 from '../../assets/p3.gif'
import imagep4 from '../../assets/p4.webp'
import imagep5 from '../../assets/p5.gif'
import imagep6 from '../../assets/p6.webp'
import imagep7 from '../../assets/p7.webp'
import imagep8 from '../../assets/p8.gif'
import imagep9 from '../../assets/p9.gif'
import imagep10 from '../../assets/p10.webp'
import imagep11 from '../../assets/p11.webp'
import imagep12 from '../../assets/p12.webp'


function Developer () {
    return(
        <div className='developer'>
            <Header2 />
            <div className='developer_body'>
                <section className='developer_section_one'>
                    <div>
                        <div>
                            <h3>Creative. Dold. Unplanned.</h3>
                            <h1>Software Developer.</h1>
                        </div>
                        <p>Your friendly neighborhood Software developer, UX architect, Artificial intelligence and JavaScript engineer. I spend my days (and often nights) painting the Internet canvas with projects and lines of code, turning zeroes and ones into immersive, interactive experiences. Bona fide photochromic creative enthusiast - sunlight or indoors, I've got it covered.</p>
                        <p> I tread the path of minimalism, finding beauty in simplicity and order. When I'm not crafting beautiful web experiences and sofwares APIs, you can find me reading articles or swaying to the rhythm of Indie music & Jazz, losing myself in the captivating flow of melodies.</p>
                    </div>
                </section>
                <section className='developer_section_four'>
        
                </section>
                <section className='developer_section_five'>
                    <h1>Recent Projects.</h1>
                    <div>
                        <img src={imagep1} className='developer_section_five_image'/>
                        <img src={imagep2} className='developer_section_five_image'/>
                        <img src={imagep3} className='developer_section_five_image'/>
                        <img src={imagep4} className='developer_section_five_image'/>
                        <img src={imagep5} className='developer_section_five_image'/>
                        <img src={imagep6} className='developer_section_five_image'/>
                        <img src={imagep7} className='developer_section_five_image'/>
                        <img src={imagep8} className='developer_section_five_image'/>
                        <img src={imagep9} className='developer_section_five_image'/>
                        <img src={imagep10} className='developer_section_five_image'/>
                        <img src={imagep11} className='developer_section_five_image'/>
                        <img src={imagep12} className='developer_section_five_image'/>
                    </div>
                </section>
                <section className='developer_section_six'>
                    <h1>Brands that trust me.</h1>
                    <div>
                        <div>
                            <img src={imageb1} className='developer_section_six_image'/>
                            <img src={imageb3} style={{height: '10px'}} className='developer_section_six_image'/>
                            <img src={imageb6} className='developer_section_six_image'/>
                            <img src={imageb4} style={{height: '40px'}}className='developer_section_six_image'/>
                            <img src={imageb5}  style={{height: '40px'}}className='developer_section_six_image'/>
                            <img src={imageb2} style={{height: '40px'}}className='developer_section_six_image'/>
                        </div>
                        <div>
                            <img src={imageb9} style={{height: '40px'}} className='developer_section_six_image'/>
                            <img src={imageb10} className='developer_section_six_image'/>
                            <img src={imageb11} style={{height: '40px'}}className='developer_section_six_image'/>
                            <img src={imageb12} className='developer_section_six_image'/>
                            <img src={imageb7} className='developer_section_six_image'/>
                            <img src={imageb8} style={{height: '20px'}}className='developer_section_six_image'/>
                        </div>
                    </div>
                </section>
                
            </div>
            <Footer style={{background: 'red'}}/>
        </div>
    )
}

export default Developer;   