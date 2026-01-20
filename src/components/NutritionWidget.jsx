import { motion } from "framer-motion"
import { useMemo } from "react"

// Simplified nutrition database (calories per 100g)
const nutritionDB = {
    // Proteins
    "chicken": { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    "beef": { calories: 250, protein: 26, carbs: 0, fat: 17 },
    "fish": { calories: 206, protein: 22, carbs: 0, fat: 12 },
    "salmon": { calories: 208, protein: 20, carbs: 0, fat: 13 },
    "eggs": { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
    "tofu": { calories: 76, protein: 8, carbs: 1.9, fat: 4.8 },

    // Carbs
    "rice": { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    "pasta": { calories: 131, protein: 5, carbs: 25, fat: 1.1 },
    "bread": { calories: 265, protein: 9, carbs: 49, fat: 3.2 },
    "potato": { calories: 77, protein: 2, carbs: 17, fat: 0.1 },
    "quinoa": { calories: 120, protein: 4.4, carbs: 21, fat: 1.9 },

    // Vegetables
    "broccoli": { calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
    "spinach": { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    "tomato": { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    "carrot": { calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
    "onion": { calories: 40, protein: 1.1, carbs: 9, fat: 0.1 },
    "bell pepper": { calories: 31, protein: 1, carbs: 6, fat: 0.3 },

    // Dairy
    "cheese": { calories: 402, protein: 25, carbs: 1.3, fat: 33 },
    "milk": { calories: 42, protein: 3.4, carbs: 5, fat: 1 },
    "yogurt": { calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
    "mozzarella": { calories: 280, protein: 28, carbs: 3, fat: 17 },

    // Others
    "olive oil": { calories: 884, protein: 0, carbs: 0, fat: 100 },
    "butter": { calories: 717, protein: 0.9, carbs: 0.1, fat: 81 },
    "garlic": { calories: 149, protein: 6.4, carbs: 33, fat: 0.5 },
    "basil": { calories: 23, protein: 3.2, carbs: 2.7, fat: 0.6 },
}

const NutritionWidget = ({ ingredients }) => {
    const stats = useMemo(() => {
        let totalCalories = 0
        let totalProtein = 0
        let totalCarbs = 0
        let totalFat = 0
        let matchedCount = 0

        ingredients.forEach(ingredient => {
            const normalized = ingredient.toLowerCase().trim()
            const match = Object.keys(nutritionDB).find(key =>
                normalized.includes(key) || key.includes(normalized)
            )

            if (match) {
                const nutrition = nutritionDB[match]
                totalCalories += nutrition.calories
                totalProtein += nutrition.protein
                totalCarbs += nutrition.carbs
                totalFat += nutrition.fat
                matchedCount++
            }
        })

        return {
            calories: Math.round(totalCalories),
            protein: Math.round(totalProtein),
            carbs: Math.round(totalCarbs),
            fat: Math.round(totalFat),
            matchedCount,
            totalCount: ingredients.length
        }
    }, [ingredients])

    const hasData = stats.matchedCount > 0

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-6 p-6 rounded-[2rem] bg-gradient-to-br from-orange-50/80 to-white/60 backdrop-blur-xl border border-orange-100/60 shadow-xl self-start sticky top-28 w-72"
        >
            <div className="flex items-center gap-3">
                <span className="text-2xl">🔥</span>
                <h3 className="font-black text-gray-900 tracking-tight">Nutrition Tracker</h3>
            </div>

            {hasData ? (
                <div className="flex flex-col gap-4">
                    {/* Calories - Main Stat */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-orange-200/50 shadow-sm"
                    >
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-orange-600">{stats.calories}</span>
                            <span className="text-sm font-bold text-gray-500">kcal</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 font-medium">Estimated Total</p>
                    </motion.div>

                    {/* Macros */}
                    <div className="grid grid-cols-3 gap-3">
                        <MacroCard label="Protein" value={stats.protein} unit="g" color="blue" />
                        <MacroCard label="Carbs" value={stats.carbs} unit="g" color="green" />
                        <MacroCard label="Fat" value={stats.fat} unit="g" color="yellow" />
                    </div>

                    {stats.matchedCount < stats.totalCount && (
                        <p className="text-xs text-gray-400 italic text-center">
                            {stats.matchedCount}/{stats.totalCount} ingredients recognized
                        </p>
                    )}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                        <span className="text-3xl">📊</span>
                    </div>
                    <p className="text-sm font-bold text-gray-600">Add ingredients to track</p>
                    <p className="text-xs text-gray-400 mt-1">Nutrition stats will appear here</p>
                </div>
            )}
        </motion.div>
    )
}

const MacroCard = ({ label, value, unit, color }) => {
    const colorMap = {
        blue: "from-blue-50 to-blue-100/50 border-blue-200/50 text-blue-700",
        green: "from-green-50 to-green-100/50 border-green-200/50 text-green-700",
        yellow: "from-yellow-50 to-yellow-100/50 border-yellow-200/50 text-yellow-700"
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-br ${colorMap[color]} backdrop-blur-sm rounded-xl p-3 border shadow-sm`}
        >
            <div className="text-xl font-black">{value}{unit}</div>
            <div className="text-[10px] font-bold uppercase tracking-wide opacity-70">{label}</div>
        </motion.div>
    )
}

export default NutritionWidget
