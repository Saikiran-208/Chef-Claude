import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../../server/ai";

const Main = () => {
    const [ingredients, setingredients] = useState([])
    const [recipe, setRecipe] = useState("")

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient")
        setingredients(prev => [...prev, newIngredient])
    }

    const getRecipe = async () => {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown)

    }

    return (
        <main className="flex flex-col gap-6 justify-center items-center">
            <div className="flex flex-col   justify-center items-center">

                <form
                    action={addIngredient}
                    className='flex justify-center items-center max-sm:flex-col gap-5 px-2 py-2 '
                >
                    <input
                        className=' flex-1 bg-white text-gray-400  px-3 py-1.5 rounded-md border border-gray-300 shadow max-w-sm min-w-xs'
                        type="text"
                        placeholder='e.g. oregano'
                        aria-label='Add ingredients'
                        name='ingredient'
                    />
                    <button
                        className=' flex-1 border-none rounded-md px-2 py-2 text-sm text-white bg-black max-sm:min-w-xs max-w-50 '
                    >+ Add ingredient</button>

                </form>
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            </div>
            <div>
                {
                    recipe &&
                    <ClaudeRecipe recipe={recipe} />
                }
            </div>

        </main>
    )
}

export default Main
