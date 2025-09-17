import React from 'react'
import ReactMarkdown from "react-markdown"

const ClaudeRecipe = ({ recipe }) => {
    return (
        <section className='recipe-container list-disc' aria-live='polite'>
            <h2 className='font-bold text-2xl'>Chef Claude Recommends:</h2>
            <ReactMarkdown>
                {recipe}
            </ReactMarkdown>
        </section>
    )
}

export default ClaudeRecipe
