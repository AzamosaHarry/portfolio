import { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { VscDash } from "react-icons/vsc";
import './Writer.css'
import image5 from './image5.jpg'
import image6 from './image6.jpg'
import image7 from './image7.jpg'
import image8 from './image8.png'
import image9 from './image9.jpg'
import image10 from './image10.jpg'

function Writer () {
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
        threshold: 0.5
    }

    useEffect(() => {
        const observer1 = new IntersectionObserver(callbackFunction1, options1)
        if (containerRef1.current) observer1.observe (containerRef1.current)
    return () => {
        if (containerRef1.current) observer1.unobserve(containerRef1.current)
    }
    }, [containerRef1, options1])

    return (
        <div className='writer'>
            <div style={{minHeight: '1px'}}>

            </div>
            <Header />
            <div className='writer_body'>
                <section ref={containerRef1} className={loaded1? 'writer_section_one visible-bg':'writer_section_one'}>
                    <div className='writer_section_one_div1'>
                        <h1>"For what is life without her?"</h1>
                        <h1>"being without Saphira is like unto death,"</h1>
                        <h1>"but less bearable"</h1>
                        <p>Excerpt from the humming bird</p>
                        <div>
                            <h3>My Latest Works</h3>
                        </div>
                    </div>
                    <div className='writer_section_one_div2'>
                        <div>
                            <img src={image10} className='writer_image'/>
                            <h3>The humming bird</h3>
                        </div>
                        <div>
                            <img src={image9} className='writer_image'/>
                            <h3>1914</h3>
                        </div>
                        <div>
                            <img src={image8} className='writer_image'/>
                            <h3>Ballad of Henry and Saphira</h3>
                        </div>
                        <div>
                            <img src={image7} className='writer_image'/>
                            <h3>Society at siege</h3>
                        </div>
                        <div>
                            <img src={image6} className='writer_image'/>
                            <h3>Memoirs of September</h3>
                        </div>
                        <div>
                            <img src={image5} className='writer_image'/>
                            <h3>Christmas morning</h3>
                        </div>
                    </div>
                </section>
                <section className='writer_section_two'>
                    <h1>Reviews</h1>
                    <div>
                        <div className='writer_section_two_div'>
                            <p>Qui occaecat incididunt quis anim esse pariatur anim commodo eiusmod ipsum eiusmod veniam in. Magna commodo duis eiusmod voluptate. Nostrud nulla adipisicing nisi eiusmod dolore nulla mollit officia.</p>
                            <VscDash className='writer_section_two_dash'/>
                            <h3>The Guardian</h3>
                        </div>
                        <div className='writer_section_two_div'>
                            <p>Qui occaecat incididunt quis anim esse pariatur anim commodo eiusmod ipsum eiusmod veniam in. Magna commodo duis eiusmod voluptate. Nostrud nulla adipisicing nisi eiusmod dolore nulla mollit officia.</p>
                            <VscDash className='writer_section_two_dash'/>
                            <h3>The Guardian</h3>
                        </div>
                        <div className='writer_section_two_div'>
                            <p>Qui occaecat incididunt quis anim esse pariatur anim commodo eiusmod ipsum eiusmod veniam in.</p>
                            <VscDash className='writer_section_two_dash'/>
                            <h3>The Guardian</h3>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Writer