import { motion } from "framer-motion"

const SidebarWidget = ({ title, items, icon, side = "right" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: side === "right" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card-bg backdrop-blur-[8px] rounded-lg p-6 shadow-soft border glass-border h-fit"
        >
            <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{icon}</span>
                <h3 className="text-lg font-semibold text-text-main">{title}</h3>
            </div>

            <div className="list-none">
                {items.map((item, index) => (
                    <div key={index} className="mb-5">
                        <div className="text-[0.95rem] font-bold mb-1">{item.name}</div>
                        <div className="text-[0.85rem] text-text-muted leading-snug">{item.desc}</div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default SidebarWidget
