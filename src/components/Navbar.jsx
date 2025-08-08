import { RiCloseFill, RiMenuFill } from '@remixicon/react'
import logo from '../assets/img/logo-pizza.svg'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#home', name: 'Home' },
  { href: '#about', name: 'About Us' },
  { href: '#popular', name: 'Popular' },
  { href: '#ingredients', name: 'Ingredients' },
  { href: '#products', name: 'Products' },
  { href: '#contact', name: 'Contact' },
]

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // triggers when section is around middle
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navLinks.forEach(item => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  function handleOpenNav() {
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
              <a key={link.href} href={link.href} className={`${activeSection == link.href ? 'text-primary' : 'text-black'} font-semibold text-2xl`} onClick={handleOpenNav}>{link.name}</a>
            ))}
            <div className="span cursor-pointer absolute top-5 right-5" onClick={handleOpenNav}>
              <RiCloseFill size={30} />
            </div>
          </div>

          {/* nav links for lg and above devices */}
          <div className="hidden font-semibold lg:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={`${activeSection == link.href ? 'text-primary' : 'text-black'}`}>{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar