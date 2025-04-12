import { FaRegHeart } from "react-icons/fa";


const Card=({card})=>{
    console.log(card);
    
    if(card){
        console.log(card)
    }
    
    return(
        <div className="w-[270px] h-[200px] relative cursor-pointer bg-red-300">
            <img className="h-[110px] w-full " src={card.strMealThumb} alt="food" />
            <FaRegHeart className="absolute bottom-0 right-0" size={"20px"}/>
            <h1 className="font-bold mt-3 mx-3 ">{card.strMeal}</h1>
            <p className="mx-3 font-semibold">{card.strArea}</p>
<button className=" bg-yellow-300 rounded-md mx-3 px-3 cursor-pointer ">Link</button>
        </div>
    )
}
export default Card;