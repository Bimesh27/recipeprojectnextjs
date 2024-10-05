import RecipeDetailsItem from '@/components/recipe-details/recipedetails';
import React from 'react'

async function fetchRecipeDetails(currentRecipeId: number) {
    try {
        const response = await fetch(`https://dummyjson.com/recipe/${currentRecipeId}`);
        const data = await response.json();
        console.log(data); 
        return data;
        
    } catch (error) {
        if(error instanceof Error) {
            console.error(error.message)
        }
        throw new Error('Failed to fetch recipe details')
    }
}

const RecipeDetailsPage = async ({params}: {params: {details: number}}) => {
    const getRecipeDetails = await fetchRecipeDetails(params.details);
    console.log(getRecipeDetails);
    console.log('hello');
    
  return (
    <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
  )
}

export default RecipeDetailsPage