import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules' // Add Autoplay import
import 'swiper/css'
import 'swiper/css/navigation'
import popularPizza1 from '../assets/img/popular-1.png'
import popularPizza2 from '../assets/img/popular-2.png'
import popularPizza3 from '../assets/img/popular-3.png'
import pizzaBoard from '../assets/img/popular-dish.png'

const pizzaInfo = [
  { name: 'Marghareta', img: popularPizza1 },
  { name: 'Pepperoni', img: popularPizza2 },
  { name: 'Mushroom', img: popularPizza3 },
]

const Popular = () => {
  return (
    <section id='popular' className='py-10 bg-bg-primary'>
      <div className="max-w-5xl mx-auto">
        <p className="section-title text-center">
          Discover <br />Popular Orders
        </p>
        <p className="max-w-2xl mx-auto sub-text text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          praesentium nostrum commodi obcaecati sequi. Nemo delectus culpa
          obcaecati quod facilis.
        </p>
        <div className="relative mt-10 flex justify-center">
          <Swiper
            modules={[Navigation, Autoplay]} // Add Autoplay to modules
            centeredSlides='auto'
            loop={true}
            slidesPerView='auto'
            grabCursor={true}
            autoplay={{
              delay: 1500, // 3 seconds between slides
              disableOnInteraction: false, // Continue autoplay after user interaction
              pauseOnMouseEnter: true, // Pause on hover
            }}
          >
            {pizzaInfo.map(pizza => (
              <SwiperSlide key={pizza.name}>
                {({ isActive }) => (
                  <>
                    <img src={pizza.img} alt={pizza.name} className={`${isActive ? 'rotate-0 scale-100' : 'rotate-360 scale-60'} transition-transform duration-500 w-[220px] mx-auto`} />
                    <p className="text-center text-primary text-xl font-bold italic mt-5">{pizza.name} Pizza</p>
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute -top-5">
            <img src={pizzaBoard} alt="Pizza Board" className='w-[250px] mx-auto' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular