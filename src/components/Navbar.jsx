import { RiCloseFill, RiMenuFill } from '@remixicon/react'
import logo from '../assets/img/logo-pizza.svg'
import { useState } from 'react'

const navLinks = [
  { href: '#home', name: 'Home' },
  { href: '#about', name: 'About Us' },
  { href: '#popular', name: 'Popular' },
  { href: '#products', name: 'Products' },
  { href: '#contact', name: 'contact' },
]

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)

  function handleOpenNav(){
    setOpenNav(prev => !prev)
  }
  return (
    <nav className='sticky top-0 right-0 left-0 h-[10vh] flex items-center bg-bg-primary z-99'>
      <div className="custom-container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className='w-8 -translate-x-1.5' />
            <p className="text-lg font-bold italic -translate-x-1">Pizza</p>
          </div>

          {/* Menu logo for md - sm devices */}
          <div className="span cursor-pointer lg:hidden" onClick={handleOpenNav}>
            <RiMenuFill />
          </div>

          {/* nav links for md - sm devices */}
          <div className={`bg-bg-secondary fixed top-0 right-0 h-[100vh] w-[250px] flex flex-col gap-10 pl-5 pt-20 transition-transform duration-300 ${openNav ? 'translate-x-0' : 'translate-x-[250px]'} lg:hidden`}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className='font-semibold text-2xl'>{link.name}</a>
            ))}
            <div className="span cursor-pointer absolute top-5 right-5" onClick={handleOpenNav}>
              <RiCloseFill size={30}/>
            </div>
          </div>

          {/* nav links for lg and above devices */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className=''>{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar