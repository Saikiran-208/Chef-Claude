import { motion } from "framer-motion"

const SidebarWidget = ({ title, items, icon, side }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl lg:self-start lg:sticky lg:top-28 w-full lg:w-72`}
        >
            <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">{icon}</span>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 tracking-tight">{title}</h3>
            </div>
            <ul className="flex flex-col gap-3 sm:gap-4">
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="group flex flex-col gap-1 cursor-default"
                    >
                        <span className="text-xs sm:text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                            {item.label}
                        </span>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default SidebarWidget
