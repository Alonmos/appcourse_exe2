import React from 'react'
import FCRecipe from '../Functional Comps/FCRecipe'


export default function FCRecipes(props) {

    const getRecipeIDToEat = (recipeid, recipename, recipecookingTime, recipecookingMethod, recipeimg) => {
        props.getRecipeToEat(recipeid, recipename, recipecookingTime, recipecookingMethod, recipeimg);
    }

    let strRenderRecipesList = props.recipesList.map((recipe , ind) => {
            return <FCRecipe    
            id= {recipe.id}
            name= {recipe.name}
            cookingTime= {recipe.cookingTime}
            cookingMethod= {recipe.cookingMethod}
            img_url= {recipe.img_url}
            key={ind}
            recipestatus='recipe'
            buttontext ='Prepare Dish!'
            prepareDishToEat= {getRecipeIDToEat}//send the getRecipeToEat function as props.
            />
        })

  return (
    <div className='row'>
        {strRenderRecipesList}
    </div>
    )
}
