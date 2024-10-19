export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 text-brown-700">
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="/" className="hover:text-brown-600 transition-colors">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-brown-600 transition-colors">About</a>
        </li>
        <li>
          <a href="/contact" className="hover:text-brown-600 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
