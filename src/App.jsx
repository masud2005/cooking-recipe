import { useState } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar";
import OurRecipes from "./components/OurRecipes";
import Footer from "./components/Footer";


function App() {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0)

  const wantToCook = (recipe) => {
    // console.log(recipe)
    const isExist = recipeQueue.find(previousRecipe =>
      previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }
    else (
      alert("Recipe already exists in the queue.")
    )
  }
  // console.log(recipeQueue);

  const handleRemoveRecipe = id => {
    // Find which recipe to remove
    const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id);
    // Remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id);
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  }

  const calculateTimeAndCalories = (time, calories) => {
    console.log(typeof(time), calories)
    console.log(typeof(totalTime))
    setTotalTime(totalTime + time);
    setTotalCalories(totalCalories + calories);
  }

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Banner Section */}
      <Banner />

      {/* Our Recipes Section */}
      <OurRecipes />
      <div className="flex my-10 container mx-auto gap-3 md:gap-6 px-2">
        <Recipes wantToCook={wantToCook} />
        <Sidebar
          recipeQueue={recipeQueue}
          handleRemoveRecipe={handleRemoveRecipe}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalTime={totalTime}
          totalCalories={totalCalories}
        />
      </div>
      {/* Footer Section */}
      <Footer />
    </>
  )
}

export default App
