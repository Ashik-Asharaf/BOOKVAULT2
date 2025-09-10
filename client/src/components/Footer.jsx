import React from 'react'
import {Link} from 'react-router-dom'
import logoImg from '../assets/logo.png'

const Footer = () => {

  const linkSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Best Sellers' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: "Need Help?",
      links: [
        "Delivery Information",
        "Returns & Exchanges",
        "Privacy Policy",
        "Shipping Info",
        "FAQs"
      ]
    },
    {
      title: "Follow Us",
      links: [
        "Facebook", "Twitter", "Instagram", "Reddit"
      ]
    },
  ];


  return (
    <footer className='max-padd-container bg-gradient-to-l from-primary via-white to-primary'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-10  py-10 border-b border-gray-500/30'>
        <div>
          {/* Logo and Description */}
            <div>
              <Link to={"/"} className='bold-22 xl:bold-28 flex item-end gap-1'>
              <img src={logoImg} alt="" className='h-9' />
              <div className='relative top-1.5'>
                BookVaul<span className='text-secondary'>t.</span>
              </div>
              </Link>
            </div>
            <p className='max-w-[410px] mt-6'>
              Thank you for visiting BookVault, your gateway to endless stories and knowledge. Stay connected with us for updates, offers, and a world of books you’ll love.
            </p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
          {linkSections.map((section, index) => (
            <div key={index} className='min-w-[120px]'>
              <h3 className='bold-18 mb-4'>{section.title}</h3>
              <ul className='flex flex-col gap-3'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === 'object' ? (
                      <Link to={link.path || "#"} className='hover:underline transition'>
                        {link.name}
                      </Link>
                    ) : (
                      <a href="#" className='hover:underline transition'>
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className='text-center py-6 text-sm md:text-base text-gray-600'>
        © BookVault — All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer