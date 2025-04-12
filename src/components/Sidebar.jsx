
import { IoHome } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar=()=>{
    return(
        <div>
            <DesktopSidebar />
        <MobileSidebar />
        </div>
    )
}
export default Sidebar;

const DesktopSidebar=()=>{
    return(
        <div className="min-h-screen w-[100px] sticky sm:flex flex-col gap-5 md:w-[230px] sm:pt-[10px] md:px-[30px] px-[10px] sm:border-r  md:border-r ">
            <div className=" sticky left-0 top-0 w-full">
                <div className="w-full">
                <img className="h-[120px] w-full  hidden md:block " src="/desktoplogo.png" alt="logo1" />
                <img className="z-1 h-[100px] mb-[20px] block md:hidden " src="/mobilelogo.jpeg" alt="logo2" />
                </div>

                <div  className="flex cursor-pointer flex-col gap-5 lg:block">
                <div className=" font-bold ">
                <Link to="/" className=" flex flex-col gap-2 md:flex-row  items-center"><IoHome size={"20px"}/>
                <h1 className="hidden md:block">Home</h1> 
                </Link>
            </div>

            <div className="font-bold">
            <Link to="/Favorites" className="flex flex-col md:flex-row items-center gap-2 "><FaRegHeart size={"20px"}/>
            <h1 className="hidden md:block">Favorites</h1> 
            </Link>
        </div>
        </div>

       </div>
        </div>
    )
}


const MobileSidebar=()=>{
    return(
        <div className="  bg-red-300  border-t fixed left-0 right-0 bottom-0 block z-10 sm:hidden">
        <div className="flex gap-7 justify-center">
               <Link to="/"><IoHome size={"20px"}/> </Link> 
               <Link to="/Favorites"> <FaRegHeart size={"20px"}/></Link> 
                </div>
        </div>
    )
}
