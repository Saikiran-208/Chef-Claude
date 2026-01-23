import { motion } from "framer-motion"
import { useMemo } from "react"

const nutritionDB = {
    "chicken": { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    "beef": { calories: 250, protein: 26, carbs: 0, fat: 17 },
    "fish": { calories: 206, protein: 22, carbs: 0, fat: 12 },
    "salmon": { calories: 208, protein: 20, carbs: 0, fat: 13 },
    "eggs": { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
    "tofu": { calories: 76, protein: 8, carbs: 1.9, fat: 4.8 },
    "rice": { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    "pasta": { calories: 131, protein: 5, carbs: 25, fat: 1.1 },
    "bread": { calories: 265, protein: 9, carbs: 49, fat: 3.2 },
    "potato": { calories: 77, protein: 2, carbs: 17, fat: 0.1 },
    "quinoa": { calories: 120, protein: 4.4, carbs: 21, fat: 1.9 },
    "broccoli": { calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
    "spinach": { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    "tomato": { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    "carrot": { calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
    "onion": { calories: 40, protein: 1.1, carbs: 9, font: 0.1 },
    "bell pepper": { calories: 31, protein: 1, carbs: 6, fat: 0.3 },
    "cheese": { calories: 402, protein: 25, carbs: 1.3, fat: 33 },
    "milk": { calories: 42, protein: 3.4, carbs: 5, fat: 1 },
    "yogurt": { calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
    "mozzarella": { calories: 280, protein: 28, carbs: 3, fat: 17 },
    "olive oil": { calories: 884, protein: 0, carbs: 0, fat: 100 },
    "butter": { calories: 717, protein: 0.9, carbs: 0.1, fat: 81 },
    "garlic": { calories: 149, protein: 6.4, carbs: 33, fat: 0.5 },
    "basil": { calories: 23, protein: 3.2, carbs: 2.7, fat: 0.6 },
}

const NutritionWidget = ({ ingredients }) => {
    const stats = useMemo(() => {
        let calories = 0, protein = 0, carbs = 0, fat = 0, matched = 0
        ingredients.forEach(i => {
            const norm = i.toLowerCase().trim()
            const key = Object.keys(nutritionDB).find(k => norm.includes(k) || k.includes(norm))
            if (key) {
                const n = nutritionDB[key]
                calories += n.calories; protein += n.protein; carbs += n.carbs; fat += n.fat || 0; matched++
            }
        })
        return { calories: Math.round(calories), protein: Math.round(protein), carbs: Math.round(carbs), fat: Math.round(fat), matched }
    }, [ingredients])

    const hasData = stats.matched > 0

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg backdrop-blur-[8px] rounded-lg p-6 shadow-soft border glass-border h-fit"
        >
            <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">🔥</span>
                <h3 className="text-lg font-semibold text-text-main">Nutrition Tracker</h3>
            </div>

            {hasData ? (
                <div className="flex flex-col gap-6">
                    <div className="text-center p-6 rounded-3xl bg-[#f8f9fa] border border-black/5">
                        <span className="block text-[2.5rem] font-extrabold text-text-main leading-none mb-1 font-display">{stats.calories}</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-text-muted">kcal Total</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="text-center py-3 px-2 rounded-2xl border bg-blue-50 border-blue-100 text-blue-600">
                            <span className="block text-base font-bold mb-0.5">{stats.protein}g</span>
                            <span className="text-[0.7rem] font-bold uppercase opacity-80">Pro</span>
                        </div>
                        <div className="text-center py-3 px-2 rounded-2xl border bg-orange-50 border-orange-100 text-orange-600">
                            <span className="block text-base font-bold mb-0.5">{stats.carbs}g</span>
                            <span className="text-[0.7rem] font-bold uppercase opacity-80">Carbs</span>
                        </div>
                        <div className="text-center py-3 px-2 rounded-2xl border bg-emerald-50 border-emerald-100 text-emerald-600">
                            <span className="block text-base font-bold mb-0.5">{stats.fat}g</span>
                            <span className="text-[0.7rem] font-bold uppercase opacity-80">Fat</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-8">
                    <div className="w-14 h-14 bg-[#fff8f5] rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <span className="text-2xl">📊</span>
                    </div>
                    <h4 className="text-[0.95rem] font-semibold mb-1">Add ingredients to track</h4>
                    <p className="text-[0.85rem] text-text-muted">Nutrition stats will appear here</p>
                </div>
            )}
        </motion.div>
    )
}

export default NutritionWidget
