import RecipeList from "@/components/recipe-list/recipelist";

async function fetchListOfRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();

    return data?.recipes;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    throw new Error("Failed to fetch recipes");
  }
}

const Recipes = async () => {
  const recipeList = await fetchListOfRecipes();
  return (
    <div>
      <RecipeList recipeList={recipeList}/>
    </div>
  );
};

export default Recipes;
