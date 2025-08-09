import homeBoardImg from '../assets/img/home-board.png'
import homePizza from '../assets/img/home-pizza.png'

import homeTomato from '../assets/img/home-tomato.png'
import homeLeaf1 from '../assets/img/home-leaf-1.png'
import homeLeaf2 from '../assets/img/home-leaf-2.png'
import homeMushroom from '../assets/img/home-mushroom.png'
import homeOlive from '../assets/img/home-olive.png'
import homePepperoni from '../assets/img/home-pepperoni.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {

    useGSAP(() => {
        gsap.from('#home-data',{y: -50, opacity: 0, duration: .6, delay: .3})
        gsap.from('#home-board', { x: 50, opacity: 0, duration: 1, delay: .6 })
        gsap.from('#home-pizza', { y: 50,rotate: 90, opacity: 0, duration: 1, delay: .9 })
        gsap.from('.home-overlay', { y: -50, opacity: 0, duration: .3, delay: 1.2, stagger: .1 })
    }, [])


    return (
        <section id='home' className='pt-10 pb-15 sm:pt-0 min-h-[90vh] bg-bg-primary flex items-center'>
            <div className="custom-container flex flex-col gap-5 items-center justify-center lg:flex-row lg:gap-0">
                <div id='home-data' className="text-center lg:text-start lg:w-1/2">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic">
                        Crispy And <br />Delicious Pizza
                    </p>
                    <p className="sub-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit totam minima maiores accusamus distinctio alias eius excepturi quidem atque at!
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <a href="#" className='btn'>Order Pizza Now</a>
                    </div>
                </div>

                <div className="relative lg:w-1/2">
                    <img src={homeBoardImg} alt="Home board" id='home-board' className='mx-auto w-55 sm:w-70 lg:w-100' />

                    <img src={homePizza} alt="Home Pizza" id='home-pizza' className='w-53 absolute top-16 left-1 sm:w-69 sm:top-20 lg:w-98 lg:top-28 lg:left-13 xl:left-29' />

                    <img src={homeTomato} alt="Home tomato" className='home-overlay absolute w-12 top-15 sm:w-15 sm:top-20 lg:w-20 lg:top-35 lg:left-8 xl:left-23' />
                    <img src={homeLeaf1} alt="Home leaf 1" className='home-overlay absolute w-12 top-8 left-1/2 -translate-x-1/2 sm:w-15 sm:top-10 lg:w-20 lg:top-15' />
                    <img src={homePepperoni} alt="Home pepperoni" className='home-overlay absolute w-12 top-15 right-0 sm:w-15 sm:top-20 lg:w-20 lg:top-35 lg:right-8 xl:right-23' />

                    <img src={homeLeaf2} alt="Home leaf 2" className='home-overlay absolute w-12 bottom-5 sm:w-15 lg:w-20 lg:bottom-10 lg:left-10 xl:left-25' />
                    <img src={homeOlive} alt="Home olive" className='home-overlay absolute w-12 -bottom-3 left-1/2 -translate-x-1/2 sm:w-15 sm:-bottom-5 lg:w-20 lg:-bottom-10' />
                    <img src={homeMushroom} alt="Home mushroom" className='home-overlay absolute w-12 bottom-5 right-0 sm:w-15 lg:w-20 lg:bottom-10 lg:right-10 xl:right-25' />
                </div>
            </div>
        </section>
    )
}

export default Home