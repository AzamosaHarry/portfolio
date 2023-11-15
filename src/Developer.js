import './Developer.css'
import Footer from './Footer';
import Header from './Header';

function Developer () {
    return(
        <div className='developer'>
            <Header />
            <div className='developer_body'>
                <section className='developer_section_one'>
                    <div>
                        <h3>Creative</h3>
                        <h1>Developer</h1>
                        <h4>Console.log('Hello Traveller')</h4>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Developer;   