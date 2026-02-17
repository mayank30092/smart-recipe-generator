import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch && onSearch(value);
  };

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleImageCapture = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/detect-ingredients`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageBase64: reader.result }),
          },
        );

        const data = await response.json();

        if (data.ingredients) {
          const ingredientNames = data.ingredients
            .map((item) => item.name)
            .join(", ");

          setSearchValue(ingredientNames);
          onSearch && onSearch(ingredientNames);
        }
      } catch (error) {
        console.error("Camera detection error:", error);
      }

      setLoading(false);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        {/*Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-3xl md:text-4xl font-extrabold cursor-pointer tracking-tight"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Yummi
          </span>
          <span className="text-gray-800">fy</span>
        </h1>

        {/* Search + Camera */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="relative w-full flex items-center">
            <input
              type="text"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search by ingredients (e.g. tomato, cheese)"
              className="w-full border border-gray-200 bg-gray-50 rounded-full pl-5 pr-20 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition"
            />

            {/* Search Icon */}
            <span className="absolute right-14 text-gray-400">🔍</span>

            {/* Camera Button */}
            <button
              onClick={handleCameraClick}
              className="absolute right-4 text-xl hover:scale-110 transition"
            >
              📷
            </button>

            {/* Hidden File Input (Camera Access) */}
            <input
              type="file"
              accept="image/*"
              capture="environment"
              ref={fileInputRef}
              onChange={handleImageCapture}
              className="hidden"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/favourites")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            🤍 Favourites
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            placeholder="Search recipes..."
            className="w-full border border-gray-200 bg-gray-50 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            onClick={handleCameraClick}
            className="absolute right-3 text-xl"
          >
            📷
          </button>
        </div>
      </div>

      {loading && (
        <div className="text-center py-2 text-red-500 text-sm">
          Detecting ingredients...
        </div>
      )}
    </div>
  );
}

export default Navbar;
