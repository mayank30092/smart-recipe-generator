import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState("");

  // Load Recipe + Reviews
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];

    const foundRecipe = storedRecipes.find((item) => item.id === Number(id));

    setRecipe(foundRecipe);

    const storedReviews =
      JSON.parse(localStorage.getItem(`reviews_${id}`)) || [];

    setReviews(storedReviews);
  }, [id]);

  // Show loading safely
  if (!recipe) {
    return <div className="p-8">Loading...</div>;
  }

  // Safe Average Rating Calculation
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
        ).toFixed(1)
      : (recipe.rating ?? 0);

  // Submit Review
  const submitReview = () => {
    if (!userRating || !comment.trim()) return;

    const newReview = {
      rating: userRating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    localStorage.setItem(`reviews_${id}`, JSON.stringify(updatedReviews));

    setUserRating(0);
    setComment("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      {/* HERO SECTION */}
      <div className="relative h-[350px] w-full">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-6 left-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
          <p className="text-lg opacity-90">
            {recipe.cuisine} • {recipe.time} mins • {recipe.difficulty}
          </p>
        </div>

        {/* Dynamic Rating */}
        <div className="absolute top-6 right-8 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-lg font-semibold">
          ⭐ {averageRating}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-8 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition"
        >
          ← Back
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">
          {/* Ingredients */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recipe.ingredients.map((ing, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b pb-2 text-gray-700"
                >
                  <span>{ing.name}</span>
                  <span className="font-medium">{ing.quantity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Cooking Steps</h2>

            <div className="space-y-4">
              {recipe.steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FEEDBACK SECTION */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Leave Feedback</h2>

            {/* Star Rating */}
            <div className="flex gap-2 text-2xl mb-4 cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setUserRating(star)}
                  className={
                    star <= userRating ? "text-yellow-400" : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            {/* Comment */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience..."
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />

            <button
              onClick={submitReview}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded-xl hover:bg-red-600 transition"
            >
              Submit Review
            </button>
          </div>

          {/* Display Reviews */}
          {reviews.length > 0 && (
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold text-gray-800">
                  ⭐ {averageRating} / 5
                </div>
                <div className="text-sm text-gray-500">
                  {reviews.length} reviews
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-6">User Reviews</h2>

              <div className="space-y-4">
                {reviews.map((rev, index) => (
                  <div key={index} className="border-b pb-4 text-gray-700">
                    <div className="text-yellow-400 text-sm">
                      {"★".repeat(rev.rating)}
                      <span className="text-gray-300">
                        {"★".repeat(5 - rev.rating)}
                      </span>
                    </div>

                    <p className="mt-2">{rev.comment}</p>
                    <p className="text-xs text-gray-400 mt-1">{rev.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Nutrition</h2>
            <div className="space-y-2 text-gray-700">
              <p>Calories: {recipe.nutrition.calories}</p>
              <p>Protein: {recipe.nutrition.protein}</p>
              <p>Carbs: {recipe.nutrition.carbs}</p>
              <p>Fats: {recipe.nutrition.fats}</p>
            </div>
          </div>

          {recipe.youtubeUrl && (
            <a
              href={recipe.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
            >
              ▶ Watch on YouTube
            </a>
          )}

          <div className="bg-white p-6 rounded-2xl shadow-md text-gray-700 space-y-2">
            <p>Servings: {recipe.servings}</p>
            <p>Yield: {recipe.yield}</p>
            <p>Gluten Free: {recipe.glutenFree ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RecipeDetail;
