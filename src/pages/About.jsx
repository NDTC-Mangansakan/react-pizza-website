import { useGSAP } from '@gsap/react'
import aboutImg from '../assets/img/about-img.png'
import gsap from 'gsap'

const About = () => {

    useGSAP(() => {
        gsap.from('#about-data', {
            scrollTrigger:{
                trigger: '#about',
                start: 'top 80%'
            },
            x: -50,
            opacity:0,
            delay: .3,
            duration: 1
        })

        gsap.from('#about-img', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
            },
            x: 50,
            opacity: 0,
            delay: .3,
            duration: 1
        })
    }, [])
    return (
        <section id='about' className='bg-bg-secondary py-10'>
            <div className="custom-container">
                <div className="flex flex-col gap-5 items-center justify-center lg:gap-0 lg:flex-row-reverse">
                    {/* About data */}
                    <div id='about-data' className="text-center lg:text-start lg:w-1/2">
                        <p className="section-title">
                            Learn More About <br />Our History
                        </p>
                        <p className="sub-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis modi rem voluptate dignissimos et placeat minima, ratione quasi quae est doloremque ab illo aperiam. Dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, esse?
                        </p>
                        <div className="flex justify-center lg:justify-start">
                            <a href="#" className="btn mt-8">The Best Pizzas</a>
                        </div>
                    </div>

                    {/* About img */}
                    <div id='about-img' className="lg:w-1/2">
                        <img src={aboutImg} alt="About img" className='mx-auto w-55 sm:w-70 lg:w-100' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About