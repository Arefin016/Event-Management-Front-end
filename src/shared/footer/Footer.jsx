const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Event Management System. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="/"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/events"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Events
          </a>
          <a
            href="/about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
