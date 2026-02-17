import { useEffect, useState } from "react";
import { defaultRecipes } from "../data/recipes";
import { ingredientSubstitutes } from "../utils/ingredientSubstitutes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RecipeList from "../components/RecipeList";
import Footer from "../components/Footer";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [filters, setFilters] = useState({
    type: "",
    maxTime: null,
    minRating: null,
    sortBy: "",
    glutenFree: false,
  });

  // Load Recipes
  useEffect(() => {
    const stored = localStorage.getItem("recipes");

    if (!stored) {
      localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
      setRecipes(defaultRecipes);
      setFilteredRecipes(defaultRecipes);
    } else {
      const parsed = JSON.parse(stored);
      setRecipes(parsed);
      setFilteredRecipes(parsed);
    }
  }, []);

  // Main Filtering Logic
  useEffect(() => {
    if (!recipes.length) return;

    let results = recipes.map((recipe) => {
      const storedReviews =
        JSON.parse(localStorage.getItem(`reviews_${recipe.id}`)) || [];

      let avgRating = recipe.rating ?? 0;

      if (storedReviews.length > 0) {
        avgRating =
          storedReviews.reduce((acc, curr) => acc + curr.rating, 0) /
          storedReviews.length;
      }

      return { ...recipe, avgRating };
    });

    // SEARCH + SUBSTITUTE LOGIC
    if (searchValue.trim()) {
      const userIngredients = searchValue
        .toLowerCase()
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean);

      results = results.map((recipe) => {
        const recipeKeys =
          recipe.ingredients?.map((ing) => ing.key.toLowerCase()) || [];

        const matched = [];
        const substituted = [];
        const missing = [];

        userIngredients.forEach((userIng) => {
          if (recipeKeys.includes(userIng)) {
            matched.push(userIng);
          } else {
            // Check substitute mapping
            const substituteMatch = Object.entries(ingredientSubstitutes).find(
              ([main, subs]) => {
                return (
                  recipeKeys.includes(main.toLowerCase()) &&
                  subs.map((s) => s.toLowerCase()).includes(userIng)
                );
              },
            );

            if (substituteMatch) {
              substituted.push(userIng);
            } else {
              missing.push(userIng);
            }
          }
        });

        // Match scoring (substitute = 70% weight)
        const weightedMatch = matched.length + substituted.length * 0.7;

        const matchPercentage =
          userIngredients.length > 0
            ? Math.round((weightedMatch / userIngredients.length) * 100)
            : 0;

        return {
          ...recipe,
          matchCount: matched.length,
          substitutedCount: substituted.length,
          missingIngredients: missing,
          matchPercentage,
          weightedMatch,
        };
      });

      results = results
        .filter((r) => r.weightedMatch > 0)
        .sort((a, b) => b.weightedMatch - a.weightedMatch);
    }

    //  TYPE
    if (filters.type) {
      results = results.filter((r) => r.type === filters.type);
    }

    // TIME
    if (filters.maxTime) {
      results = results.filter((r) => r.time <= filters.maxTime);
    }

    // RATING
    if (filters.minRating) {
      results = results.filter((r) => r.avgRating >= filters.minRating);
    }

    //GLUTEN FREE
    if (filters.glutenFree) {
      results = results.filter((r) => r.glutenFree);
    }

    // SORTING
    if (filters.sortBy === "rating") {
      results.sort((a, b) => b.avgRating - a.avgRating);
    }

    if (filters.sortBy === "time") {
      results.sort((a, b) => a.time - b.time);
    }

    if (filters.sortBy === "match") {
      results.sort(
        (a, b) => (b.matchPercentage || 0) - (a.matchPercentage || 0),
      );
    }

    setFilteredRecipes(results);
  }, [recipes, searchValue, filters]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar onSearch={setSearchValue} />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero */}
        <div className="py-8 md:py-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Discover Delicious Recipes 🍽
          </h1>
          <p className="text-gray-500 mt-3 text-base md:text-lg">
            Smart cooking made simple.
          </p>
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="w-full bg-red-500 text-white py-3 rounded-xl font-medium shadow-md hover:bg-red-600 transition"
          >
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="hidden md:block w-72 flex-shrink-0">
            <div className="sticky top-24">
              <Sidebar filters={filters} setFilters={setFilters} />
            </div>
          </div>

          {/* Recipes */}
          <div className="flex-1">
            {filteredRecipes.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                <h2 className="text-2xl font-semibold text-gray-700">
                  No Recipes Found 😢
                </h2>
                <p className="text-gray-500 mt-2">
                  Try adjusting filters or search terms.
                </p>
              </div>
            ) : (
              <RecipeList recipes={filteredRecipes} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="w-80 bg-white h-full p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-500 text-xl"
              >
                ✕
              </button>
            </div>

            <Sidebar filters={filters} setFilters={setFilters} />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
