import Footer from './Footer';
import Header from './Header';
import './Story.css'
import image10 from './image10.jpg'
import image9 from './image9.jpg'
import image5 from './image5.jpg'
import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'

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
                    <img src={image10} className='story_section_two_image'/>
                    <div>
                        <div>
                            <h1>Its not enough to exist, One must live.</h1>
                            <p>I have a passion for coffee, I have a cat named after MacGyver, my favorite number is 22, love a good Old Fashion, I play video games like it's my life, I knew what I wanted to do at the age of 13, my favorite food is bacon, and I broke my left arm twice.</p>
                        </div>
                    </div>
                </section>
                <section className='story_section_three'>
                    <h3>THIS IS ME IN A NUTSHELL</h3>
                    <h1>I’m a husband, father, coffee enthusiast, cat person, gamer, and Squarespace developer.</h1>
                </section>
                <section  className='story_section_four'>
                    <img src={image5} className='story_section_four_image'/>
                    <img src={image9} className='story_section_four_image'/>
                </section>
                <section className='story_section_five' >
                    <h1>Back Story.</h1>
                    <div>
                        <p>Yes, as I stated in my fun facts and in the video above, I knew what I wanted to do by the age of 13. The short version is that I loved playing video games growing up and always had an interest to know how they were made. So, a small idea turned into me wanting to make my own video game. And after a few friends helped to fill up notebooks with thoughts, ideas, and drawings we quickly realized that we needed a website. Obviously, this was before the internet was filled with this type of knowledge readily available at your fingertips (YouTube, Facebook, and even MySpace weren't a thing yet). So, I was able to teach myself the basics and build something. Fast-forwarding, after graduating college with an associate's degree in digital arts, I made my way into multiple jobs. First starting out as a designer in the print industry for a small publication company. This was the start of many core understandings and played a key role in my thought process when thinking about design as a whole, especially when it comes to typography. After that, working my way into the development industry was a path that I created for myself based on one question that I still find myself asking, how does it work? This was the one question that started the passion I call my career. After years in the industry, and having gone through multiple opportunities, some good, and some bad, I finally left my full-time job to venture on my own. It was March of 2016 which was my first day working for myself as a Squarespace developer. So, here I am years later still doing the same damn thing, and still loving it. Now (as of 2022) I’m finding myself venturing down new paths and pushing some new focus areas such as helping people build personal brands. Ever since I created my own personal brand back in 2016, I realized that I’ve learned a lot and am able to help teach people what I’ve learned over the years about what worked and what didn’t for me. If you want to know more about why I started a personal brand, you can </p>
                    </div>
                </section>
                <section className='story_section_six'>
                    <div>
                        <img src={image1} className='story_section_six_image1'/>
                        <h1>The Mom.</h1>
                    </div>
                    <div>
                        <img src={image2} className='story_section_six_image2'/>
                        <h1>The Church</h1>
                    </div>
                    <div>
                        <img src={image3} className='story_section_six_image1'/>
                        <h1>The Obsession.</h1>
                    </div>
                    <div>
                        <img src={image4} className='story_section_six_image2'/>
                        <h1>The Focus.</h1>
                    </div>
                </section>
                <section className='story_section_three'>
                    <h3>MY STORY CONTINUES, BUT OFF THE WEB</h3>
                    <h1>I’m a husband, father, coffee enthusiast, cat person, gamer, and Squarespace developer.</h1>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Story;