import { RiCopyrightLine, RiFacebookCircleFill, RiInstagramFill, RiTwitterXFill } from '@remixicon/react'
import card1 from '../assets/img/footer-card-1.png'
import card2 from '../assets/img/footer-card-2.png'
import card3 from '../assets/img/footer-card-3.png'
import card4 from '../assets/img/footer-card-4.png'

const Footer = () => {
  return (
    <footer className='py-10 bg-bg-primary'>
      <div className="custom-container">
        <p className="section-title text-primary text-center">Pizza</p>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="text-lg text-center font-bold">Social</p>
            <div className="mt-3 flex justify-center gap-3">
              <a href="#facebook" className='text-primary'><RiFacebookCircleFill /></a>
              <a href="#facebook" className='text-primary'><RiInstagramFill /></a>
              <a href="#facebook" className='text-primary'><RiTwitterXFill /></a>
            </div>
          </div>

          <div>
            <p className="text-lg text-center font-bold">Subscribe for Discounts</p>
            <div className="relative mt-3 flex flex-col items-center gap-2">
              <input type="email" placeholder='Email' className='px-5 py-3 bg-bg-secondary rounded-2xl w-[250px] outline-none lg:w-[300px]' />
              <a href="#subscribe" className='btn'>Subscribe</a>
            </div>
          </div>
            
          <div>
            <p className="text-lg text-center font-bold">Payment Methods</p>
            <div className="mt-3 flex justify-center gap-3">
              <img src={card1} alt="card 1" className='w-13' />
              <img src={card2} alt="card 2" className='w-13' />
              <img src={card3} alt="card 3" className='w-13' />
              <img src={card4} alt="card 4" className='w-13' />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-15 text-sm flex justify-center items-center gap-1 text-gray-600">
        <RiCopyrightLine size={15}/> All Rights Reserved by Ishaq Mangansakan
      </p>
    </footer>
  )
}

export default Footer