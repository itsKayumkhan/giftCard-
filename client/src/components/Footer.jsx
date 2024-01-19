import React from 'react';
import { Link } from 'react-router-dom';

// Helper component for navigation links
const NavLink = ({ href, label }) => (
  <li>
    <Link to={href} className="text-white transition hover:text-white/75">
      {label}
    </Link>
  </li>
);

// Helper component for social icons
const SocialIcon = ({ href, iconClass, label, iconColor }) => (
  <li key={label} className={`w-12 h-12 center z-10 `}>
    <Link to={href} rel="noreferrer" target="_blank" className={`hover:bg-${iconColor}-600 w-full h-full rounded-full bg-white center`}>
      {/* <span className="sr-only">{label}</span> */}
      <i className={`fa-brands scale-150 ${iconClass}`}></i>
    </Link>
  </li>
);

// Footer component
const Footer = () => {
  // Array for navigation links
  const navigationLinks = [
    { href: '/', label: 'Product' },
    { href: '/orders', label: 'Orders' },
   
  ];

  // Array for social icons
  const socialIcons = [
    { href: '/', iconClass: 'fa-facebook', label: 'Facebook', iconColor: 'blue' },
    { href: '/', iconClass: 'fa-instagram', label: 'Instagram', iconColor: 'pink' },
    { href: '/', iconClass: 'fa-twitter', label: 'Twitter', iconColor: 'sky' },
    { href: '/', iconClass: 'fa-github', label: 'GitHub', iconColor: 'gray' },
  ];

  return (
    <>
      <footer className="mt-10 bg-pink-600">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-white">
            <h1>E-commerce</h1>
          </div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
            itaque neque.
          </p>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {/* Navigation Links */}
            {navigationLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </ul>
          <ul className="mt-12 flex justify-center gap-6 md:gap-8 ">
            {/* Social Icons */}
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.label} {...icon} />
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
