import { FaRegHeart } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { GiRiceCooker } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Card=({card,onClick})=>{
  
    return(
  
        <div className="w-[270px] h-[200px] p-0 relative cursor-pointer bg-red-300">
     
            <img className="h-[110px] w-full " src={card && card.strMealThumb || "/food.jpeg"} alt="food" />
            <FaRegHeart onClick={onClick} className="absolute bottom-0 right-0" size={"20px"}/>
            <FaHeart onClick={onClick} className="absolute bottom-0 right-0 text-red-500" size={"21px"}/>
            <h1 className="font-bold mt-3 mx-3 ">{card && card.strMeal || "meal"}</h1>
            <p className="mx-3 mb-1 font-semibold">{card &&  card.strArea || "area"}</p>
            <div className="flex gap-10 ">
<button className=" bg-yellow-300 rounded-md mx-3 px-3 cursor-pointer "><MdVideoLibrary /></button>
<Link to="/recipe" state={{card}}> <button className="bg-sky-400 cursor-pointer rounded-lg flex gap-1"> <GiRiceCooker className="text-2xl" />Recipe</button></Link>
</div>
        </div> 
    )
}
export default Card;