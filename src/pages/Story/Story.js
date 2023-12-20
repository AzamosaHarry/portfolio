import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './Story.css'
import story1 from '../../assets/story1.jpg'
import story3 from '../../assets/story3.jpg'
import story2 from '../../assets/story2.jpg'
import story7 from '../../assets/story7.jpg'
import story6 from '../../assets/story6.png'
import story5 from '../../assets/story5.png'
import story4 from '../../assets/story4.png'

function Story () {
    return (
        <div className='story'>
            <Header />
            <div className='story_body'>
                <section className='story_section_one'>
                    <div>
                        <h3>My Story</h3>
                        <h1>Passions and personality.</h1>
                    </div>
                </section>
                <section className='story_section_two'>
                    <img src={story1} className='story_section_two_image'/>
                    <div>
                        <div>
                            <h1>Its not enough to exist, One must live.</h1>
                            <p>This has been my motto for much of my life. I have a passion for music, I have a cat named after Sally, my favorite number is 8, love fashion and styles, I play chess like it's my life, I knew what I wanted to do at the age of 13, my favorite food is steamed jollof rice, and I love to watch the stars at night.</p>
                        </div>
                    </div>
                </section>
                <section className='story_section_three'>
                    <h3>THIS IS ME IN A NUTSHELL</h3>
                    <h1>I’m a christian, tech lover, soccer enthusiast, cat person, writer, designer, and software developer.</h1>
                </section>
                <section  className='story_section_four'>
                    <img src={story2} className='story_section_four_image'/>
                    <img src={story3} className='story_section_four_image'/>
                </section>
                <section className='story_section_five' >
                    <h1>Back Story.</h1>
                    <div>
                        <p>Yes, as I stated in my fun facts and in the nutshell above, I knew what I wanted to do by the age of 13. The short version is that I loved creating and engineering stuffs growing up and always had an interest to know how they were made. So, a small idea turned into me wanting to make my own bicycle. And after a few friends helped to fill up notebooks with thoughts, ideas, and drawings we quickly realized that we needed a knowledge in mechanical engineering. Obviously, this was before I started my mechanical engineering program at University of Benin. So, I was able to teach myself the basics from borrowed textbooks and build something. Fast-forwarding, after graduating college with an bachelor's degree in engineering, I made my way into multiple jobs. First starting out as an intern at NNPC-Chevron JV. This was the start of many core understandings and played a key role in my thought process when thinking about engineering as a whole, especially when it comes to control sysyems. After that, working my way into the tech industry was a path that I created for myself based on one question that I still find myself asking, how can I solve problems with soft technologies? This was the one question that started the passion for Software engineering. After years in the industry, and having gone through multiple trainings and career opportunities, some good, and some bad, I have grown to the place where I am now; creating my own brand. It was March of 2021 which was my first day of transitioning from wanting to just consume but to also produce creatively. So, here I am years later still doing the same thing, and still loving it. I’m finding myself venturing down new paths and pushing some new focus areas such as helping people build personal brands and build awesome softwares. Ever since I created my own personal brand back in 2021, I realized that I’ve learned a lot and am able to help teach people what I’ve learned over the years about what worked and what didn’t for me. If you want to know more about me, I easily accesible on my social media pages or you can always send a quick email. P.S. Yes, writing is to me as ale is to pirates on the deep blue sea. It resonates with my soul.</p>
                    </div>
                </section>
                <section className='story_section_six'>
                    <div>
                        <img src={story7} className='story_section_six_image1'/>
                        <h1>The Mom.</h1>
                    </div>
                    <div>
                        <img src={story6} className='story_section_six_image2'/>
                        <h1>The Church</h1>
                    </div>
                    <div>
                        <img src={story5} className='story_section_six_image1'/>
                        <h1>The Obsession.</h1>
                    </div>
                    <div>
                        <img src={story4} className='story_section_six_image2'/>
                        <h1>The Focus.</h1>
                    </div>
                </section>
                <section className='story_section_three'>
                    <h3>MY STORY CONTINUES, BUT OFF THE WEB</h3>
                    <h1>Now that you know part of my story, you have seen a glimpse of my soul. I exist outside the web and I would love to share my story with you personally.</h1>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Story;