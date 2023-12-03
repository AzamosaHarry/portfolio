import './Contact.css'
import Footer from './Footer';
import Header from './Header';

function Contact () {
    return(
        <div className='contact'>
            <Header />
            <div className='contact_body'>
                <section className='contact_section_one'>
                    <h1>Reach Out Today.</h1>
                </section>
                <section className='contact_section_two'>
                    <div>
                        <h1>Code Shop Support</h1>
                        <p>I provide expert support and consultancy for businesses and brands that require my services.</p>
                        <h3 onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'}>SAY HELLO</h3>
                    </div>
                    <div>
                        <h1>Hire an Expert</h1>
                        <p>Do you need an expert in software development, brand designs, creating awesome projects and product growth? I am available for hiring.</p>
                        <h3 onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'}>MESSAGE ME</h3>
                    </div>
                    <div>
                        <h1>General Questions</h1>
                        <p>Any questions about engineering, tech, softwares, designs, literature or maybe you have questions about music, philosophy or chess; feel free to ask me anything.</p>
                        <h3 onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'}>SEND EMAIL</h3>
                    </div>
                </section>
                <section className='contact_section_three'>
                    <h1>Or Get in contact directly</h1>
                    <h3 onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'} >MAIL Johnharry238@gmail.com</h3>
                    <a href="tel:+2347016000164"><h3>CALL +2347016000164</h3></a>
                    <a href="https://www.linkedin.com/in/harry-azamsoa-mnipes-miaeng-mime-525087149/"  target='_blank'><h3>SEND A MESSAGE ON Linkedin</h3></a>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;