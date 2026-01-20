import { motion } from "framer-motion"

const LoadingSpinner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 py-16"
        >
            {/* Animated Chef Hat */}
            <motion.div
                animate={{
                    rotate: [0, 10, -10, 10, 0],
                    y: [0, -10, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="text-7xl"
            >
                👨‍🍳
            </motion.div>

            {/* Cooking Animation */}
            <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                        className="w-3 h-3 bg-orange-500 rounded-full"
                    />
                ))}
            </div>

            {/* Loading Text */}
            <div className="text-center">
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl font-bold text-gray-800"
                >
                    Chef Claude is cooking...
                </motion.p>
                <p className="text-sm text-gray-500 mt-2">
                    Crafting your perfect recipe
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                    animate={{
                        x: ["-100%", "100%"]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="h-full w-1/2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                />
            </div>
        </motion.div>
    )
}

export default LoadingSpinner
