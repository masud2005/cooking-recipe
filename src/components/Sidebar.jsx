
const Sidebar = ({ recipeQueue, handleRemoveRecipe, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
    return (
        <div className="w-2/6 border rounded-2xl">

            <div>
                <h1 className="text-center text-2xl font-bold py-4 border-b">Want to Cook: {recipeQueue.length}</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-base">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Colories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipeQueue.map((recipe, index) =>
                                <tr className="hover">
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories} calories</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                handleRemoveRecipe(recipe.recipe_id),
                                                    calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
                                            }}
                                            className="btn bg-green-500 rounded-full font-bold h-0 min-h-10">Preparing</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

            <div className="mt-10">
                <h1 className="text-center text-2xl font-bold py-4 border-b">Currently Cooking: {preparedRecipe.length}</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="text-base">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Colories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preparedRecipe.map((recipe, index) =>
                                <tr className="hover">
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time} minutes</td>
                                    <td>{recipe.calories} calories</td>
                                </tr>
                            )
                        }

                    </tbody>
                        <tr>
                            <th></th>
                            <td></td>
                            <td>Total Time = {totalTime} minutes</td>
                            <td>Total Calories = {totalCalories} calories</td>
                        </tr>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;