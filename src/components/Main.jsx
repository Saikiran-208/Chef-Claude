import { useState, useRef, useEffect } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import NutritionWidget from "./NutritionWidget";
import SidebarWidget from "./SidebarWidget";
import LoadingSpinner from "./LoadingSpinner";
import { getRecipeFromChefClaude } from "../../server/ai";

const Main = () => {
    const [ingredients, setingredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const recpieSection = useRef()
    const loadingSection = useRef()

    useEffect(() => {
        if (recipe) {
            recpieSection.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])

    useEffect(() => {
        if (isLoading && loadingSection.current) {
            loadingSection.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [isLoading])

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient")
        if (newIngredient) {
            setingredients(prev => [...prev, newIngredient])
        }
    }

    const removeIngredient = (ingredientToRemove) => {
        setingredients(prev => prev.filter(ing => ing !== ingredientToRemove))
    }

    const getRecipe = async () => {
        setIsLoading(true)
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error('Error getting recipe:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const flavorPairings = [
        { name: "Tomato & Basil", desc: "The classic Mediterranean duo for pasta and salads." },
        { name: "Lemon & Garlic", desc: "Perfect for roasting chicken or sautéing greens." },
        { name: "Miso & Ginger", desc: "Creates a deep, savory umami base for soups and glazes." },
        { name: "Honey & Soy", desc: "The ultimate balance of sweet and salty for stir-fries." }
    ]

    return (

        <main className="py-10 px-6 max-w-[1400px] mx-auto">
            <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Left Sidebar - Nutrition Tracker */}
                <aside className="lg:w-72">
                    <NutritionWidget ingredients={ingredients} />
                </aside>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    <form action={addIngredient} className="bg-white p-2 pr-2.5 rounded-[3rem] flex items-center gap-2 shadow-soft mt-4 mb-10 border border-black/2">
                        <div className="relative flex-1 flex items-center">
                            <span className="absolute left-5 text-xl pointer-events-none">🥗</span>
                            <input
                                type="text"
                                placeholder="What do we have in the pantry?"
                                aria-label="Add ingredients"
                                name="ingredient"
                                className="w-full py-4 px-4 pl-12 border-none bg-transparent text-base text-text-main outline-none focus:outline-none font-body"
                            />
                        </div>
                        <button
                            className="bg-primary-orange text-white border-none py-3.5 px-8 rounded-[2rem] font-bold cursor-pointer transition-all duration-200 shadow-[0_5px_15px_rgba(242,78,30,0.2)] text-base whitespace-nowrap font-display hover:bg-primary-orange-hover hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(242,78,30,0.3)]"
                            type="submit"
                        >
                            <span className="text-xl font-bold">+</span> Add Item
                        </button>
                    </form>

                    <IngredientsList
                        ingredients={ingredients}
                        getRecipe={getRecipe}
                        removeIngredient={removeIngredient}
                    />

                    {isLoading && (
                        <div ref={loadingSection}>
                            <LoadingSpinner />
                        </div>
                    )}

                    {recipe && (
                        <div ref={recpieSection} className="mt-10">
                            <ClaudeRecipe recipe={recipe} />
                        </div>
                    )}
                </div>

                {/* Right Sidebar - Flavor Pairings */}
                <aside className="lg:w-72 flex-shrink-0">
                    <SidebarWidget
                        title="Flavor Pairings"
                        items={flavorPairings}
                        icon="✨"
                        side="right"
                    />
                </aside>
            </div>
        </main>
    )
}

export default Main
