import contactImg from '../assets/img/contact-img.webp'
import sticker1 from '../assets/img/sticker-tomato.svg'
import sticker2 from '../assets/img/sticker-onion.svg'
import sticker3 from '../assets/img/sticker-mushroom.svg'
import { RiMapPinFill, RiMessengerFill, RiSendPlaneFill, RiWhatsappFill } from '@remixicon/react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = () => {

    useGSAP(() => {
        gsap.from('#contact-data', {
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 80%',
            },
            x: -50,
            opacity: 0,
            delay: .3,
            duration: 1
        })

        gsap.from('#contact-img', {
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 80%',
            },
            x: 50,
            opacity: 0,
            delay: .3,
            duration: 1
        })
    }, [])
    return (
        <section id='contact' className='py-10 bg-bg-primary'>
            <div className="custom-container">

                <div className="flex flex-col items-center justify-center gap-5 py-10 rounded-4xl bg-amber-950 lg:flex-row">
                    {/* contact img */}
                    <div id='contact-img' className="relative lg:w-1/2">
                        <img src={contactImg} alt="contact image" className='w-50 mx-auto sm:w-60 lg:w-80'/>

                        <img src={sticker1} alt="sticker 1" className='w-10 absolute top-0 lg:left-15 lg:w-15' />
                        <img src={sticker2} alt="sticker 2" className='w-10 absolute -bottom-10 -right-8 lg:bottom-0 lg:left-30 lg:w-15' />
                    </div>

                    {/* Contact Data */}
                    <div id='contact-data' className="relative text-white lg:w-1/2">
                        <p className="section-title text-center lg:text-start">
                            Contact Now
                        </p>

                        <div className="mt-5 grid grid-cols-1 gap-5 lg:mt-15 lg:grid-cols-2">

                            <div>
                                <p className="text-center font-bold text-lg lg:text-start">Write Us</p>
                                <div className="mt-3 flex justify-center gap-3 lg:justify-start">
                                    <a href="#whatsapp" className='text-primary'>
                                        <RiWhatsappFill/>
                                    </a>
                                    <a href="#messenger" className='text-primary'>
                                        <RiMessengerFill />
                                    </a>
                                    <a href="#send" className='text-primary'>
                                        <RiSendPlaneFill />
                                    </a>
                                </div>
                            </div>

                            <div>
                                <p className="text-center font-bold text-lg lg:text-start">Delivery</p>
                                <div className="mt-3 text-center lg:text-start">
                                    <p className="text-sm">+63873928278</p>
                                    <p className="text-sm">+24568072465</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-center font-bold text-lg lg:text-start">Location</p>
                                <div className="mt-3 text-center lg:text-start">
                                    <p className="text-sm">President Quirino, Philippines</p>
                                    <a href="#map" className='text-primary inline-flex items-center'>
                                        <RiMapPinFill/> View on map
                                    </a>
                                </div>
                            </div>
                        </div>

                        <img src={sticker3} alt="sticker 3" className='w-10 absolute top-30 lg:right-20 lg:top-10 lg:w-20' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact