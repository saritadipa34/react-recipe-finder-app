import { FaSearch } from "react-icons/fa";

const InputBox=({value})=>{
    return(
        <div className="cursor-pointer">
<FaSearch className="absolute top-11 ml-4 "/>

        <input className="w-full h-10 border pl-9" type="text"  
        value={value}
        />
</div>
    )
}
export default InputBox;