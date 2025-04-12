import { useEffect, useState } from "react";
import Card from "./Card";
import InputBox from "./InputBox";

const Home=()=>{
const [cardData,setCardData]=useState([]);
const [search,setSearch]=useState('');

useEffect(()=>{
const getData=async()=>{
    try{
        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data=await response.json();
        console.log(data);
        setCardData(data.meals);
    } catch (error){
    console.log(error.message);
    }
}
getData();

}
,[])

    return(
        <div className=" w-full mx-[80px] my-[30px] min-h-screen bg-blue-200">
            <InputBox />
            <h1 className="font-bold text-3xl my-4">Recommened Recipes</h1>
            <div className="flex flex-wrap gap-5">
            {
                cardData.map((card,i)=>{
            return  <Card  key={i} card={card}/>
                })
}
</div>
        </div>
    )
}
export default Home;