import { useEffect, useRef, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import './Writer.css'

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
                    </div>
                    <div className='writer_section_one_div2'>
                        <div>

                        </div>
                        <div>
                          
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </section>
                <section className='writer_section_two'>
                    <h3>Get in touch traveller</h3>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Writer