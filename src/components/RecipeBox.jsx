import { useLocation } from "react-router-dom";

const RecipeBox=()=>{
    const location=useLocation();
    console.log(location)
    const instructions=location.state.card.strInstructions;
    const mainItem=location.state.card.strMeal;
    return(
        <div className="h-screen w-full px-5">
        <div>
        <h1 className="text-4xl font-bold my-4">Recipe Details</h1>
        <h1 className="text-2xl font-bold my-4" >{mainItem}</h1>
        </div>
        <div className="flex justify-between gap-2 h-full w-full">
        <div className="bg-blue-400 w-[70%]">
           <p className="">     {instructions} </p>
            </div>
        <div className="h-full bg-red-200 flex items-center">
<img className="h-[50%]" src="/food.jpeg" alt="food" />
            </div>
        </div>
        </div>
    )
}
export default RecipeBox;