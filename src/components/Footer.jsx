import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t mt-16">
      <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Yummify
          </h2>
          <p className="text-gray-500">
            Smart cooking made simple. Discover recipes with what you already
            have.
          </p>
        </div>

        {/*Quick links*/}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">Quick Links</h3>
          <div className="space-y-2 text-gray-500">
            <button
              onClick={() => navigate("/")}
              className="block hover:text-red-500 transition"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/favourites")}
              className="block hover:text-red-500 transition"
            >
              Favourites
            </button>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-800">About</h3>
          <p className="text-gray-500">Built with ❤️ Yummify.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Yummify. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
