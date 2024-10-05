import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface Recipe{
    id: string;
    name: string;
    image: string;
    rating: number;
    cuisine: string;
}

interface RecipeListProps{
    recipeList: Recipe[];
}

const RecipeList = ({ recipeList }: RecipeListProps) => {
  console.log(recipeList);

  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Recipes</h2>
        <Link href={"/"} >Go Home</Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList &&
            recipeList.map((recipe : Recipe) => (
              <Link href={`/recipe-list/${recipe.id}`}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-all">
                    <div className="w-full lg:h-80">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top "
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900">
                        {recipe.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-base font-semibold text-gray-600">
                          Rating:{recipe.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-base font-bold text-gray-600">
                            {recipe.cuisine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
