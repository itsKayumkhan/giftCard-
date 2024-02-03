import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Helper component for navigation links
const NavLink = ({ href, label }) => (
  <li>
    <Link to={href} className="text-white transition hover:text-white/75">
      {label}
    </Link>
  </li>
);

// Footer component
const Footer = () => {
  // Array for navigation links
  const navigationLinks = [
    { href: "/", label: "Product" },
    { href: "/orders", label: "Orders" },
  ];

  const { isAuthenticated } = useSelector((s) => s.user);

  return (
    <>
      <footer className="mt-10 bg-pink-600">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-white">
            <h1>Pink City gifts</h1>
          </div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white">
          Welcome to Love Gifting, your ultimate destination for heartfelt expressions and thoughtful surprises. We believe in the power of love to brighten lives and create lasting memories. Whether you're celebrating a special occasion or simply showing someone you care, our curated selection of gifts is designed to inspire joy and spread love. From romantic gestures to meaningful tokens of appreciation, we're here to help you make every moment unforgettable. Explore our collection today and let love be your guide
          </p>
          {isAuthenticated && (
            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              {/* Navigation Links */}
              {navigationLinks.map((link) => (
                <NavLink key={link.label} {...link} />
              ))}
            </ul>
          )}
        </div>
      </footer>
    </>
  );
};

export default Footer;
