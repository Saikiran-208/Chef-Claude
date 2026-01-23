import { motion } from "framer-motion"

const IngredientsList = (props) => {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <motion.li
            key={ingredient}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white px-5 py-3 rounded-[2rem] flex items-center gap-3 font-medium shadow-soft border border-black/3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-orange"></span>
            {ingredient}
            <button
                onClick={() => props.removeIngredient(ingredient)}
                className="border-none bg-[#f0f0f0] text-[#636e72] cursor-pointer text-base w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[#ffe5e5] hover:text-[#d63031]"
                aria-label={`Remove ${ingredient}`}
            >
                ×
            </button>
        </motion.li>
    ))
    return (
        <section className="mb-10">
            {props.ingredients.length === 0 ? (
                <div className="mb-8">
                    <div className="mb-6">
                        <h2 className="text-[1.75rem] font-extrabold mb-2 text-[#1a1a1a] font-display">Start your recipe</h2>
                        <p className="text-text-muted">Add at least 3 ingredients to generate a recipe</p>
                    </div>
                    <div className="text-center py-16 px-8 border-3 border-dashed border-black/6 rounded-[1.5rem] bg-white/50 flex flex-col items-center justify-center gap-4">
                        <span className="text-4xl">🧺</span>
                        <h4 className="text-[1.2rem] font-semibold text-text-main">Pantry is empty</h4>
                        <p className="text-text-muted">Add some ingredients to get started!</p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-end mb-8">
                    <div className="mb-6">
                        <h2 className="text-[1.75rem] font-extrabold mb-2 text-[#1a1a1a] font-display">Your Pantry</h2>
                        <p className="text-text-muted">Ingredients ready for your next masterpiece</p>
                    </div>
                    <div className="bg-[#f24e1e1a] text-primary-orange px-4 py-2 rounded-[2rem] text-sm font-semibold flex items-center gap-2">
                        <span>📦</span>
                        {props.ingredients.length} {props.ingredients.length === 1 ? 'Item' : 'Items'}
                    </div>
                </div>
            )}

            <ul className="flex flex-wrap gap-4 list-none mb-10" aria-live="polite">
                {ingredientsListItems}
            </ul>

            {props.ingredients.length >= 3 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-center"
                >
                    <div ref={props.ref} className="bg-[#1f1f1f] rounded-[2rem] p-10 flex flex-col sm:flex-row justify-between items-center text-left text-white mt-12 bg-gradient-to-br from-[#1f1f1f] to-[#111111] shadow-[0_15px_30px_rgba(0,0,0,0.25)] gap-8 w-full">
                        <div className="flex-1">
                            <h3 className="text-2xl mb-2 font-bold font-display">Ready for a culinary masterpiece?</h3>
                            <p className="opacity-80 text-base leading-relaxed max-w-[400px] m-0">Chef Claude is ready to whip up a custom recipe using your ingredients.</p>
                        </div>
                        <button
                            className="bg-primary-orange text-white border-none py-4 px-8 rounded-[2rem] font-bold cursor-pointer transition-all duration-200 shadow-[0_5px_15px_rgba(242,78,30,0.3)] text-[1.1rem] whitespace-nowrap font-display hover:bg-primary-orange-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(242,78,30,0.4)] w-full sm:w-auto"
                            onClick={props.getRecipe}
                        >
                            Generate Recipe &rarr;
                        </button>
                    </div>
                </motion.div>
            )}
        </section>
    )
}

export default IngredientsList
