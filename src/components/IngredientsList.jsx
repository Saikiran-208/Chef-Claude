import React from 'react'

const IngredientsList = ( {ingredients,getRecipe,ref} ) => {
    return (
        <>
            <div className=' px-2 py-4 mt-[-10px]  max-sm:mx-10 '>
                <ul className=" list-disc flex flex-col gap-2 ">
                    {
                        ingredients.length > 0 ?
                            <>
                                <h1 className="font-bold text-2xl ml-[-19px]">Ingredients on hand:</h1>
                                {ingredients.map(item => <li className="" key={item}>{item}</li>)}
                            </>
                            :
                            <h1 className="ml-[-19px] font-semibold text-xl">Add Ingredients to get the recipe! </h1>
                    }
                </ul>
            </div>


            {
                ingredients.length > 3 && <div ref={ref} className="flex gap-10 bg-yellow-50 px-2 py-5 w-150 max-sm:max-w-3xs max-sm:min-w-sm rounded-md shadow justify-center items-center">
                    <div className="flex flex-col gap-3 max-sm:gap-1">
                        <p className="font-semibold text-lg max-sm:text-sm">Ready for a recipe?</p>
                        <p className="text-gray-500 max-sm:text-xs">Generate a recipe from your list of ingredients.</p>
                    </div>
                    <div>
                        <button onClick={getRecipe} className="bg-orange-500 text-white px-3 py-1 border border-orange-400 rounded-md shadow max-sm:min-w-30 max-sm:max-w-50">Get a recipe</button>
                    </div>
                </div>

            }
        </>


    )
}

export default IngredientsList
