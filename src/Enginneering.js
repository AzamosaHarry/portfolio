import './Engineering.css'
import Header from './Header'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image5 from './image5.jpg'
import sum1 from './about-asteroid-main.png'
import sum2 from './about-asteroid1.png'
import sum3 from './about-asteroid2.png'
import { Parallax } from 'react-scroll-parallax'

function Engineering () {
    return(
        <div className='engineering'>
            <Header />
            <div className='engineering_body'>
                <section className='engineering_section_one'>
                    <div className='engineering_section_one_hero'>
                        <h1>Mechanical Engineer.</h1>
                        <h1>Researcher.</h1>
                        <h1>Author.</h1>
                    </div>
                </section>
                <section className='engineering_section_summary'>
                    <Parallax 
                        scale={[1, 0.25]}
                        rotate={[10, -180]}
                        speed={-30}
                        easing="easeInQuad">
                        <img src={sum2} alt='' className='sum2'/>
                    </Parallax>
                    <Parallax speed={-15}>
                        <img src={sum1} alt='' className='sum1'/>
                    </Parallax>
                    <Parallax speed={-5}>
                        <img src={sum3} alt='' className='sum3'/>
                    </Parallax>
                    <Parallax speed={10}>
                        <img src={sum3} alt='' className='sum4'/>
                    </Parallax>
                    <div className='section_summary'>
                        <h3>We are here <span style={{color: '#fff899'}}>somewhere</span></h3>
                        <h1>Journeying through space</h1>
                        <p>Engineering for me is a means to understand the universe, Humans and nature</p>
                        <br />
                        <p>I am an Graduate engineer in the Department of Mechanical Engineering from University of Benin, Benin city. My research is focused mainly on design systems and control engineering.</p>
                    </div> 
                </section>
                <section className='engineering_section_two'>
                    <div>
                        <h1>Professional Journey so far</h1>
                        <hr id='first_rule'/>
                        <h2>EDUCATION</h2>
                        <hr />
                        <div className='engineering_section_two_div'>
                            <h3>2016 - 2022</h3>
                            <div>
                                <h4>Bachelors of Engineering honors (Mechanical)</h4>
                                <p>University of Benin, Benin City</p>
                            </div>
                            <h3>Benin City, Nigeria</h3>
                        </div>
                        <hr />
                        <div className='engineering_section_two_div'>
                            <h3>2007 - 2013</h3>
                            <div>
                                <h4>Secondary school leaving certificate</h4>
                                <p>School of Secondary Education, I.C.E.</p>
                            </div>
                            <h3>Warri City, Nigeria</h3>
                        </div>
                    </div>
                    <img src={image1} className='engineering_section_image'/>
                </section>
                <section className='engineering_section_three'>
                    <div>
                        <hr id='first_rule'/>
                        <h2>WORK EXPERIENCE</h2>
                        <hr />
                        <div className='engineering_section_three_div'>
                            <h3>August 2023 - Present</h3>
                            <div>
                                <h4>NYSC Graduate engineering trainee</h4>
                                <p>Chibufavor Automobile Nigeria</p>
                            </div>
                            <h3>Umuahia, Abia state</h3>
                        </div>
                        <hr />
                        <div className='engineering_section_three_div'>
                            <h3>January 2022 - Present</h3>
                            <div>
                                <h4>CATIA contract worker</h4>
                                <p>University of West Scotland</p>
                            </div>
                            <h3>Remote</h3>
                        </div>
                        <hr />
                        <div className='engineering_section_three_div'>
                            <h3>April 2021 - September 2021</h3>
                            <div>
                                <h4>SIWES Internship</h4>
                                <p>NNPC - Chevron JV</p>
                            </div>
                            <h3>Benin City, Nigeria</h3>
                        </div>
                        <hr />
                        <div className='engineering_section_three_div'>
                            <h3>UBITS Internship</h3>
                            <div>
                                <h4>Lab technician</h4>
                                <p>Department of Mechanical Engineering, University of Benin</p>
                            </div>
                            <h3>Benin City, Nigeria</h3>
                        </div>
                        <hr />
                    </div>
                    <img src={image2} className='engineering_section_image'/>
                </section>
                <section className='engineering_section_two'>
                    <div>
                        <hr id='first_rule'/>
                        <h2>PROJECTS</h2>
                        <hr />
                        <div className='engineering_section_two_div'>
                            <h3>Design and fabrication of an economic waste plastic grinder</h3>
                            <div>
                                <p>Department of mechanical engineering, faculty of engineering, University of Benin</p>
                            </div>
                            <h3>Benin City, Nigeria</h3>
                        </div>
                        <hr />
                        <div className='engineering_section_two_div'>
                            <h3>Design and fabrication of a mini fire fighting robot</h3>
                            <div>
                                <p>NIPES Engineering journal | Research Gate</p>
                            </div>
                            <h3>Online Journal</h3>
                        </div>
                    </div>
                    <img src={image3} className='engineering_section_image'/>
                </section>
                <section className='engineering_section_three'>
                    <div>
                        <hr id='first_rule'/>
                        <h2>CERTIFICATIONS AND MEMBERSHIPS</h2>
                        <hr />
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>Corperate member</h4>
                                <p>Nigerian Institution of Professional Engineers and Scientists (NIPES)</p>
                            </div>
                        </div>
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>Member</h4>
                                <p>International Association of Engineers (IAENG)</p>
                            </div>
                        </div>
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>Member</h4>
                                <p>Institute of Mechanical Engineers (IMechE)</p>
                            </div>
                        </div>
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>Affiliate member</h4>
                                <p>Nigerian Institute of Mechanical Engineers (NIMechE)</p>
                            </div>
                        </div>
                        <hr />
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>Certified project management professional</h4>
                                <p>Gold Seal Certification IGO</p>
                            </div>
                            <h3>issued: October 2023</h3>
                        </div>
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>WSO Occupational and enviromental safety and health (HSE level 1,2 and 3) certifications</h4>
                                <p>Gold Seal Certification IGO</p>
                            </div>
                            <h3>issued: October 2023</h3>
                        </div>
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>Human Resource Mangement Certification</h4>
                                <p>Britist Certification Inc.</p>
                            </div>
                            <h3>issued: October 2023</h3>
                        </div>
                        <div className='engineering_section_three_divvv'>
                            <div>
                                <h4>Enviromental Impact Asssesment</h4>
                                <p>Enviromental Impact Asssesment Experts' Certification Scheme</p>
                            </div>
                            <h3>issued: October 2023</h3>
                        </div>
                    </div>
                    <img src={image5} className='engineering_section_image'/>
                </section>
                <section className='engineering_section_six'>
                    <h1>Engineering sofwares and soft skills</h1>
                    <h3>CATIA CAD modelling</h3>
                    <h3>Solid Works</h3>
                    <h3>Matlab</h3>
                    <h3>Ansys for finite element analysis</h3>
                </section>
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

export default Engineering