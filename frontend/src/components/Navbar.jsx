
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full bg-journal border-b border-beige">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Website Logo */}
        <Link to="/" className="font-heading text-2xl font-bold text-charcoal">
          The Martha Journal.
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-taupe hover:text-charcoal transition">
            Home
          </Link>

          <Link to="/journal" className="text-taupe hover:text-charcoal transition">
            Journal
          </Link>

          <Link to="/about" className="text-taupe hover:text-charcoal transition">
            About
          </Link>
        </div>

        {/* Call to Action */}
        <Link
          to="/journal"
          className="bg-charcoal text-journal px-5 py-2.5 rounded-full text-sm hover:bg-brown transition"
        >
          Read Stories
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
