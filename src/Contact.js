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
                        <p>Elit ad id occaecat duis nisi minim deserunt. Minim deserunt elit qui anim non aliquip Lorem velit aute in veniam est. Sit incididunt do aliquip velit irure. </p>
                        <h3>SUBMIT TICKET</h3>
                    </div>
                    <div>
                        <h1>Hire an Expert</h1>
                        <p>Elit ad id occaecat duis nisi minim deserunt. Minim deserunt elit qui anim non aliquip Lorem velit aute in veniam est. Sit incididunt do aliquip velit irure. </p>
                        <h3>SUBMIT TICKET</h3>
                    </div>
                    <div>
                        <h1>General Questions</h1>
                        <p>Elit ad id occaecat duis nisi minim deserunt. Minim deserunt elit qui anim non aliquip Lorem velit aute in veniam est. Sit incididunt do aliquip velit irure. </p>
                        <h3>SUBMIT TICKET</h3>
                    </div>
                </section>
                <section className='contact_section_three'>
                    <h1>Or Get in contact directly</h1>
                    <h3 onClick={() => window.location = 'mailto:johnharry@gmail.com?subject=Access request'} >MAIL Johnharry238@gmail.com</h3>
                    <h3>CALL +2347031122233</h3>
                    <h3>SEND A MESSAGE ON Linkedin</h3>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;