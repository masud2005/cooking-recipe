import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({wantToCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    return (
        <div className="w-4/6 container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    recipes.map((recipe) =>
                        <div key={recipe.recipe_id} className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={recipe.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl md:text-2xl font-bold">{recipe.recipe_name}</h2>
                                <p className="text-gray-500">{recipe.short_description}</p>
                                <hr className="mt-2" />
                                <h3 className="font-bold text-lg">Ingredients: {recipe.ingredients.length}</h3>
                                {
                                    recipe.ingredients.map(ingredients =>
                                        <ul className="list-disc ml-7 text-gray-500 leading-3 md:leading-5">
                                            <li>{ingredients}</li>
                                        </ul>
                                    )
                                }
                                <hr className="mt-2" />
                                <div className="flex gap-5 my-2">
                                    <div className="flex gap-2 items-center">
                                        <i className="fa-regular fa-clock"></i>
                                        <p>{recipe.preparing_time} minutes</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <i className="fa-solid fa-fire-flame-curved"></i>
                                        <p>{recipe.calories} calories</p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button onClick={() => wantToCook(recipe)} className="btn bg-green-500 rounded-full px-8 text-base md:text-lg font-bold">Want to Cook</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Recipes;