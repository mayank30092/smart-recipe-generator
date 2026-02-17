import { motion, AnimatePresence } from "framer-motion";
import RecipeCard from "../components/RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div className="flex-1 p-8">
      {/* Empty State */}
      {recipes.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <p className="text-xl font-semibold">No recipes found</p>
          <p className="text-sm mt-2">Try different ingredients or filters.</p>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <RecipeCard recipe={recipe} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

export default RecipeList;
