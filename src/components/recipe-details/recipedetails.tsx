import Link from "next/link";
import React from "react";

interface RecipeDetails {
  image: string;
  name: string;
  mealType: string[];
  cuisine: string;
  ingredients: string[];
}

interface RecipeDetailsItemProps {
  getRecipeDetails: RecipeDetails;
}

const RecipeDetailsItem = ({ getRecipeDetails }: RecipeDetailsItemProps) => {
  console.log(getRecipeDetails);

  return (
    <div>
        <Link href={'/recipe-list'}>Go to recipe list</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start gris-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails.image}
              alt={getRecipeDetails.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {getRecipeDetails?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5 text-2xl text-gray-800">
              <p>{getRecipeDetails?.cuisine}</p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsItem;
