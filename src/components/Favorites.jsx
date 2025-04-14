import { useEffect, useState } from 'react';
import Card from './Card';
const Favorites=()=>{
    const [addFav,setAddFav]=useState([]);    
    const [removeItem,setRemoveItem]=useState([]);
    
const handleRemove=(id)=>{
    const removed=addFav.filter((fav)=>fav.idMeal !== id)
    setAddFav(removed);
    localStorage.setItem("card",JSON.stringify(removed));
    console.log("remove",removed);
}

    useEffect(()=>{
        const stored=localStorage.getItem("card");
        if(stored){
            setAddFav(JSON.parse(stored));
        }
        },[])
       
    return(
        <div className='h-screen w-full bg-emerald-300 mx-[80px] my-[30px]'>
            <h1 className='font-bold text-4xl bg-amber-400 my-4'>Your Favorote Items</h1>
            <div className='flex flex-wrap gap-5'>
                {addFav.map((fav,i)=>{
            return <Card onClick={()=>handleRemove(fav.idMeal)} card={fav} id={fav.idMeal} key={i}/>
                })}
            </div>
        </div>
    )
}
export default Favorites;