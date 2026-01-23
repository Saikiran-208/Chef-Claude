import { motion } from "framer-motion"

const LoadingSpinner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center gap-6 py-16 w-full"
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
                className="text-[4.5rem] block"
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
                        className="w-3 h-3 bg-primary-orange rounded-full"
                    />
                ))}
            </div>

            {/* Loading Text */}
            <div className="text-center">
                <motion.h3
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl font-bold text-text-main mb-2 text-center"
                >
                    Chef Claude is cooking...
                </motion.h3>
                <p className="text-sm text-text-muted text-center">
                    Crafting your perfect recipe
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-[250px] h-2 bg-[#eee] rounded-full overflow-hidden mt-4">
                <motion.div
                    animate={{
                        x: ["-100%", "200%"]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="h-full w-1/2 bg-gradient-to-r from-[#f24e1e] to-[#ff8c6b] rounded-full"
                />
            </div>
        </motion.div>
    )
}

export default LoadingSpinner
