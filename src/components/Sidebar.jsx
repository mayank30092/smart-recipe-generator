function Sidebar({ filters, setFilters }) {
  const toggleType = (type) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type === type ? "" : type,
    }));
  };

  const toggleTime = () => {
    setFilters((prev) => ({
      ...prev,
      maxTime: prev.maxTime ? null : 30,
    }));
  };

  const setRatingFilter = (value) => {
    setFilters((prev) => ({
      ...prev,
      minRating: prev.minRating === value ? null : value,
    }));
  };

  const toggleGlutenFree = () => {
    setFilters((prev) => ({
      ...prev,
      glutenFree: !prev.glutenFree,
    }));
  };

  const handleSort = (value) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      maxTime: null,
      minRating: null,
      sortBy: "",
      glutenFree: false,
    });
  };

  const chipStyle = (active) =>
    `px-3 py-1.5 text-sm rounded-full transition ${
      active
        ? "bg-red-500 text-white shadow"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-72 bg-white rounded-xl shadow-md p-4 border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Filters</h2>

        <button
          onClick={clearFilters}
          className="text-xs text-red-500 hover:underline"
        >
          Clear
        </button>
      </div>

      <div className="space-y-5">
        {/* Type */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Type</p>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => toggleType("veg")}
              className={chipStyle(filters.type === "veg")}
            >
              Veg
            </button>
            <button
              onClick={() => toggleType("non-veg")}
              className={chipStyle(filters.type === "non-veg")}
            >
              Non-Veg
            </button>
          </div>
        </div>

        {/* Time */}
        <div>
          <button onClick={toggleTime} className={chipStyle(filters.maxTime)}>
            Under 30 mins
          </button>
        </div>

        {/* Gluten Free */}
        <div>
          <button
            onClick={toggleGlutenFree}
            className={chipStyle(filters.glutenFree)}
          >
            Gluten Free
          </button>
        </div>

        {/* Rating */}
        <div>
          <p className="text-sm font-medium text-gray-600 mb-2">Rating</p>
          <div className="flex gap-2 flex-wrap">
            {[4.5, 4, 3].map((r) => (
              <button
                key={r}
                onClick={() => setRatingFilter(r)}
                className={chipStyle(filters.minRating === r)}
              >
                ⭐ {r}+
              </button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div>
          <select
            value={filters.sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="w-full border border-gray-200 text-sm p-2 rounded-lg focus:ring-2 focus:ring-red-400"
          >
            <option value="">Sort</option>
            <option value="rating">Highest Rated</option>
            <option value="time">Fastest</option>
            <option value="match">Best Match</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
