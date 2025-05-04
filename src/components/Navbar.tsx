
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-vizag-navy">
          Way 2 Go
        </Link>
        
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-vizag-blue font-medium">
            Home
          </Link>
          <Link to="/plan-journey" className="text-gray-700 hover:text-vizag-blue font-medium">
            Plan Journey
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-vizag-blue font-medium">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
