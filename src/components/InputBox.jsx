import { FaSearch } from "react-icons/fa";

const InputBox=({value,onChange,onClick})=>{
    return(
        <div className="cursor-pointer">
<FaSearch className="absolute top-11 ml-4 " 
onClick={onClick}
/>
        <input className="w-full h-10 border pl-9" type="text" value={value} onChange={onChange}
        />
</div>
    )
}
export default InputBox;