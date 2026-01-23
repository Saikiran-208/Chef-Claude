import React from 'react'
import ReactMarkdown from "react-markdown"
import { motion } from "framer-motion"

const ClaudeRecipe = ({ recipe }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-8 bg-card-bg backdrop-blur-[8px] rounded-lg shadow-soft border glass-border"
            aria-live="polite"
        >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-black/5">
                <span className="text-2xl bg-[#f24e1e1a] w-14 h-14 flex items-center justify-center rounded-full">🧑‍🍳</span>
                <h2 className="font-bold text-2xl">Chef Claude Recommends:</h2>
            </div>

            <div className="recipe-markdown leading-relaxed">
                <ReactMarkdown>
                    {recipe}
                </ReactMarkdown>
            </div>
        </motion.section>
    )
}

export default ClaudeRecipe
